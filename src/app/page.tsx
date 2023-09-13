import Image from "next/image";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import baby from "../assets/baby.jpg";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.contact}>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className={styles.contact__icon}
          >
            <BsFacebook />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className={styles.contact__icon}
          >
            <BsInstagram />
          </a>
        </div>
        <h1 className={styles.header__heading}>Klaudia Jędrzejewska</h1>
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className={styles.contact__icon}
        >
          508046549
        </a>
      </header>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>Strona główna</li>
          <li className={styles.nav__item}>O mnie</li>
          <li className={styles.nav__item}>Oferta</li>
          <li className={styles.nav__item}>Kontakt</li>
        </ul>
      </nav>
      <section className={styles.main}>
        <div className={styles.main__image} />
        
        <article className={styles.main__text}>
          <h2 className={styles.main__heading}>
            INDYWIDUALNE PODEJŚCIE DO POTRZEB KAŻDEGO DZIECKA
          </h2>
          <p className={styles.main__content}>
            Prowadzę terapię psychologiczną dla dzieci i młodzieży. Terapia
            poprzedzona jest wnikliwym badaniem potrzeb ale i umiejętności
            młodego człowieka tak aby w jak najlepszym stopniu opracować dla
            niego program terapeutyczny, na którym bazujemy podczas zajęć.
            Podczas zajęć wspomagam rozwój sfery poznawczej emocjonalnej oraz
            społecznej. Prowadzę terapię dzieci ze spektrum autyzmu, z
            niepełnosprawnością intelektualną czy zaburzeniami lękowymi. Wiodącą
            metodą mojej pracy jest terapia behawioralna w oparciu o Stosowaną
            Analizę Zachowania.
          </p>
        </article>
      </section>
      <section className={styles.quot}>
        <h3>
          &quot;Dziecko chce być dobre. Jeśli nie umie - naucz. Jeśli nie wie -
          wytłumacz. Jeśli nie może - pomóż&quot;.
        </h3>
        <p>Janusz Koraczak</p>
      </section>
      <section className={styles.about}>
        <div className={styles.about__image} />
        <div className={styles.about__image2} />
        <div></div>
        <article className={styles.about__text}>
          <h4 className={styles.about__heading}>POZNAJ MNIE I MOJĄ PRACĘ</h4>
          <p className={styles.about__content}>
            Nazywam się Klaudia Jędrzejewska i pracuję jako psycholog na terenie
            Trójmiasta i okolic. Swoje doświadczenie zdobyłam podczas pracy w
            placówkach zajmujących się terapią dzieci z całościowymi
            zaburzeniami rozwoju, niepełnosprawnością intelektualną oraz
            zaburzeniami lękowymi. Ukończyłam studia podyplomowe z pedagogiki
            specjalnej o kierunku Edukacja i rehabilitacja osób z
            niepełnosprawnością intelektualną, autyzmem i zespołem Aspergera.
            Jestem na ostatnim roku studiów podyplomowych ze Stosowanej Analizy
            Zachowania na SWPS w Sopocie. Ukończyłam liczne kursy i szkolenia z
            zakresu terapii, pisania programów terapeutycznych czy radzenia
            sobie z zachowaniami trudnymi u dzieci. Jestem certyfikowanym
            terapeutą TUS - Treningu Umiejętności Społecznych. W swojej pracy
            kieruje się dobrem dziecka, w trakcie pracy stale podążam za jego
            potrzebami.
          </p>
          <button>Umów się</button>
        </article>
      </section>
      <section className={styles.contactForm}>
        <div className={styles.formArea}>

          <form className={styles.form}>
            <h5 className={styles.contactForm__heading}>Napisz do mnie</h5>
            <p className={styles.contactForm__content}>Zapraszam do kontaktu</p>

            {/* {status ? (
          <p className="alert">Twoja wiadomość została wysłana</p>
        ) : null} */}

            <label htmlFor="name"></label>
            <input
              type="text"
              className={styles.form__control}
              id="name"
              name="name"
              aria-describedby="emailHelp"
              placeholder="Imię i nazwisko *"
              required
            />

            <label htmlFor="email"></label>
            <input
              type="email"
              className={styles.form__control}
              id="email"
              name="email"
              placeholder="Email *"
              required
            />

            <label htmlFor="phone"></label>
            <input
              type="tel"
              className={styles.form__control}
              id="phone"
              name="phone"
              placeholder="Telefon *"
              required
            />

            <textarea
              className={styles.form__control}
              id="message"
              name="message"
              placeholder="Twoja wiadomość *"
              maxLength={200}
              required
            />
            <p className={styles.form__info}>* pole wymagane</p>
            <button>Wyślij</button>
          </form>
          {/* <div className={styles.formArea__frame}> */}
            <Image
              className={styles.formArea__img}
              src={baby}
              alt="przykład ciast"
            />
          </div>
        {/* </div> */}
      </section>
      <section>
        <article>
          <h4>OFEROWANE USŁUGI</h4>
          <p>Wsparcie na każdym kroku drogi rozwoju</p>
          <ul>
            <li>Konsultacje psychologiczne</li>
            <li>TERAPIA INDYWIDUALNA</li>
            <li>TRENING UMIEJĘTNOŚCI SPOŁECZNYCH</li>
            <li>DIAGNOZA PSYCHOLOGICZNA</li>
          </ul>
        </article>
      </section>
      <footer className="footer">
        <section className="footer__article">
          <div className="footer__container col-md-3 col-sm-6 w-100">
            <img className="footer__logo" src="/" alt="chodź na ciacho" />
          </div>
          <div className="col-md-3 col-sm-6 w-100">
            <h5 className=" footer__heading">Klaudia Jakaś</h5>
            <p className="footer__owner">Klaudia</p>
            <ul className="footer__list">
              <li>
                <a href="/" target="_blank" rel="noreferrer">
                  <FaLocationDot className="me-1" />
                </a>
                ul. Olecko
                <span className="footer__list--special">Gdańsk</span>
              </li>
              <li className="text-nowrap">
                <a href="/" target="_blank" rel="noreferrer">
                  <MdAlternateEmail className="me-1" />
                  joanna.milun@gmail.com
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noreferrer">
                  <BsFillTelephoneFill className="me-1" />
                  508046549
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__contact col-md-3 col-sm-6 w-100">
            <h5>Nawigacja</h5>
            <p className="footer__special footer__special--margin">
              Polityka prywatności
            </p>
            <p className="footer__special">Regulamin</p>
          </div>
          <div className="col-md-3 col-sm-6 w-100 ">
            <h5>Obserwuj</h5>
            <div className="fs-2 mt-4">
              <a href="/" target="_blank" rel="noreferrer">
                <BsFacebook className="me-3" />
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <BsInstagram className="me-3" />
              </a>
            </div>
          </div>
        </section>
        <div className="footer__author">makaDev</div>
      </footer>
    </>
  );
}
