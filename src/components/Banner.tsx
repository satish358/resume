import profilePicture from '../assets/profile-pic.png';
import gitLogo from '../assets/github.png';
import linkedInLogo from '../assets/linkedin.png';
import resume from '../assets/SatishResume.pdf';

const Banner = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profilePicture} alt="John Doe profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title"> <span className='green-text'>Satish</span> Mankar</h1>
        <p className="section__text__p2">Full Stack Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open(resume)}
          >
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={() => location.href='./#contact'}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedInLogo}
            alt="My LinkedIn profile"
            className="icon"
            onClick={()=> location.href='https://www.linkedin.com/in/satish-mankar-30b70b106/'}
          />
          <img
            src={gitLogo}
            alt="My Github profile"
            className="icon"
            onClick={()=> location.href='https://github.com/satish358'}
          />
        </div>
      </div>
    </section>
  )
}

export default Banner

