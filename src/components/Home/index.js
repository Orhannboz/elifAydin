import react from 'react'
import Layout from '../Layout'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import React, { useState, useEffect } from 'react'
import Logo from './logo'

const Home = () => {
  return (
    <div className="container home-page">
      <Logo></Logo>
      <div className="icon">
        <div className="e-a">
          <h3 className="icon-logo">E.A.</h3>
        </div>
        <div>
          <h1 className="elif">Merhaba, Ben Elif Aydın.</h1>
          <h1 className="egitmen"> Yüzme eğitmenliği ile ilgileniyorum benimle <br/>alakalı bilgi almak veya benimle çalışmak <br/>istiyorsanız benimle iletişime geçebilir <br/> veya daha fazla bilgi almak için hakkımda <br/>sayfasını ziyaret edebilirsiniz.</h1>
          <div className="btn-div">
            <Link to="/contact" className="flat-button">
              İletişim
            </Link>
          </div>
          <div className="end1">
            <div className="end-header">
              <h4>Bana ulaşmak için;</h4>
            </div>
            <div className="soclais">
              <div className="left">
                <h1>
                  Facebook
                  <a href="#" class="fa fa-facebook">
                    {' '}
                  </a>
                </h1>
                <h1>
                  Twitter
                  <a href="#" class="fa fa-twitter"></a>
                </h1>
              </div>
              <div className="right">
                <h1>
                  Mail
                  <a href="#" class="fa fa-google"></a>
                </h1>
                <h1>
                  Instagram
                  <a href="#" class="fa fa-instagram"></a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
/*<Logo></Logo>
      <div className="icon">
        <h3 className="icon-logo">E.A.</h3>
      </div>
      <div className="text">
        <h1>Merhaba, Ben Elif Aydın.</h1>
      </div>
      <div className="text2">
        <h1> Yüzme eğitmenliği ile ilgileniyorum</h1>
        <Link to="/contact" className="flat-button">
          İletişim
        </Link>
      </div>
    </div>*/
