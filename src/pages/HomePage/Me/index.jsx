import { useTranslation } from 'react-i18next'
import './style.css'

function Me() {
  const { t } = useTranslation()

  return (
    <>
      <div className="body-me">
        <div className="wrapper-me">
          <div className="who-its-me">
            <h1 className="title-how">
              {t('me.title')}
            </h1>
            <p className="its-me" style={{whiteSpace:'pre-line'}}>
              {t('me.its-me')}
            </p>
              <ul className="skills">
                <li className='skill'>React.js</li>
                <li className='skill'>JavaScript</li>
                <li className='skill'>TypeScript</li>
                <li className='skill'>HTML5</li>
                <li className='skill'>CSS3</li>
                <li className='skill'>Tailwind</li>
                <li className='skill'>Node.js</li>
                <li className='skill'>MySQL</li>
              </ul>
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default Me

