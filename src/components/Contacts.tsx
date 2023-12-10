import emailLogo from '../assets/email.png';
import linkInLogo from '../assets/linkedin.png';

const Contacts = () => {
  return (
     <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={emailLogo}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:satishmankar745@gmail.com">satishmankar745@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkInLogo}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a target='_blank' href="https://www.linkedin.com/in/satish-mankar-30b70b106/">LinkedIn</a></p>
        </div>
      </div>
    </section>
  )
}

export default Contacts