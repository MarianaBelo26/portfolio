import { useTranslation } from 'react-i18next'
import './style.css'
import Contacts from '../HomePage/Contacts'
import CvPt from '../../assets/pdf_cvs/pt_cv_Mariana_Belo.pdf'
import CvEn from '../../assets/pdf_cvs/en_cv_Mariana_Belo.pdf'

function LinkCV() {
  const { t } = useTranslation()

  return (
    <>
      <div className="body-link-cv">
        <div className="wrapper-link-cv">
          <hr />
          <div className="my-link-cv">
            <p className="p-link-cv-en">My curriculum vitae in EN</p>
            <a href={CvEn} target="_blank" className="button-link-cv-en">EN-CV</a>
            <p className="p-link-cv-pt">Meu currículo em PT-BR</p>
            <a href={CvPt} target="_blank" className="button-link-cv-pt">PT-CV</a>
          </div>
          <hr style={{marginBottom: "30px"}}/>
          <Contacts />
        </div>
      </div>
    </>
  )
}

export default LinkCV
