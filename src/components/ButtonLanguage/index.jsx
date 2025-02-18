import { useTranslation } from 'react-i18next'
import './style.css'

function ButtonLanguage() {

    const { i18n } = useTranslation()

    const toggleLanguage = () =>{
        const newLang = i18n.language === 'pt' ? 'en' : 'pt'
        i18n.changeLanguage(newLang)
    }

    return (
        <>
                <div className="switch" onClick={toggleLanguage}>
                    <span className="wrapper-button">
                        <button className={`button-idiom ${i18n.language === 'pt' ? 'portuguese' : 'english'}`}></button>
                    </span>
            </div>
        </>
    )
}

export default ButtonLanguage