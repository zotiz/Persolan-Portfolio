import React,{useState} from 'react'
import { FaBars,FaTimes,FaLinkedin, FaGithub,FaEnvelope,FaUserTie } from 'react-icons/fa'
import { Link } from "react-scroll"
function Navbar() {
  const [bars, setBars] = useState(false)
  const [anim, setAnim]  = useState('')

  const hamHandler = ()=>{
    
    if (bars){
    setAnim('animate__animated animate__bounceOutUp duration-300	')
    setTimeout(()=>{setBars(!bars)},300)
    }
    else {
      setBars(!bars)
      setAnim('animate__animated animate__bounceInDown  duration-200	')
    }
   
  }
 
 
  return (
    
    <div className='fixed z-10 w-full h-[80px] bg-[#0a192f] text-gray-100 px-10 md:px-24 lg:px-24 flex justify-between items-center border-b-[0.1px] border-slate-700'>
      {/* logo */}
      <div >
        <h1 className='logoImage text-5xl font-extrabold text-sky-400 '><Link to='home'>JD</Link></h1>
        {/* <img src='jd-logo.png' style = {{width:'100px', height:'75px'}} alt= 'Logo' className='logoImage'/> */}
      </div>

      {/* menu */}
      
        <ul className=' hidden md:flex gap-10'>
          <li className='hover:border-b-2 border-sky-400'><Link to='home'>Home</Link></li>
          <li className='hover:border-b-2 border-sky-400'><Link to='about'>About</Link></li>
          <li className='hover:border-b-2 border-sky-400'><Link to='skills'>Skills</Link></li>
          <li className='hover:border-b-2 border-sky-400'><Link to='work'>Wrok</Link></li>
          <li className='hover:border-b-2 border-sky-400'><Link to='contact'>Contact</Link></li>
        </ul>
      
      {/* Hamburger menu */}
      <div className='md:hidden z-10'  onClick={hamHandler}>
        {!bars ?<FaBars size={25} className={`cursor-pointer `}/>:<FaTimes size={25} className={`cursor-pointer`}/>
        }
      </div>

     
      
      {/* Mobile menu */}
  
    
       <ul className={!bars ? `hidden` : `absolute top-0 left-0 w-full h-screen bg-sky-900 flex flex-col justify-center items-center gap-8  ${anim}`}>
          <li  className='cursor-pointer text-2xl hover:scale-125 ease-in-out duration-300'><Link onClick={hamHandler}  to='home'>Home</Link></li>
          <li className='cursor-pointer text-2xl hover:scale-125 ease-in-out duration-300'><Link onClick={hamHandler} to='about'>About</Link></li>
          <li className='cursor-pointer text-2xl hover:scale-125 ease-in-out duration-300'><Link onClick={hamHandler} to='skills'>Skills</Link></li>
          <li className='cursor-pointer text-2xl hover:scale-125 ease-in-out duration-300'><Link onClick={hamHandler} to='work'>Wrok</Link></li>
          <li className='cursor-pointer text-2xl hover:scale-125 ease-in-out duration-300'><Link onClick={hamHandler} to='contact'>Contact</Link></li>
        </ul>
  
       {/* Social icons */}
        <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[120px] h-[45px] ml-[-80px] hover:ml-[0px] flex items-center justify-between duration-300'>
              <a href="https://www.linkedin.com/in/jyoti-dahal-5b395825a/" target={'_blank'} rel="noreferrer" className='flex justify-between items-center px-2 gap-3 bg-blue-600  w-full h-full text-white'>Linkedin<FaLinkedin size={25}/></a>
            </li>
            <li className='w-[120px] h-[45px] ml-[-80px] hover:ml-[0px] flex items-center justify-between duration-300'>
              <a href="https://github.com/zotiz/"  target={'_blank'} rel="noreferrer" className='flex justify-between items-center px-2 gap-3 bg-[#4a4949]  w-full h-full text-white'>GitHub<FaGithub size={25}/></a>
            </li>
            <li className='w-[120px] h-[45px] ml-[-80px] hover:ml-[0px] flex items-center justify-between duration-300'>
              <Link to="contact" className='flex justify-between items-center px-2 gap-3 bg-[#1fc2b9]  w-full h-full text-white'>Email<FaEnvelope size={25}/></Link>
            </li>
            <li className='w-[120px] h-[45px] ml-[-80px] hover:ml-[0px] flex items-center justify-between duration-300'>
              <a href="/" className='flex justify-between   items-center px-2 gap-3 bg-[#D77FA1]  w-full h-full text-white'>Resume<FaUserTie size={25}/></a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
