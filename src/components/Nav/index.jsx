import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './style.css'
import ButtonLanguage from '../ButtonLanguage/index.jsx'

function Nav() {

    const { t } = useTranslation()
    const [menuIsClicked, setMenuIsClicked] = useState(false)
    const [widthScreen, setWidthScreen] = useState(window.innerWidth)

    const openMenu = (event) => {
        event.preventDefault()
        setMenuIsClicked(!menuIsClicked)
    }

    const closeMenu = (event) => {
        event.preventDefault()
        setMenuIsClicked(!menuIsClicked)
    }

    useEffect(() => {
        const handleResize = () => setWidthScreen(window.innerWidth)

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            <header className="header">
                <nav className="nav">
                    <ul className="nav-items-container">
                        <li>
                            <Link to="/" className="my-name-nav">Mariana</Link>
                        </li>
                        <li className="menu-container-button"
                            aria-expanded={menuIsClicked}
                            onClick={openMenu}>
                            <a role="button" href="#" className={`button-menu ${menuIsClicked ? 'open' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#194027" className="bi bi-list" viewBox="0 0 28 11">
                                    <rect className="line line1" width="24" height="2" x="0" y="6"></rect>
                                    <rect className="line line2" width="24" height="2" x="0" y="12"></rect>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <ButtonLanguage />
                    <ul className="menu-container-navbar"
                        style={
                            widthScreen >= 768 ? { display: 'flex' } :
                                { display: menuIsClicked ? 'flex' : 'none' }
                        }>
                        <li className={`projects ${menuIsClicked? 'close' : ''}`} onClick={closeMenu}>
                            <Link to="/projects">{t('nav.projects')}</Link>
                        </li>
                        <li className={`cv ${menuIsClicked ? 'close' : ''}`} onClick={closeMenu} >
                            <Link to="/cv">CV</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Nav