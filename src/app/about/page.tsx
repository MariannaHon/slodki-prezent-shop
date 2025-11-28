import css from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className={css.about}>
        <h1 className='main-title mb-16'>Nasza Historia Słodkich Prezentów</h1>
        <p className={css['about-paragraph']}>Odkryj magię tworzenia wyjątkowych zestawów słodyczy, które sprawiają radość od ponad dekady. Każdy prezent to nasza pasja i dbałość o szczegóły.</p>
        <div className={css['about-top']}>
            <Image
                  priority
                  className={css['about-top-img']}
                src="/images/presents.png"
                width="588"
                height="384"
                alt="Create a present"
              />
              <div className={css['about-top-right']}>
                  <h2 className='section-title mb-24'>O Nas</h2>
                  <p className={css['about-top-right-bold']}>Spraw, aby pracownicy byli szczęśliwi — a oni w zamian uszczęśliwią Ciebie!</p>
                  <p>A pomożemy Ci w tym my — firma <span className={css['about-top-right-bold']}>Słodki Prezent</span>, specjalista w tworzeniu słodkich prezentów dla dorosłych i dzieci. Współpracujemy z klientami korporacyjnymi w całej Polsce, przygotowując prezenty dla firm i organizacji na najważniejsze święta oraz urodziny firm. <br /><br />
                <span className={css['about-top-right-bold']}>Mikołajki, Boże Narodzenie, Sylwestr, Walentynki, Dzień Kobiet, Dzień Mężczyzn, Wielkanoc</span>
 — w te dni szczególnie miło jest dzielić się radością i wręczać prezenty. Skontaktuj się z nami, a Twój prezent mile zaskoczy współpracowników i podwładnych. </p>
              </div>
          </div>
          <div className={css['about-presents']}>
              <h2 className='section-title mb-16'>Prezenty, które robią wrażenie</h2>
              <p className={css['about-presents-paragraph']}>Stylowe, dopracowane i pełne smaku – znajdziesz u nas zestawy na każdą okazję biznesową i prywatną.</p>
              <ul className={css['about-presents-list']}>
                <li className={css['about-presents-list-item']}>
                    <h4 className='card-title mb-16'>Świąteczne prezenty firmowe</h4>
                    <p>Świąteczne boksy dla współpracowników i kontrahentów</p>
                </li>
                <li className={css['about-presents-list-item']}>
                    <h4 className='card-title mb-16'>Ekskluzywne boksy prezentowe</h4>
                    <p>Zestawy w eleganckich pudełkach z wyjątkową zawartością premium.</p>
                </li>
                <li className={css['about-presents-list-item']}>
                    <h4 className='card-title mb-16'>Prezenty <br/>
dla dzieci</h4>
                    <p>Upominki na akademie, imprezy szkolne i wydarzenia firmowe.</p>
                </li>
                <li className={css['about-presents-list-item']}>
                    <h4 className='card-title mb-16'>Upominki dla zespołu</h4>
                    <p>Prezenty doceniające pracowników i pracownice w każdej branży.</p>
                </li>
                <li className={css['about-presents-list-item']}>
                    <h4 className='card-title mb-16'>Słodkie prezenty na Dzień Firmy</h4>
                    <p>Czekoladki, cukierki i inne przysmaki idealne na firmowe święta.</p>
                </li>
              </ul>
              <p className={css['about-presents-sentence']}>Dostarczamy nasze słodycze w każdy zakątek Polski. Z opcjami dostawy możesz zapoznać się <Link className={css['about-presents-sentence-link']} href='/'>tutaj.</Link></p>
          </div>
          <div className={css['about-zalety']}>
              <div className={css['about-zalety-wrapper']}>
                  <h2 className='section-title'>Nasze zalety</h2>
                  <div className={css['about-zalety-text']}>
                        <h4 className={css['about-zalety-text-title']}>Zapraszamy do współpracy</h4>
                        <p>W Słodkim Prezentcie tworzymy upominki, które wywołują uśmiech. Podaruj swoim pracownikom, partnerom i najmłodszym odrobinę słodkiej radości – z nami to proste!</p>
                        <Link href='/'>Zamów teraz</Link>
                  </div>
              </div>
              <ul>
                  <li>
                    <svg className={css['about-content-list-item-icon']}>
                        <use href="/icons.svg#icon-client"></use>
                    </svg>
                    <h4>Podejście zorientowane na klienta </h4>
                    <p>szybka realizacja zamówień, przejrzystość procesu, możliwość wprowadzania zmian po uzgodnieniu</p>
                  </li>
                  <li>
                    <svg className={css['about-content-list-item-icon']}>
                        <use href="/icons.svg#icon-trust"></use>
                    </svg>
                    <h4>Niezawodność </h4>
                    <p>realizacja w terminie, przestrzeganie jakości, otwarta komunikacja</p>
                  </li>
                  <li>
                    <svg className={css['about-content-list-item-icon']}>
                        <use href="/icons.svg#icon-asortyment"></use>
                    </svg>
                    <h4>Szeroki i różnorodny asortyment </h4>
                    <p>ponad 500 wariantów prezentów świątecznych w opakowaniach z tkaniny, kartonu, drewna, metalu, woreczków i zabawek</p>
                  </li>
                  <li>
                    <svg className={css['about-content-list-item-icon']}>
                        <use href="/icons.svg#icon-elastic"></use>
                    </svg>
                    <h4>Elastyczna waga i zawartość</h4>
                    <p>gotowe zestawy od 300g do 5 kg oraz możliwość personalizacji składu i projektu</p>
                  </li>
              </ul>
          </div>
          <div>
              <h2>Nasze osiągnięcia w liczbach</h2>
              <p>Zaufało nam ponad tysiąc firm w całej Polsce. Sprawdź, dlaczego jesteśmy liderem w branży prezentów korporacyjnych.</p>
              <ul>
                <li>
                    <h3>15+</h3>
                    <p>Lat doświadczenia</p>
                </li>
                <li>
                    <h3>1200+</h3>
                    <p>Zadowolonych klientów</p>
                </li>
                <li>
                    <h3>50K+</h3>
                    <p>Dostarczonych prezentów</p>
                </li>
                <li>
                    <h3>98%</h3>
                    <p>Satysfakcja klientów</p>
                </li>
              </ul>
          </div>
    </div>
  )
}

export default AboutPage
