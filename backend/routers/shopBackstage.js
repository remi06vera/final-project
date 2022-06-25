const express = require('express');
const router = express.Router();

const pool = require('../utils/db');

//上架菜色圖片
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'assets', 'shopbackstage'));
  },
  filename: function (req, file, cb) {
    let newFilename = file.originalname;
    cb(null, newFilename);
  },
});
const uploader = multer({
  // 設定儲存的位置
  storage: storage,
});

//店家後臺主頁
router.get('/', async (request, respond, next) => {
  if (request.session.LoginShopMember) {
    // 表示登入過
    return respond.json(request.session.LoginShopMember);
  } else {
    // 表示尚未登入
    return respond.status(403).json({ code: 2001, error: '尚未登入' });
  }
});

//查詢shopID的資料
router.get('/search', async (req, res, next) => {
  const shopID = req.query.shopID;
  let [data, fields] = await pool.execute(`SELECT * from shop WHERE id=${shopID}`);
  res.json({ result: data });
});

//開團先找dish
router.get('/checklist', async (req, res, next) => {
  const shopID = req.query.shopID;
  let [data, fields] = await pool.execute(`SELECT name from dish WHERE shop_id=${shopID}`);
  res.json({ result: data });
});
//開團
router.post('/opengroup', async (req, res, next) => {
  console.log('startTime', req.body);
  const { startTime, endTime, eatingDate, eatingTime, goalNum, price, shopID } = req.body;
  const group = await pool.execute('INSERT INTO groups (start_time, end_time, eating_date, eating_time, goal_num, price, shop_id) VALUES (?, ?, ?, ?, ?, ?, ?)', [
    startTime,
    endTime,
    eatingDate,
    eatingTime,
    goalNum,
    price,
    shopID,
  ]);

  const dishArr = req.body.dish;
  for (let i = 0; i < dishArr.length; i++) {
    const dish = dishArr[i];
    console.log(dish);
    await pool.execute('INSERT INTO groups_and_dish (groups_id, dish_id) VALUES (?, ?)', [group[0].insertId, dish]);
  }
  await res.json({ result: 'OK' });
});
//團單清單
//全部開團
router.get('/grouplist', async (req, res, next) => {
  const shopID = req.query.shopID;
  let [data] = await pool.execute(`SELECT * FROM groups WHERE shop_id=${shopID}`);
  // console.log('我要', data);
  res.json({ result: data });
});
//開團中
router.get('/nowopen', async (req, res, next) => {
  const shopID = req.query.shopID;
  let [data] = await pool.execute(`SELECT DISTINCT groups.*, shop.name  FROM groups JOIN shop ON groups.shop_id=shop.id
  WHERE now() >= start_time AND  now() <= end_time AND groups.shop_id=${shopID}`);
  res.json({ result: data });
});
//已成團
router.get('/coropen', async (req, res, next) => {
  const shopID = req.query.shopID;
  let [data] = await pool.execute(`SELECT DISTINCT groups.*, shop.name  FROM groups JOIN shop ON groups.shop_id=shop.id
  WHERE now() < eating_date AND now_num>goal_num AND groups.shop_id=${shopID}`);
  res.json({ result: data });
});
//未成團
router.get('/noneopen', async (req, res, next) => {
  const shopID = req.query.shopID;
  let [data] = await pool.execute(`SELECT groups.*, shop.name  FROM groups JOIN shop ON groups.shop_id=shop.id
  WHERE now() > eating_date AND now_num<goal_num AND groups.shop_id=${shopID}`);
  res.json({ result: data });
});
//歷史開團
router.get('/finishopen', async (req, res, next) => {
  const shopID = req.query.shopID;
  let [data] = await pool.execute(`SELECT groups.*, shop.name  FROM groups JOIN shop ON groups.shop_id=shop.id
  WHERE now() > eating_date AND now_num>goal_num AND groups.shop_id=${shopID}`);
  res.json({ result: data });
});

//上架菜色
router.post('/opendish', uploader.single('photo'), async (req, res, next) => {
  console.log('dishName', req.body);
  let photo = req.file ? '/shopbackstage/' + req.file.filename : '';
  const { name, price, description, shop_id } = req.body;
  const [dish] = await pool.execute('INSERT INTO dish (name, price, description, photo, shop_id) VALUES (?, ?, ?, ?, ?)', [name, price, description, photo, shop_id]);
  // console.log(dish);
  res.json({ result: 'OK' });
});

//菜色清單
router.get('/dishlist', async (req, res, next) => {
  const shopID = req.query.shopID;
  // const dishID = req.query.dishID;
  let [data] = await pool.execute(`SELECT * FROM dish WHERE shop_id=${shopID}`);
  res.json({ result: data });
  // let [delete] = await pool.execute(`DELETE FROM dish WHERE dish.id =${dishID}`);
  // res.json({ delete: data });
});
module.exports = router;

//SELECT groups.shop_id, shop.id, shop.name from groups JOIN shop ON groups.shop_id=shop.id WHERE groups.shop_id=${shopID}
