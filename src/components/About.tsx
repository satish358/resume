import arrowLogo from '../assets/arrow.png';
import aboutPic from '../assets/about-pic.png';
import expLogo from '../assets/experience.png';
import eduLogo from '../assets/education.png';
import awsCertificate from '../assets/aws_certificate.pdf';
import javeCertificate from '../assets/java8_certificate.pdf'

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title"><span className='green-text'>About</span> Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={aboutPic}
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={expLogo}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>2.5+ years <br />Full Stack Development</p>
            </div>
            <div className="details-container">
              <img
                src={eduLogo}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>B.Tech. <span className='green-text'><b>[CS]</b></span> Bachelors Degree<br />Diploma In Computer Science</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Hi, I'm Satish Mankar, a seasoned full stack developer with 2.5+ years of experience. 
              I hold a Bachelor's degree in Computer Science and currently work at Accenture. 
              My expertise spans both front-end and back-end technologies, 
              and I hold certifications as an 
              <span className='green-text ptr' onClick={() => window.open(awsCertificate)}><b> AWS Developer Associate Certification</b></span> and 
              <span className='green-text ptr' onClick={() => window.open(javeCertificate)}><b> Oracle's Java 8 Programmer Certification</b></span>. 
              I'm passionate about creating scalable solutions and staying abreast of the latest in software development.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowLogo}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => location.href='./#experience'}
      />
    </section>
  )
}

export default About