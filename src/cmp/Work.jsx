import React from 'react'
import PORTFOLIO from '../images/p11.png'
import PROJECT11 from '../images/p1.jpg'
const Work = ()=>{
  return(
    <div name= 'work' className='w-full py-20 bg-[#172233]  text-white '>
      <div className='max-w-[1100px] mx-auto pb-10 flex flex-col justify-center  w-full px-10 md:px-24 lg:px-24'>
        <div className='my-8'>
          <p className='text-4xl font-bold inline '>Wo<span className="border-b-4 border-sky-400">rk</span></p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
          <div style={{backgroundImage:`url(${PORTFOLIO})`}}   className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto items-center content-div '>
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  Personal Portfolio
              </span>
              <div className='pt-8 text-center'>
                <a href="https://zotiz.github.io/portfolio/" target='_blank rel="noopener"'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold'>Demo</button>
                </a>
                <a href="https://github.com/zotiz/portfolio.git" target='_blank rel="noopener"'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage:`url(${PROJECT11})`}}   className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto items-center content-div '>
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage:`url(${PROJECT11})`}}   className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto items-center content-div '>
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage:`url(${PROJECT11})`}}   className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto items-center content-div '>
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold'>Code</button>
                </a>
              </div>
            </div>

            
          </div>
          <div style={{backgroundImage:`url(${PROJECT11})`}}   className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto items-center content-div '>
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold'>Code</button>
                </a>
              </div>
            </div>
            
          </div>
          <div style={{backgroundImage:`url(${PROJECT11})`}}   className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto items-center content-div '>
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold'>Code</button>
                </a>
              </div>
            </div>
          </div>
          
        </div>

      </div>
     </div>
  )
}
export default Work