const Contact= () => {
  return(
    <div name = 'contact' className="py-20 w-full text-white bg-[#0a192f] ">
      <div className='max-w-[1100px] mx-auto pb-10 flex flex-col justify-center h-full w-full px-10 md:px-24  lg:px-24'>
      
        <div className="my-8">
          <p className="text-4xl  font-bold inline ">Conta<span className="border-b-4 border-sky-400">ct</span></p>
        </div>
        <div className="mb-12">
          <p className="">Submit the form below or shoot me an email - myemail@gmail.com</p>
        </div>
        <div className="w-full flex justify-center items-center">
        <form action="https://getform.io/f/cee511f4-687e-483e-a763-8516fab34277" method= 'POST' className="flex  flex-col max-w-[500px] w-full">
        <input className='bg-[#ccd6f6] py-2 px-3 rounded-md text-[#424242] focus:outline-none' type="text" placeholder="Name" name='name' required/>
        <input className="my-4 py-2 px-3 bg-[#ccd6f6] rounded-md text-[#424242] focus:outline-none" type="email" placeholder="Email" name='email' required/>
        <textarea  className=" py-2 px-3 bg-[#ccd6f6] rounded-md text-[#424242] focus:outline-none" name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
        <div className="flex justify-end my-4">
     
      <button className="myButton flex flex-row justify-center items-center gap-3">
      <h1 className="text-lg">Let's Collaborate</h1> 
          
          </button>
   
        </div>
      </form>
      </div>
      </div>
    </div>
  )
}
export default Contact