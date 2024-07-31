
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <>
    <div className='appContainer'>
      <Header/>
       <div className='mainContent'>
        <div className="container mx-auto">
        <Outlet/>
        </div>
       </div>
      <Footer/>
      </div>
    </>
  )
}

export default Main
