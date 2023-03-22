import React from "react"
import REACTLOGO from '../images/react.png'
import REDUX from '../images/redux.png'
import JSLOGO from '../images/js.png'
import TAILWIND from '../images/tailwind.png'
import BOOTSTRAP from '../images/bootstrap.png'
import CSSLOGO from '../images/css.png'
import HTML from '../images/html.png'
import GIT from '../images/git.png'
const Skills = () => {
  return(
    <div name='skills' className="w-full py-20 bg-[#172233] text-white">
      <div className=" max-w-[1100px] w-full mx-auto px-10 md:px-24 lg:px-24">
        <div className="my-8">
          <p className="text-4xl font-bold inline">Experien<span className="border-b-4 border-sky-400">ce</span></p>
          </div>
          <div className="">
          <p>These are the technologies I've worked with</p>
        </div>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  gap-16 my-10">
            <div className=" text-center rounded  border-sky-700 border-2 hover:scale-105 duration-300 w-[160px]">
             
              <img src={REACTLOGO}
             alt="react" className="w-full" />
              
             <div className="bg-sky-700 py-3">
             <p className=' text-xl font-semibold '>React.js</p>
             </div>
            
            </div>
            
            <div className=" text-center rounded  border-sky-700 border-2 hover:scale-105 duration-300 w-[160px] ">
             
              <img src={REACTLOGO} alt="react" className="w-full max-auto" />
             
             <div className="bg-sky-700 py-3">
             <p className=' text-xl font-semibold '>React Native</p>
             </div>
            
            </div>
            <div className=" text-center rounded  border-sky-700 border-2 hover:scale-105 duration-300 w-[160px]">
             
              <img src={REDUX}
             alt="redux" className="" />
            
             <div className="bg-sky-700 py-3">
             <p className=' text-xl font-semibold '>Redux</p>
             </div>
            
            </div>
            <div className=" text-center rounded  border-sky-700 border-2 hover:scale-105 duration-300 w-[160px]">
            
              <img src={JSLOGO } alt="javascript" className="w-full" />
              
             <div className="bg-sky-700 py-3">
             <p className=' text-xl font-semibold '>JavaScript</p>
             </div>
            
            </div>
            <div className=" text-center rounded  border-sky-700 border-2 hover:scale-105 duration-300 w-[160px]">
             
              <img src={TAILWIND} alt="tailwind" className="w-full" />
           
             <div className="bg-sky-700 py-3">
             <p className=' text-xl font-semibold '>Tailwind</p>
             </div>
            
            </div>
            <div className=" text-center rounded  border-sky-700 border-2 hover:scale-105 duration-300 w-[160px]">
             
              <img src={BOOTSTRAP}
             alt="bootstrap" className="w-full" />
             
             <div className="bg-sky-700 py-3">
             <p className=' text-xl font-semibold '>Bootstrap</p>
             </div>
            
            </div>
            <div className=" text-center rounded  border-sky-700 border-2 hover:scale-105 duration-300 w-[160px]">
              
              <img src={CSSLOGO } alt="css" className="w-full" />
            
             <div className="bg-sky-700 py-3">
             <p className=' text-xl font-semibold '>CSS</p>
             </div>
            
            </div>
            <div className=" text-center rounded border-sky-700 border-2 hover:scale-105 duration-300 w-[160px]">
              
              <img src={HTML} alt="html" className="w-full" />
             
             <div className="bg-sky-700 py-3">
             <p className=' text-xl font-semibold '>HTML</p>
             </div>
            
            </div>
            <div className=" text-center rounded border-sky-700 border-2 hover:scale-105 duration-300 w-[160px]">
            
              <img src={GIT} alt="git/github" className="w-full" />
           
             <div className="bg-sky-700 py-3">
             <p className=' text-xl font-semibold '>Git/GitHub</p>
             </div>
            
            </div>
            <div>

            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}
export default Skills