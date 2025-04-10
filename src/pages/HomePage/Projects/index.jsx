import { useState } from 'react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import './style.css'

function Projects({ projects }) {
  const { t } = useTranslation()
  const [isHovered, setIsHovered] = useState(null)
  const navigate = useNavigate()

  const handleMouseEnter = (projectId) => {
    setIsHovered(projectId)

  }

  const handleMouseLeave = () => {
    setIsHovered(null)
  }

  return (
    <>
      <div className="body-projects">
        <div className="wrapper-projects">
          <h1 className="project-title">{t('projects.title')}</h1>
          <div className="project1-container"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="project-photo">
              <figure>
                <figcaption></figcaption>
              </figure>
            </div>
            <div className="name-project">
              <h3>{t('projects.name-project1')}</h3>
            </div>
            {isHovered === 1 && (
              <motion.div className="hover-project"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <div className="description-project">
                  <p>{t('projects.description-project1')}</p>
                </div>
                <div className="button-project">
                  <a href="https://marianabelo26.github.io/siteApple/" target='_blank' rel="noopener noreferrer" className="link-project-1">{t('projects.see-project')}</a>
                </div>
              </motion.div>
            )}
          </div>
          <div className="project2-container"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="project-photo2">
              <figure>
                <figcaption></figcaption>
              </figure>
            </div>
            <div className="name-project2">
              <h3>{t('projects.name-project2')}</h3>
            </div>
            {isHovered === 2 && (
              <motion.div className="hover-project"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <div className="description-project2">
                  <p>{t('projects.description-project2')}</p>
                </div>
                <div className="button-project2">
                  <a href="https://marianabelo26.github.io/javascript/dev-links/index.html" target='_blank' rel="noopener noreferrer"  className="link-project-2">{t('projects.see-project')}</a>
                </div>
              </motion.div>
            )}
          </div>
          <div className="project3-container"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="project-photo3">
              <figure>
                <figcaption></figcaption>
              </figure>
            </div>
            <div className="name-project3">
              <h3>{t('projects.name-project3')}</h3>
            </div>
            {isHovered === 3 && (
              <motion.div className="hover-project"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <div className="description-project3">
                  <p>{t('projects.description-project3')}</p>
                </div>
                <div className="button-project3">
                  <a href="https://marianabelo26.github.io/todo/#/tasks" target="_blank" rel="noopener noreferrer"  className="link-project-3">{t('projects.see-project')}</a>
                </div>
              </motion.div>
            )}
          </div>
          <div className="button-see-more-projects">
            <button type="button" onClick={() => navigate('/projects')}>{t('projects.more-project')}</button>
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default Projects

