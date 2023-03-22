import React from "react";
import {FaChevronRight} from "react-icons/fa"
import { Link } from "react-scroll";
const Home = () => {
  return(
    <div name='home' className=" text-white w-full bg-[#172233] py-20 ">
    {/* container */}
    <div className="h-screen max-w-[1100px]  mx-auto  flex flex-col justify-center px-10 md:px-24 lg:px-24">
      <p className="ttt text-2xl sm:text-4xl  text-sky-400 ">Hello, My name  is </p>
      <h1 className="text-4xl font-bold text-[#e0e6f9] sm:text-6xl py-2">Jyoti Raj Dahal</h1>
      <h2 className="text-4xl font-bold text-[#8892b0] sm:text-5xl ">I'm a React Developer.</h2>
      <p className="text-[#8892b0] py-4 max-w-[700px]">I'm a self-taught front-end developer with extensive experience for last 2 years. My expertise is to create, design and development user interface for web application, mobile application and many more.</p>
      
      <div className="mt-2">
      <Link to='work' className="">
      <button className="myButton flex flex-row justify-center items-center gap-3">
      
      <h1 className="text-lg">View Work</h1> 
          <FaChevronRight />
          
          </button>
          </Link>
      </div>
    </div>
  </div>
  )
  
}
export default Home;