import React, { useState } from "react";
import Image from "next/image";
import LoadingButton from "@/components/LoadingButton/LoadingButton";
import baby from "../../../src/assets/baby.jpg";
import emailjs from "@emailjs/browser";
import "./Form.scss";



const Form = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<boolean>(false);

  console.log(status);

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    // emailjs
    //   .sendForm(
    //     "service_cegqeco",
    //     "template_c9qk8w7",
    //     e.target,
    //     "2GSQoPpt-ZCUvyQgM"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    console.log("wysłano")

    setTimeout(() => {
      setLoading(false);
      e.target.reset();
      setStatus(true);
    }, 200);
  };
  return (
    <section className="contactForm" id="section4">
      <div className="formArea">
        <form className="form" onSubmit={sendEmail}>
          <h5 className="contactForm__heading">Napisz do mnie</h5>
          <p className="contactForm__content">Zapraszam do kontaktu</p>

          {status ? (
            <p className="alert">Twoja wiadomość została wysłana</p>
          ) : null}


          <label htmlFor="name"></label>
          <input
            type="text"
            className="form__control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            placeholder="Imię i nazwisko *"
            required
          />

          <label htmlFor="email"></label>
          <input
            type="email"
            className="form__control"
            id="email"
            name="email"
            placeholder="Email *"
            required
          />

          <label htmlFor="phone"></label>
          <input
            type="tel"
            className="form__control"
            id="phone"
            name="phone"
            placeholder="Telefon *"
            required
          />

          <textarea
            className="form__control"
            id="message"
            name="message"
            placeholder="Twoja wiadomość *"
            maxLength={200}
            required
          />
          <p className="form__info">* pole wymagane</p>
          <LoadingButton className="button" loading={loading}>
            Wyślij
          </LoadingButton>
        </form>

        <Image className="formArea__img" src={baby} alt="przykład ciast" />
      </div>
    </section>
  );
};

export default Form;
