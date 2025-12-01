import { useTranslation } from 'react-i18next'
import './style.css'
import Contacts from '../HomePage/Contacts'

function AllProjects() {
  const {t} = useTranslation()
  return (
    <>
      <div className="body-all-projects">
        <div className="wrapper-all-projects">
          <h1 className="all-project-title">{t('all-projects.title')}</h1>
          <div className="box-projects">
            <div className="project-container"
            >
              <div className="all-project1-photo">
                <figure>
                  <figcaption></figcaption>
                </figure>
              </div>
              <div className="all-name-project">
                <h3>{t('all-name-project1')}</h3>
              </div>
              <div className="all-description-project">
                <p style={{whiteSpace: 'pre-line'}}>{t('all-description-project1')}</p>
              </div>
              <div className="tecnologia">React | HTML5 | CSS3 | JavaScript</div>
              <div className="button-project">
                <a href="https://marianabelo26.github.io/siteApple/" target='_blank' rel="noopener noreferrer" className="link-project">{t('projects.see-project')}</a>
              </div>
            </div>
            <div className="project-container"
            >
              <div className="all-project2-photo">
                <figure>
                  <figcaption></figcaption>
                </figure>
              </div>
              <div className="all-name-project">
                <h3>{t('all-name-project2')}</h3>
              </div>
              <div className="all-description-project">
                <p style={{whiteSpace: 'pre-line'}}>{t('all-description-project2')}</p>
              </div>
              <div className="tecnologia">React | HTML5 | CSS3 | JavaScript | Next | TypeScript | Tailwind CSS | Vercel </div>
              <div className="button-project">
                <a href="https://jasminesjuices.vercel.app/" target='_blank' rel="noopener noreferrer" className="link-project">{t('projects.see-project')}</a>
              </div>
            </div>
            <div className="project-container"
            >
              <div className="all-project3-photo">
                <figure>
                  <figcaption></figcaption>
                </figure>
              </div>
              <div className="all-name-project">
                <h3>{t('all-name-project3')}</h3>
              </div>
              <div className="all-description-project">
                <p style={{whiteSpace: 'pre-line'}}>{t('all-description-project3')}</p>
              </div>
              <div className="tecnologia">React | HTML5 | CSS3 | JavaScript | Vite</div>
              <div className="button-project">
                <a href="https://marianabelo26.github.io/todo/#/tasks" target="_blank" rel="noopener noreferrer" className="link-project">{t('projects.see-project')}</a>
              </div>
            </div>
            <div className="project-container"
            >
              <div className="all-project4-photo">
                <figure>
                  <figcaption></figcaption>
                </figure>
              </div>
              <div className="all-name-project">
                <h3>{t('all-name-project4')}</h3>
              </div>
              <div className="all-description-project">
                <p style={{whiteSpace: 'pre-line'}}>{t('all-description-project4')}</p>
              </div>
              <div className="tecnologia">HTML5 | CSS3 | JavaScript </div>
              <div className="button-project">
                <a href="https://marianabelo26.github.io/javascript/dev-links/index.html" target="_blank" rel="noopener noreferrer" className="link-project">{t('projects.see-project')}</a>
              </div>
            </div>
            <div className="project-container"
            >
              <div className="all-project5-photo">
                <figure>
                  <figcaption></figcaption>
                </figure>
              </div>
              <div className="all-name-project">
                <h3>{t('all-name-project5')}</h3>
              </div>
              <div className="all-description-project">
                <p style={{whiteSpace: 'pre-line'}}>{t('all-description-project5')}</p>
              </div>
              <div className="tecnologia">HTML5 | CSS3 | JavaScript</div>
              <div className="button-project">
                <a href="https://marianabelo26.github.io/javascript/quiz/index.html" target="_blank" rel="noopener noreferrer" className="link-project">{t('projects.see-project')}</a>
              </div>
            </div>
          </div>
        </div>
        <hr style={{marginBottom: "30px"}}/>
        <Contacts />
      </div>
    </>
  )
}

export default AllProjects
