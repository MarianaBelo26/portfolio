import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import './style.css'


function Projects() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  function scrollToTop() {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div className="body-projects">
        <div className="wrapper-projects">
          <h1 className="project-title">{t('projects.title')}</h1>
          <div className="box-projects">
            <div className="project-container"
            >
              <div className="project1-photo">
                <figure>
                  <figcaption></figcaption>
                </figure>
              </div>
              <div className="name-project">
                <h3>{t('projects.name-project1')}</h3>
              </div>
              <div className="description-project">
                <p style={{ whiteSpace: 'pre-line' }}>{t('projects.description-project1')}</p>
              </div>
              <div className="tecnologia">React | HTML5 | CSS3 | JavaScript</div>
              <div className="button-project">
                <a href="https://marianabelo26.github.io/siteApple/" target='_blank' rel="noopener noreferrer" className="link-project">{t('projects.see-project')}</a>
              </div>
            </div>
            <div className="project-container"
            >
              <div className="project2-photo">
                <figure>
                  <figcaption></figcaption>
                </figure>
              </div>
              <div className="name-project">
                <h3>{t('projects.name-project2')}</h3>
              </div>
              <div className="description-project">
                <p style={{ whiteSpace: 'pre-line' }}>{t('projects.description-project2')}</p>
              </div>
              <div className="tecnologia">React | HTML5 | CSS3 | JavaScript | Next | TypeScript | Tailwind CSS | Vercel </div>
              <div className="button-project">
                <a href="https://jasminesjuices.vercel.app/" target='_blank' rel="noopener noreferrer" className="link-project">{t('projects.see-project')}</a>
              </div>
            </div>
            <div className="project-container"
            >
              <div className="project3-photo">
                <figure>
                  <figcaption></figcaption>
                </figure>
              </div>
              <div className="name-project">
                <h3>{t('projects.name-project3')}</h3>
              </div>
              <div className="description-project">
                <p style={{ whiteSpace: 'pre-line' }}>{t('projects.description-project3')}</p>
              </div>
              <div className="tecnologia">React | HTML5 | CSS3 | JavaScript | Vite</div>
              <div className="button-project">
                <a href="https://marianabelo26.github.io/todo/#/tasks" target="_blank" rel="noopener noreferrer" className="link-project">{t('projects.see-project')}</a>
              </div>
            </div>
          </div>
          <div className="button-see-more-projects">
            <button type="button" onClick={() => {
              scrollToTop()
              navigate('/projects')
            }}>{t('projects.more-project')}</button>
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default Projects

