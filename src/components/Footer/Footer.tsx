import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { LiaCopyrightSolid } from "react-icons/lia";
import logo from "../../assets/logoDuze.png";
import Image from "next/image";
import Link from "next/link";
import "../Footer/Footer.scss";

type FooterProps = {
  showRegulations: () => void;
  showPolicy: () => void;
};

const Footer = ({ showRegulations, showPolicy }: FooterProps) => {
  return (
    <footer className="footer">
      <section className="footer__article">
        <Link className="footer__container" href="/">
          <Image
            className="footer__logo"
            src={logo}
            alt="Klaudia Jedrzejewska"
          />
        </Link>
        <div>
          <h5 className="footer__heading">Klaudia Jędrzejewska</h5>
          <p className="footer__owner">Psycholog</p>
          <ul className="footer__list">
            <li>
              <a
                href="https://maps.app.goo.gl/3GaRwbV6p7maYWBL8"
                target="_blank"
                rel="noreferrer"
              >
                <FaLocationDot className="footer__endMargin" />
              </a>
              <span>Kielno, </span>
              <span>ul. Oliwska 44a</span>
            </li>
            <li className="text-nowrap">
              <a
                href={`mailto: klaudiajedrzejewska.psycholog@gmail.com?subject=Wiadomość ze strony internetowej`}
                target="_blank"
                rel="noreferrer"
              >
                <MdAlternateEmail className="footer__endMargin" />
                klaudiajedrzejewska.psycholog@gmail.com
              </a>
            </li>
            <li>
              <a href={`tel: 792819494`} target="_blank" rel="noreferrer">
                <BsFillTelephoneFill className="footer__endMargin" />
                792 819 494
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__contact">
          <h5>Nawigacja</h5>
          <p className="footer__special footer__specialMargin">
            <button className="footer__button" onClick={showPolicy}>
              Polityka prywatności
            </button>
          </p>
          <p className="footer__special">
            <button className="footer__button" onClick={showRegulations}>
              Regulamin
            </button>
          </p>
        </div>
        <div>
          <h5>Obserwuj</h5>

          <a
            href="https://www.facebook.com/profile.php?id=100093528214815"
            target="_blank"
            rel="noreferrer"
            className="footer__icon"
          >
            <BsFacebook className="styles.footer__endMargin footer__specialMargin" />
          </a>
          <a href="/" target="_blank" rel="noreferrer" className="footer__icon">
            <BsInstagram />
          </a>
        </div>
      </section>
      <a
        className="footer__author"
        href="http://www.joannamakarewicz.pl/"
        target="_blank"
        rel="noreferrer"
      >
        <LiaCopyrightSolid /> 2023 Joanna Makarewicz
      </a>
    </footer>
  );
};

export default Footer;
