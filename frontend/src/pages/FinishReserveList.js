import React from 'react'
import Header from '../components/Header/Header'

const FinishReserveList = () => {
  return (
    <>
      <div className=" container my-6">
        <Header />
        <div className="d-flex justify-content-center">
          <div>
            <div className="w-75 ms-8" style={{ marginRight: '80px' }}>
              <img
                style={{ width: '500px' }}
                className="mb-5"
                src={require('../image/shoppingCart/icongroup06.png')}
                alt=""
              />
            </div>
            {/* List */}
            <div className="bg-secondary d-flex flex-column align-items-center">
              <div className="mt-8 mb-5">
                <img
                  style={{ width: '100px' }}
                  src={require('../image/shoppingCart/finish.png')}
                  alt=""
                />
              </div>
              <h3 className="pb-3 mb-5 border-bottom border-1 border-dark w-75 text-center">
                已完成訂位
              </h3>

              <div className="w-75">
                <h6 className="mb-4">訂單編號：</h6>
                <div className="d-flex mb-4">
                  <div className="ms-6">000001</div>
                  <div className="ms-5">鼎泰豐 (2022/06/17)</div>
                  <div className="ms-5">人數 : 1</div>
                </div>
                <div className="d-flex mb-4">
                  <div className="ms-6">000002</div>
                  <div className="ms-5">夏慕尼 (2022/06/18)</div>
                  <div className="ms-5">人數 : 1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FinishReserveList
