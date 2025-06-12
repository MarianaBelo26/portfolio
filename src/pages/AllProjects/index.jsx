import { useState } from 'react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import './style.css'
import Contacts from '../HomePage/Contacts'

function AllProjects() {
  const {t} = useTranslation()
  const [isHovered, setIsHovered] = useState(null)

  const handleMouseEnter = (projectId) => {
    setIsHovered(projectId)

  }

  const handleMouseLeave = () => {
    setIsHovered(null)
  }

  return (
    <>
      <div className="body-all-projects">
        <div className="wrapper-all-projects">
          <h1 className="all-project-title">{t('all-projects.title')}</h1>
          <div className="all-project1-container"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="all-project-photo">
              <figure>
                <figcaption></figcaption>
              </figure>
            </div>
            <div className="name-all-project">
              <h3>{t('all-projects.name1')}</h3>
            </div>
            {isHovered === 1 && (
              <motion.div className="hover-all-project"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <div className="description-all-project">
                  <p>{t('all-projects.description1')}</p>
                </div>
                <div className="button-all-project">
                  <a href="https://marianabelo26.github.io/siteApple/" target='_blank' rel="noopener noreferrer"  className="link-all-project-1">{t('all-projects.see-project')}</a>
                </div>
              </motion.div>
            )}
          </div>
          <div className="all-project2-container"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="all-project-photo2">
              <figure>
                <figcaption></figcaption>
              </figure>
            </div>
            <div className="name-all-project2">
              <h3>{t('all-projects.name2')}</h3>
            </div>
            {isHovered === 2 && (
              <motion.div className="hover-all-project"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <div className="description-all-project2">
                  <p>{t('all-projects.description2')}</p>
                </div>
                <div className="button-all-project2">
                  <a href="https://jasminesjuice.netlify.app/" target='_blank' rel="noopener noreferrer"  className="link-all-project-2">{t('all-projects.see-project')}</a>
                </div>
              </motion.div>
            )}
          </div>
          <div className="all-project3-container"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="all-project-photo3">
              <figure>
                <figcaption></figcaption>
              </figure>
            </div>
            <div className="name-all-project3">
              <h3>{t('all-projects.name3')}</h3>
            </div>
            {isHovered === 3 && (
              <motion.div className="hover-all-project"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <div className="description-all-project3">
                  <p>{t('all-projects.description3')}</p>
                </div>
                <div className="button-all-project3">
                  <a href="https://marianabelo26.github.io/javascript/dev-links/index.html" target='_blank' rel="noopener noreferrer"  className="link-all-project-3">{t('all-projects.see-project')}</a>
                </div>
              </motion.div>
            )}
          </div>
          <div className="all-project4-container"
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="all-project-photo4">
              <figure>
                <figcaption></figcaption>
              </figure>
            </div>
            <div className="name-all-project4">
              <h3>{t('all-projects.name4')}</h3>
            </div>
            {isHovered === 4 && (
              <motion.div className="hover-all-project"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <div className="description-all-project4">
                  <p>{t('all-projects.description4')}</p>
                </div>
                <div className="button-all-project4">
                  <a href="https://marianabelo26.github.io/todo/#/tasks" target="_blank" rel="noopener noreferrer" className="link-all-project-4">{t('all-projects.see-project')}</a>
                </div>
              </motion.div>
            )}
          </div>
          <div className="all-project5-container"
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="all-project-photo5">
              <figure>
                <figcaption></figcaption>
              </figure>
            </div>
            <div className="name-all-project5">
              <h3>{t('all-projects.name5')}</h3>
            </div>
            {isHovered === 5 && (
              <motion.div className="hover-all-project"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <div className="description-all-project5">
                  <p>{t('all-projects.description5')}</p>
                </div>
                <div className="button-all-project5">
                  <a href="https://marianabelo26.github.io/javascript/quiz/index.html" target="_blank" rel="noopener noreferrer" className="link-all-project-5">{t('all-projects.see-project')}</a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
        <hr style={{marginBottom: "30px"}}/>
        <Contacts />
      </div>
    </>
  )
}

export default AllProjects
