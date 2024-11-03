import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home/Home.js";
import Contact from "./Components/Home/Contact.js";
import About from "./Components/Home/About.js";
import Categories from "./Components/Home/Categories.js";
import Admin from "./Components/Home/Admin.js";
import { UpdateFollower } from 'react-mouse-follower';
import Service from './Components/Services/Service.js';
import Banner from './Components/Banner/Banner.js';
import BannerBottom from './Components/Banner/BannerBottom.js';
import Blog from "./Components/Blog/Blog.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  return (
    <>
        <Router>
          <UpdateFollower 
            mouseOptions={{
              backgroundColor: "white",
              zIndex: 999,
              followSpeed: 1.5,
            }}
          >
          <Navbar />
          </UpdateFollower>
              <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Categories' element={<Categories />} />
                    <Route path='/Blog' element={<Blog />} />
                    <Route path='/Login' element={<Admin />} />
              </Routes>
        </Router>

        <UpdateFollower 
            mouseOptions={{
              backgroundColor: "red",
              zIndex: 999,
              followSpeed: 1.5,
            }}>
             <Service />
          </UpdateFollower>
       
          <UpdateFollower 
            mouseOptions={{
              backgroundColor: "green",
              zIndex: 999,
              followSpeed: 1.5,
            }}>
             <Banner />
             <BannerBottom />
          </UpdateFollower> 

          <UpdateFollower 
            mouseOptions={{
              backgroundColor: "black",
              zIndex: 999,
              followSpeed: 1.5,
            }}>
             <Blog />
          </UpdateFollower> 

          <UpdateFollower 
            mouseOptions={{
              backgroundColor: "white",
              zIndex: 999,
              followSpeed: 1.5,
            }}>
             <Footer />
          </UpdateFollower>
    </>
  )
}

export default App