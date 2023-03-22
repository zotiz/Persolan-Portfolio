const About = () => {
  return (
    <div name="about" className="w-full py-20 bg-[#172233] text-white">
      <div className=" flex flex-col justify-center items-center w-full  ">
        <div className=" max-w-[1100px] mx-auto w-full grid grid-cols-2 gap-8  px-10 md:px-24 lg:px-24">
          <div className="sm:text-right  my-8  ">
          
            <p className="text-4xl  font-bold inline">Abo<span className="border-b-4 border-sky-400">ut</span></p>
          
            
           
          </div>
         
        </div>
        <div className=" max-w-[1100px] w-full grid sm:grid-cols-2 gap-8 px-10 md:px-24 lg:px-24">
          <div className="sm:text-right text-3xl font-bold mt-4">
            <p className="text-sky-400">
              Hello, I'm Jyoti Dahal. Nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div className="py-4">
            <p>
              Hello, my name is Jyoti Dahal.I am a self-taught front-end
              developer. I primarily focus on writing clean, elegant, and
              efficient code. I am proficient in React.js, React Native, Redux,
              JavaScript, Bootstrap, Tailwind, HTML, CSS, Git/GitHub. I also
              review existing code and can consult with you on how to improve
              it.
              <br></br>
              <br></br> As a front-end developer with a strong design
              background, I take a holistic approach in the consideration of
              every new project. I believe that great design is a result of the
              collaboration between designers, developers and stakeholders,
              whose combined experience and efforts come together to create
              great user experiences. I believe that great user experiences are
              created through understanding not only user expectations and
              goals, but also the commitment to help see through expectations
              and goals through effective storytelling and enhanced
              functionality. As a designer and developer, I aspire to be apart
              of a team that is oriented in this way, and look forward to
              applying my knowledge and skill toward the concept and creation of
              sophisticated digital products.
              {/* I am passionate about building excellent web applicatin and mobile
              application that lives of those around me. I specialize in
              creating single page application using with react,redux for clints
              ranging from individuals and small-businesses all the way to large
              enterprise corporations. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
