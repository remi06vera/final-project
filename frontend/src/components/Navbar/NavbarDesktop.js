import React from 'react'
import { Link } from 'react-router-dom'

const NavbarDesktop = () => {
  return (
    <>
      <div className="head">
        <div className="logo">
          <img src={require('../../image/navbar/logo.png')} alt="" />
        </div>

        <div className="navBar">
          <ul>
            <li>
              <Link to="">
                <h4>首頁</h4>
              </Link>
            </li>
            <li>
              <Link to="">
                <h4>立即參團</h4>
              </Link>
            </li>
            <li>
              <Link to="">
                <h4>店家列表</h4>
              </Link>
            </li>
            <li>
              <Link to="">
                <h4>店家登入/註冊</h4>
              </Link>
            </li>
          </ul>
        </div>

        <div className="icon">
          <img src={require('../../image/navbar/shop.png')} alt="" />
          <img src={require('../../image/navbar/login.png')} alt="" />
          <img src={require('../../image/navbar/map.png')} alt="" />
        </div>
      </div>
    </>
  )
}

export default NavbarDesktop
