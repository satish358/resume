import NavBar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <NavBar />
        <div className='mt-4'><Outlet /></div>
    </>
  )
}

export default Layout