import { useTranslation } from 'react-i18next'
import { Navigate, useNavigate } from 'react-router-dom'
import './style.css'

function CV() {
  const {t} = useTranslation()
  const navigate = useNavigate()
  
  return (
    <>
      <div className="body-cv">
        <div className="wrapper-cv">
          <hr />
          <div className="my-cv">
            <p className="p-cv">{t('cv.title')}</p>
            <div onClick={() => navigate('/cv')} className="button-cv">CV</div>
          </div>
          <hr />
        </div>
      </div>
    </>
  )
}
 
export default CV

 