import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <container className="contact__container">
        <div className="contact__options"></div>
        <form action="">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>email@email.com</h5>
            <a href="mailto:email@email.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>username-messenger</h5>
            <a
              href="https://m.me/username-messenger"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+56123-456-789</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+56123456789"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </form>
      </container>
    </section>
  );
};

export default Contact;
