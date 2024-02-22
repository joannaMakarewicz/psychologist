"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@/components/Form/Form";
import baby from "../assets/baby.jpg";
import offer1 from "../assets/offer1.jpg";
import offer2 from "../assets/offer2.jpg";
import offer5 from "../assets/offer5.jpg";
import offer4 from "../assets/offer4.jpg";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import PolicyRegulationsDraft from "@/components/PolicyRegulationsDraft/PolicyRegulationsDraft";
import "./page.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';

import LoadingButton from "@/components/LoadingButton/LoadingButton";

const data = [
  {
    heading: "Konsultacje psychologiczne",
    image: offer1,
    content:
      "Jednorazowe spotkanie z rodzicami/opiekunami dziecka pozwalające na określenie trudności z jaką się mierzą. Wsparcie oraz wyznaczenie odpowiednich kroków działania. Konsultacje z nastolatkami potrzebującymi wsparcia w codziennym mierzeniu się z trudnościami okresu dojrzewania.",
  },
  {
    heading: "Terapia indywidualna",
    image: offer2,
    content:
      "Terapia indywidualna zgodna z wcześniej opracowanym programem terapeutycznym. Stworzonym zgodnie z potrzebami oraz możliwościami dziecka. Terapia skierowana jest do dzieci i młodzieży potrzebujących wsparcia w sferze poznawczej, emocjonalnej czy społecznej. Zajęcia dedykowane są również dzieciom z autyzmem, zespołem Aspergera czy niepełnosprawnością intelektualną.",
  },
  {
    heading: "Trening umiejętności społecznych",
    image: offer5,
    content:
      "Trening TUS to zajęcia uspołeczniające dla dzieci i młodzieży. Są to spotkania w niewielkich 5-6 osobowych grupach. Podczas zajęć omawiamy i ćwiczymy umiejętności społeczne, które są potrzebne w codziennym funkcjonowaniu.",
  },
  {
    heading: "Diagnoza psychologiczna",
    image: offer4,
    content:
      "Trzyetapowa diagnoza psychologiczna składająca się z wywiadu z rodzicami, badaniem intelektu dziecka oraz obserwacją funkcjonowania dziecka w placówce przeprowadzona przez doświadczony zespół psychologów.",
  },
];

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);

  const [active, setActive] = useState<boolean>(false);

  const [activeLink, setActiveLink] = useState<string>("section1");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          scrollPosition >= sectionTop - 70 &&
          scrollPosition < sectionTop + sectionHeight - 70
        ) {
          setActiveLink(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (link: any) => {
    setActiveLink(link);
    setActive(false);
    router.push(link);
  };

  const showMenu = () => {
    setActive(!active);
  };

  const [policy, setPolicy] = useState<boolean>(false);
  const [regulations, setRegulations] = useState<boolean>(false);

  const showPolicy = () => {
    setPolicy(!policy);
    console.log(`"policy:" ${!policy}`);
  };

  const showRegulations = () => {
    setRegulations(!regulations);
  };

  return (
    <>
      {policy || regulations ? (
        <PolicyRegulationsDraft
          showPolicy={showPolicy}
          policy={policy}
          regulations={regulations}
          showRegulations={showRegulations}
        />
      ) : null}
      <header className="header">
        <div className="header__contact">
          <a href="/" target="_blank" rel="noreferrer" className="header__icon">
            <BsFacebook />
          </a>
          <a href="/" target="_blank" rel="noreferrer" className="header__icon">
            <BsInstagram />
          </a>
        </div>
        <div className="header__nameContainer">
          <Link href="/" className="header__heading">
            Klaudia Jedrzejewska
          </Link>
        </div>

        <nav className="nav">
          <ul className={active ? "nav__list nav__list--open" : "nav__list"}>
            <li className="nav__item">
              <Link
                href="#section1"
                className={activeLink === "section1" ? "active" : ""}
                onClick={() => handleLinkClick("/section1")}
              >
                Strona główna
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#section2"
                className={activeLink === "section2" ? "active" : ""}
                onClick={() => handleLinkClick("/section2")}
              >
                O mnie
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#section3"
                className={activeLink === "section3" ? "active" : ""}
                onClick={() => handleLinkClick("/section3")}
              >
                Oferta
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#section4"
                className={activeLink === "section4" ? "active" : ""}
                onClick={() => handleLinkClick("/section4")}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
        <>
          {active ? (
            <RxCross1 className="nav__hamburger" onClick={showMenu} />
          ) : (
            <AiOutlineMenu className="nav__hamburger" onClick={showMenu} />
          )}
        </>
      </header>
      <main className="mainContainer">
        <section className="main" id="section1">
          <div className="main__image" />

          <div className="main__textContainer">
            <div className="main__textBorder">
              <article className="main__text">
                <h2 className="main__heading">
                  INDYWIDUALNE PODEJŚCIE DO POTRZEB KAŻDEGO DZIECKA
                </h2>

                <p className="main__content">
                  Prowadzę terapię psychologiczną dla dzieci i młodzieży.
                  Terapia poprzedzona jest wnikliwym badaniem potrzeb ale i
                  umiejętności młodego człowieka tak aby w jak najlepszym
                  stopniu opracować dla niego program terapeutyczny, na którym
                  bazujemy podczas zajęć. Podczas zajęć wspomagam rozwój sfery
                  poznawczej emocjonalnej oraz społecznej. Prowadzę terapię
                  dzieci ze spektrum autyzmu, z niepełnosprawnością
                  intelektualną czy zaburzeniami lękowymi. Wiodącą metodą mojej
                  pracy jest terapia behawioralna w oparciu o Stosowaną Analizę
                  Zachowania.
                </p>

                <LoadingButton className="button">
                  <Link href="#section4">Umów się </Link>
                </LoadingButton>
              </article>
            </div>
          </div>
        </section>
        <section className="quot">
          <h3 className="quot__heading">
            &quot;Dziecko chce być dobre. Jeśli nie umie - naucz. Jeśli nie wie
            - wytłumacz. Jeśli nie może - pomóż&quot;.
          </h3>
          <p className="quot__content">Janusz Koraczak</p>
        </section>
        <section className="about" id="section2">
          <div className="about__image" />
          <div className="about__image2" />
          <div></div>
          <article className="about__text">
            <h4 className="about__heading">POZNAJ MNIE I MOJĄ PRACĘ</h4>
            <p className="about__content">
              Nazywam się Klaudia Jędrzejewska i pracuję jako psycholog na
              terenie Trójmiasta i okolic. Swoje doświadczenie zdobyłam podczas
              pracy w placówkach zajmujących się terapią dzieci z całościowymi
              zaburzeniami rozwoju, niepełnosprawnością intelektualną oraz
              zaburzeniami lękowymi. Ukończyłam studia podyplomowe z pedagogiki
              specjalnej o kierunku Edukacja i rehabilitacja osób z
              niepełnosprawnością intelektualną, autyzmem i zespołem Aspergera.
              Jestem na ostatnim roku studiów podyplomowych ze Stosowanej
              Analizy Zachowania na SWPS w Sopocie. Ukończyłam liczne kursy i
              szkolenia z zakresu terapii, pisania programów terapeutycznych czy
              radzenia sobie z zachowaniami trudnymi u dzieci. Jestem
              certyfikowanym terapeutą TUS - Treningu Umiejętności Społecznych.
              W swojej pracy kieruje się dobrem dziecka, w trakcie pracy stale
              podążam za jego potrzebami.
            </p>
            <LoadingButton className="button">
              <Link href="#section4">Umów się </Link>
            </LoadingButton>
          </article>
        </section>
        <section className="offer" id="section3">
          <article className="offer__container">
            <h4 className="offer__heading">OFEROWANE USŁUGI</h4>
            <p className="offer__content">
              Wsparcie na każdym kroku drogi rozwoju.
            </p>
            <ul className="offer__list">
              {data.map((el) => {
                return (
                  <li className="offer__item" key={Math.random()}>
                    <div className="offer__card">
                      <div className="offer__imgBorder">
                        <Image
                          className="offer__img"
                          src={el.image}
                          alt="Card image cap"
                          priority
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="offer__title">{el.heading}</h5>
                        <p className="offer__text">{el.content}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>
        </section>
        <Form />
      </main>

      <Footer
        showPolicy={showPolicy}
        showRegulations={showRegulations}
      />
    </>
  );
}
