import React, { useState } from 'react'
import bild from './images/portfolio_home.webp'
// import bild2 from './images/portfolioimage2.png'
import email from './icons/email.png'
import phone from './icons/phone.png'
import maps from './icons/maps.png'
import linkedin from './icons/linkedin.png'
import github from './icons/github.png'
import homePagePrestanda from './images/prestanda98_met96_tillgSEO100.webp'
import omMigPagePrestanda from './images/omMigSida_prestTillg98_met96_SEO100.png'
import projectPageprestanda from './images/ProjectPage-prestMet96_tillg95_SEO100.png'
import hobbysPagePrestanda from './images/hobbys-prestTillg95_met93_SEO100.png'
import kontaktPagePrestanda from './images/kontaktSida_prest98_tillgSEO100_ met96.png'

function Contact() {

  const mail = "kingaszayer@gmail.com";
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(mail)
    .then(() => {
      setCopySuccess(true);
      setTimeout (() => setCopySuccess(false), 2000);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
  };
  

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
    {/* <a href='mailto:kingaszayer@gmail.com'>kingaszayer@gmail.com</a> */}

    <a href={`mailto:${mail}`}>{mail}</a>

   
    <button className="copy-button-icon" onClick={copyToClipboard}>Copy</button>
   
    
    </div>

    {copySuccess && (
      <p className="copy-button-ok">Email copied to clipboard!</p>
    )}
    

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
    
<article>
    <div className="images-basic">
      <div>
        <img src={homePagePrestanda} alt="bild på prestanda hem sida" />
      </div>
      <div>
        <img src={omMigPagePrestanda} alt="bild på prestanda om mig sida" />
      </div>
      <div>
        <img src={projectPageprestanda} alt="bild på prestanda projekt sida" />
      </div>
      <div>
        <img src={hobbysPagePrestanda} alt="bild på prestanda hobby sida" />
      </div>
      <div>
        <img src={kontaktPagePrestanda} alt="bild på prestanda kontakt sida" />
      </div>
    </div>

    <div class="images-leaning">
    <div>
        <img src={homePagePrestanda} alt="bild på prestanda hem sida" />
      </div>
      <div>
        <img src={omMigPagePrestanda} alt="bild på prestanda om mig sida" />
      </div>
      <div>
        <img src={projectPageprestanda} alt="bild på prestanda projekt sida" />
      </div>
      <div>
        <img src={hobbysPagePrestanda} alt="bild på prestanda hobby sida" />
      </div>
      <div>
        <img src={kontaktPagePrestanda} alt="bild på prestanda kontakt sida" />
      </div>
    </div>
    </article>


    <style jsx>{
    `#fab {
      display:none;
    }`
    }</style>
  </>
}

export default Contact