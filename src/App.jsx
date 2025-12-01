import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./i18n"
import Nav from './components/Nav'
import Home from './pages/HomePage/Home'
import Me from './pages/HomePage/Me'
import Projects from './pages/HomePage/Projects'
import Contacts from './pages/HomePage/Contacts'
import CV from './pages/HomePage/CV'
import AllProjects from './pages/AllProjects'
import LinkCv from './pages/LinkCv'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Me />
            <Projects />
            <Contacts />
            <CV />
          </>
        }/>
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/cv" element={<LinkCv />} />
      </Routes>
    </Router>
  )
}

export default App
