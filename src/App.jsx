import Header from "./components/Header";
import Hero from "./components/Hero"
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {ArrowDown} from "lucide-react"
 const App = () => {
  return(
    <>
    <Header />
    
    <main>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
    </main>
    <Footer />

    </>
  )
}

export default App