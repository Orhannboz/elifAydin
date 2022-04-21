import { react, useState, useEffect } from 'react'
import './index.scss'
import Single from '../../assets/images/bursa.png'
import Kocaeli from '../../assets/images/kocaeli.png'
import Win from '../../assets/images/win.jpg'
const About = () => {
  return (
    <div className="Container about-page">
      <div className="header">
        <h1>Hakkımda</h1>
      </div>
      <div className="text-area">
        <div className="first-text">
          <div>
            <p>
              <hr />
              19.09.1995 Bursa doğumluyum, 2010 ile 2014 yılları arasında Su
              Topu Milli <br />
              Takımında yer almış bulunmaktayım. B ve C Millilik belgesine
              sahibim.
              <br /> 8 yıl boyunca Bursagücü takımında sporcu olarak görev
              yapmaktaydım.
              <br /> 2012 yılından bu yana bir çok farklı bölge antrenörlük ve
              cankurtaranlık yapmış <br />
              bulunmaktayım. Kocaeli Üniversitesi Beden eğitimi ve Öğretmenliği
              mezunuyum. <br />
              Fakat bir çok bölgede antrenörlük ve cankurtaranlık yaptığım için
              toplam tecrübem 6 yıldır.
            </p>
          </div>
          <div className="fimg">
            <img src={Single} alt="bursa"></img>
          </div>
        </div>
      </div>
      <div className="text-area2">
        <div className="second-text">
          <div>
            <p>
              <hr />
              Ara yıllarda Kocaeli Üniversitesi havuzunda cankurtaranlık ve
              yüzme
              <br />
              antrenörlüğü yapmış bulunmaktayım, kısa dönemlerde <br />
              Yıldızlar Yüzme Kulübü, Marmara Dinamik, Gökay Spor Kulübünde
              yüzme antrenörlüğü Gökay Spor Kulübünde Su Topu takımı açılmasına
              öncülük etmiş
              <br /> ve kısa bir süre antrenörlüğünü yapmış bulunmaktayım.{' '}
              <br />
            </p>
          </div>
          <div className="fimg">
            <img src={Kocaeli} alt="bursa"></img>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="win">
          <img src={Win} alt="win"></img>
        </div>

        <div className="cert">
          <h3> Sertifakalarım </h3>
          <ul>
            <li>1. Kademe Yüzme Antrenörlük Belgesi</li>
            <li>1. Kademe Su Topu Antrenörlük Belgesi</li>
            <li>Bronz/Gümüş Cankurtaranlık Belgesi 2012</li>
          </ul>
        </div>
      </div>
      <div className="end">
        <div className="end-header">
          <h3>Bana ulaşmak için;</h3>
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
  )
}

export default About
