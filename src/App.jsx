import { useState } from 'react'
import About from "./About.jsx"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Contact from "./Contact.jsx"
import Projects from "./Projects.jsx"



export default function App() {

  const [page, setPage] = useState("about")

  function changePage(pageName) {
    console.log("test")
    setPage(pageName)
  }

  return (
    <div className="App">
      <Header 
        currentPage={page}
        changePage={changePage}
       />
      {page == "contact" ? <Contact /> 
      : page == "projects" ? <Projects /> 
      : <About />}
      <Footer />
    </div>
  )
}


