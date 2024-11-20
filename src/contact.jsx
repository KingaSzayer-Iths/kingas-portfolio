import React from 'react'
import bild from './images/portfolio_home.webp'
// import bild2 from './images/portfolioimage2.png'
import email from './icons/email.png'
import phone from './icons/phone.png'
import maps from './icons/maps.png'
import linkedin from './icons/linkedin.png'
import github from './icons/github.png'

function Contact() {
  return <>
    <div className="contact-me">
    <div className="contact-header">
    <h1>Kontakta mig</h1>
    </div>
    {/* <div className="contact"> */}
    <section className="contact-container">
    <article className="contact-image-flex">
    <div className="image-top">
    <img width="180px" src={bild} alt="Bild2 på mig" />
    </div>
    </article>
    <div className="contact-info">
    <div>
    <p><strong><img width="20px"src={email} alt="E-mail icon" />E-post:</strong></p>
    {/* <p>kingaszayer@gmail.com</p> */}

    <a href='mailto:kingaszayer@gmail.com'>kingaszayer@gmail.com</a>

    </div>
    <div>
    <p><strong><img width="20px"src={phone} alt="Phone icon" />Telefon:</strong></p>
    <p>+46 707466819</p>
    </div>
    <div>
    <p><strong><img width="28px"src={maps} alt="Maps icon" />Plats:</strong></p>
    <p>Stockholm, Sweden</p>
    </div>
    <div className="social-media">
      <a href="https://www.linkedin.com/in/kinga-szayer-701205235"><img width="48px"src={linkedin} alt="Linkedin icon" /></a>
      <a href="https://github.com"><img width="48px"src={github} alt="Github icon" /></a>
    </div>
    </div>
    </section>
    </div>
    {/* </div> */}

    <style jsx>{
    `#fab {
      display:none;
    }`
    }</style>
  </>
}

export default Contact