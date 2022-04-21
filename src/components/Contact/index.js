import './index.scss'
import { react, useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_5z5cv6p',
        'template_4fmt35l',
        form.current,
        'YM_lR3VnxC11w4p72'
      )
      .then(
        (result) => {
          alert(
            'Mailiniz bana ulaştı kısa sürede size dönüş yapıcağım, teşekkürler.'
          )
        },
        (error) => {
          alert(
            'MAIL API ile alakalı bir problem var, genelde server tarafından kaynaklanır kısa sürede tekrar deneyebilirsin'
          )
        }
      )
  }
  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>Benimle iletişime geç;</h1>
        <p>
          Benimle alakalı bilgi almak veya çalışmak için aşağıdaki formu
          doldurarak mail üzerinden benim ile iletişime <br />
          geçebilirsiniz, hakkımda daha fazla şey öğrenmek veya benden eğitim
          almak istiyorsanız, sizi bekliyorum...
        </p>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="GÖNDER" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
