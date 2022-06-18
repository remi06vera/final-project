import React from 'react'
import { Link } from 'react-router-dom'
import Heart from './Heart'

function ShopCard() {
  return (
    <>
      <div className="hover01 ms-6">
        <div className="zoom-in">
          <Link to="#/">
            <div className="piczoom">
              <img
                className="w-100"
                src={require('../../image/shopList/Kangyaolife-1.jpg')}
                alt=""
              />
            </div>
          </Link>
          <div className=" d-flex mt-3">
            <h5 className="me-auto">陶板屋</h5>
            <Heart className="ms-auto" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopCard
