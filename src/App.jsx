import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import "./i18n"
import Nav from './components/Nav'
import ButtonLanguage from './components/ButtonLanguage'
import Home from './pages/HomePage/Home'
import Me from './pages/HomePage/Me'
import Skills from './pages/HomePage/Skills'
import Projects from './pages/HomePage/Projects'
import Contacts from './pages/HomePage/Contacts'
import CV from './pages/HomePage/CV'
import AllProjects from './pages/AllProjects'
import LinkCv from './pages/LinkCv';

function App() {
  
  const {i18n} = useTranslation()

  const changeLanguage = (lng) =>{
    i18n.changeLanguage(lng)
  }

  return (
    <Router>
      <Nav />
      <ButtonLanguage changeLanguage={changeLanguage}/>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Me />
            <Projects />
            <Skills />
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
