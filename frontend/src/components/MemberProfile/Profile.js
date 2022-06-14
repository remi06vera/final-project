import React from 'react'

const Profile = () => {
  return (
    <>
      <div className="rounded-circle overflow-hidden border border-3 rounded-2 avatar mx-auto mb-3">
        <img
          alt="10x10"
          src={require('../../image/memberProfile/female_pic2.png')}
          className="position-absolute top-50 start-50 translate-middle"
        />
      </div>
      <div className="mb-3">
        <img
          src={require('../../image/memberProfile/line.png')}
          alt=""
          width={250}
        />
      </div>
      <div className="my_context">
        <div className="mb-4">
          <p>小明</p>
        </div>
        <div className="mb-4">
          <p>LV.4 鑽石會員</p>
        </div>
        <div className="mb-4">
          <p>尚餘可用的優惠券10張</p>
        </div>
        <div className="mb-4">
          <p>2022.05.16 開始加入 Unii</p>
        </div>
      </div>
    </>
  )
}

export default Profile
