import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './style.css'
import HtmlIcon from '../../../assets/skills_icons/html.png/'
import CssIcon from '../../../assets/skills_icons/css.png'
import JavaScriptIcon from '../../../assets/skills_icons/javascript.png'
import ReactIcon from '../../../assets/skills_icons/react.png'
import NodeIcon from '../../../assets/skills_icons/node.png'
import MySqlIcon from '../../../assets/skills_icons/mysql.png'


function Skills() {

  const {t} = useTranslation()

  const [isClickedToggle, setIsClickedToggle] = useState(null)

  const clickedToggle = (toggleId) =>{
    setIsClickedToggle((prev) => (prev === toggleId ? null : toggleId))
  }

  return (
    <>
      <div className="body-skills">
        <div className="wrapper-skills">
          <h1 className="title-skills">{t('skills.title')}</h1>
          <div className="my-skills-container">
            <ul className="myskills">
              <li className="html">Html5
                <span className="skil-level-toggle" onClick={() => clickedToggle(1)}>{">"}</span>
              </li>
              {isClickedToggle === 1 &&(<div className="html-skill-level">
                  <img src={HtmlIcon} alt="" className="html-icon"/>
                  <p className="level-title">{t('skills.level-title')}</p>
                  <ul className="levels">
                    <li className="level" style={{background: '#B4B2E1'}}></li>
                    <li className="level" style={{background: '#B4B2E1'}}></li>
                    <li className="level" style={{background: '#B4B2E1'}}></li>
                    <li className="level" style={{background: '#B4B2E1'}}></li>
                    <li className="level"></li>
                  </ul>
              </div>)}
              <hr style={{ margin: '10px 0px', width: '200px' }} />
              <li className="css">Css3 
                <span className="skil-level-toggle" onClick={() => clickedToggle(2)}>{">"}</span>
              </li>
              {isClickedToggle === 2 && (<div className="css-skill-level">
                  <img src={CssIcon} alt="" className="css-icon"/>
                  <p className="level-title">{t('skills.level-title')}</p>
                  <ul className="levels">
                    <li className="level" style={{background: '#B4B2E1'}}></li>
                    <li className="level" style={{background: '#B4B2E1'}}></li>
                    <li className="level" style={{background: '#B4B2E1'}}></li>
                    <li className="level" style={{background: '#B4B2E1'}}></li>
                    <li className="level"></li>
                  </ul>
              </div>)}
              <hr style={{ margin: '10px 0px', width: '200px' }} />
              <li className="javascript">JavaScript 
                <span className="skil-level-toggle" onClick={() => clickedToggle(3)}>{">"}</span>
              </li>
              {isClickedToggle === 3 && (<div className="javascript-skill-level">
                  <img src={JavaScriptIcon} alt="" className="javascript-icon"/>
                  <p className="level-title">{t('skills.level-title')}</p>
                  <ul className="levels">
                    <li className="level" style={{background: '#B4B2E1'}}></li>
                    <li className="level" style={{background: '#B4B2E1'}}></li>
                    <li className="level" style={{background: '#B4B2E1'}}></li>
                    <li className="level" style={{background: '#B4B2E1'}}></li>
                    <li className="level"></li>
                  </ul>
              </div>)}
              <hr style={{ margin: '10px 0px', width: '200px' }} />
              <li className="react">React.js 
                <span className="skil-level-toggle" onClick={() => clickedToggle(4)}>{">"}</span>
              </li>
              {isClickedToggle === 4 && (<div className="react-skill-level">
                  <img src={ReactIcon} alt="" className="react-icon"/>
                  <p className="level-title">{t('skills.level-title')}</p>
                  <ul className="levels">
                    <li className="level" style={{background: '#B4B2E1'}}></li>
                    <li className="level" style={{background: '#B4B2E1'}}></li>
                    <li className="level" style={{background: '#B4B2E1'}}></li>
                    <li className="level" ></li>
                    <li className="level"></li>
                  </ul>
              </div>)}
              <hr style={{ margin: '10px 0px', width: '200px' }} />
              <li className="node">Node.js 
                <span className="skil-level-toggle" onClick={() => clickedToggle(5)}>{">"}</span>
              </li>
              {isClickedToggle === 5 && (<div className="node-skill-level">
                  <img src={NodeIcon} alt="" className="node-icon"/>
                  <p className="level-title">{t('skills.level-title')}</p>
                  <ul className="levels">
                    <li className="level" style={{background: '#B4B2E1'}}></li>
                    <li className="level" style={{background: '#B4B2E1'}}></li>
                    <li className="level"></li>
                    <li className="level"></li>
                    <li className="level"></li>
                  </ul>
              </div>)}
              <hr style={{ margin: '10px 0px', width: '200px' }} />
              <li className="mysql">MySQL 
                <span className="skil-level-toggle" onClick={() => clickedToggle(6)}>{">"}</span>
              </li>
              {isClickedToggle === 6 && (<div className="mysql-skill-level">
                  <img src={MySqlIcon} alt="" className="mysql-icon"/>
                  <p className="level-title">{t('skills.level-title')}</p>
                  <ul className="levels">
                    <li className="level" style={{background: '#B4B2E1'}}></li>
                    <li className="level" style={{background: '#B4B2E1'}}></li>
                    <li className="level" style={{background: '#B4B2E1'}}></li>
                    <li className="level"></li>
                    <li className="level"></li>
                  </ul>
              </div>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills

