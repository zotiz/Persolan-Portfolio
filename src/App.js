import Navbar from './cmp/Navbar'
import Home from './cmp/Home'
import About from './cmp/About'
import Skills from './cmp/Skills'
import Work from './cmp/Work'
import Contact from './cmp/Contact'
import 'animate.css'

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}
export default App
