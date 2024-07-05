import Blog from "./components/Blog"
import Discover from "./components/Discover"
import Featured from "./components/Featured"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Packages from "./components/Packages"
import Popular from "./components/Popular"

function App() {

  return (
    <>
     <Navbar />
     <Hero />
     <Featured />
     <Packages />
     <Popular />
     <Discover />
     <Blog />
     <Footer />
    </>
  )
}

export default App
