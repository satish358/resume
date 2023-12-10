
import reactSearchProject from '../assets/react-search.png'
import arrowLogo from '../assets/arrow.png';
import  analysisVector from '../assets/analysis_vector.png';
import  farmingVector from '../assets/farming_api.png';

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1 green-text">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={reactSearchProject}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">React Search</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => location.href='https://github.com/satish358/simple-react-search'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => location.href='https://www.npmjs.com/package/simple-react-search'}
              >
                Live NPM
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={analysisVector}
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Sentiment Analysis</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => location.href='https://github.com/satish358/sentiment-analysis-open-api'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => location.href='https://github.com/satish358/sentiment-analysis-open-api'}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={farmingVector}
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">E-Farmer API</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => location.href='https://github.com/satish358/e-farmerAPI'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => location.href='https://github.com/satish358/e-farmerAPI'}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrowLogo}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => location.href='./#contact'}
      />
    </section>
  )
}

export default Projects