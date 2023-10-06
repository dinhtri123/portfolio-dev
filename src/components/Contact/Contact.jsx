import React, { useEffect, useRef, useState } from "react";
import styles from "./ContactStyle.module.css";
import Title from "../Title/Title";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [successEmail, setSuccessEmail] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hwdimbz",
        "template_3abk7qn",
        form.current,
        "ZvCEaSqea78BrWheJ"
      )
      .then(
        (result) => {
          setSuccessEmail(!successEmail);
          form.current.reset();
        },
        (error) => {
          console.log("Not OK");
        }
      );
  };
  return (
    <div className={`${styles.contact} main-content`} id="contact">
      <Title>
        Contact <span>Me</span>
      </Title>
      <form
        ref={form}
        autoCapitalize="off"
        className={`${styles.contactForm} mt-cs`}
        onSubmit={sendEmail}
      >
        <input type="text" name="fullname" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <input
          type="number"
          name="tel"
          placeholder="Mobile Number"
          maxLength={10}
          required
        />
        <input
          type="text"
          name="email_subject"
          placeholder="Email Subject"
          required
        />

        <textarea
          className={styles.contactFormMessage}
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <div className={styles.btnSubmit}>
          <button type="submit">Send Message</button>
        </div>
      </form>
      {successEmail ? (
        <div className={styles.popupSuccess}>
          <div className={styles.popupSuccessContent}>
            <h3>Send Email Success</h3>
            <p>
              Thank you for you sending me your email, I will contact you as
              soon as possible
            </p>
            <button onClick={() => setSuccessEmail(!successEmail)}>OK</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Contact;
