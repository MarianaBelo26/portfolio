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
            <p className="its-me">
              {t('me.its-me')}
            </p>
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default Me

