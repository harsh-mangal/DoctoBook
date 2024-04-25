import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Routes from '../Routes/Routes'
const Layout = () => {
  return (
    <div>
        <Header/>
        <main>
            <Routes/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout