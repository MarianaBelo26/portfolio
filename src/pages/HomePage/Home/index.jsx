import { useTranslation } from 'react-i18next'
import './style.css'

function Home() {
  const {t} = useTranslation()

  return (
    <>
      <div className="body-home">
        <div className="wrapper-home">
          <div className="my-name">
            <h1 className="name">
              Mariana Belo
            </h1>
          </div>
          <div className="photo-container">
            <div className="photo-myself">
              <figure className="my-photo">
              <figcaption></figcaption>
              </figure>
            </div>
            <div className="profission">
            <p className="description">
                {t('home.description')}
              </p>
              
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default Home
