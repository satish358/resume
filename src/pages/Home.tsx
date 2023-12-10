import About from "../components/About"
import Banner from "../components/Banner"
import Contacts from "../components/Contacts"
import Experience from "../components/Experience"
import Footer from "../components/Footer"
import Projects from "../components/Projects"

const Home = () => {
  return (
        <>
            <Banner />
            <About />
            <Experience />
            <Projects />
            <Contacts />
            <Footer />
        </>
  )
}

export default Home