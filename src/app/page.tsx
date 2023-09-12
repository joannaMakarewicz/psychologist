import Image from "next/image";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import klaudia from "../assets/klaudia1.jpg";
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
        <Image src={klaudia} alt="Klaudia Jędrzejewska" className={styles.main__image} priority/>
        <article className={styles.main__text}>
          <h2 className={styles.main__heading}>INDYWIDUALNE PODEJŚCIE DO POTRZEB KAŻDEGO DZIECKA</h2>
          <p className={styles.main__content}>Prowadzę terapię psychologiczną dla dzieci i młodzieży. Terapia poprzedzona jest
wnikliwym badaniem potrzeb ale i umiejętności młodego człowieka tak aby w jak najlepszym
stopniu opracować dla niego program terapeutyczny, na którym bazujemy podczas zajęć.
Podczas zajęć wspomagam rozwój sfery poznawczej emocjonalnej oraz społecznej.
Prowadzę terapię dzieci ze spektrum autyzmu, z niepełnosprawnością intelektualną czy

zaburzeniami lękowymi.

Wiodącą metodą mojej pracy jest terapia behawioralna w oparciu o Stosowaną Analizę

Zachowania.</p>
        </article>
      </section>
      <section>
        <article>
          <h3>OFEROWANE USŁUGI</h3>
          <p>Wsparcie na każdym kroku drogi rozwoju</p>
          <ul>
            <li>Konsultacje psychologiczne</li>
            <li>TERAPIA INDYWIDUALNA</li>
            <li>TRENING UMIEJĘTNOŚCI SPOŁECZNYCH</li>
            <li>DIAGNOZA PSYCHOLOGICZNA</li>
          </ul>
        </article>
      </section>
    </>
  );
}
