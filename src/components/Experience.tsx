import arrowLogo from '../assets/arrow.png';
import checkMark from '../assets/checkmark.png';

const Experience = () => {
  return (
    <section id="experience">
      <p className="section__text__p1 green-text">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title"><span className='green-text'>Frontend</span> Development</h2>
            <div className="article-container">

               <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>React</h3>
                  <p>Experienced</p>
                </div>
              </article>

              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Angular</h3>
                  <p>Experienced</p>
                </div>
              </article>

              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>HTML, CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>SASS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>TypeScript</h3>
                  <p>Intermediate</p>
                </div>
              </article>
             
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title"><span className='green-text'>Backend</span> Development</h2>
            <div className="article-container">
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Java</h3>
                  <p>Experienced</p>
                </div>
              </article>
               <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Spring Boot</h3>
                  <p>Experienced</p>
                </div>
              </article>
               <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>AWS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Node JS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>SQL/NoSQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>DevOps</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrowLogo}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => location.href='./#projects'}
      />
    </section>
  )
}

export default Experience