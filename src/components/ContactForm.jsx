import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles, { layout } from "../style";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tq0tfyb",
        "template_iwejtd5",
        form.current,
        "VAflbVRwJeYXp6dJC"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
          alert("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="mb-4">
      <form
        ref={form}
        onSubmit={sendEmail}
        className=" flex flex-col gap-2 text-white"
      >
        <div className={`${styles.inputFlex}`}>
          <label className={`${styles.heading4}`}>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className={`${layout.input}`}
          />
        </div>
        <div className={`${styles.inputFlex}`}>
          <label className={`${styles.heading4}`}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className={`${layout.input}`}
          />
        </div>
        <div className={`${styles.inputFlex} `}>
          <label className={`${styles.heading4}`}>Message</label>
          <textarea
            name="message"
            rows="5"
            cols="20"
            placeholder="Enter Your Message"
            className="p-[10px] rounded-[10px] bg-transparent border-2 border-white "
          />
        </div>

        <input
          type="submit"
          value="Send"
          className="w-[20%] p-[10px] rounded-[10px] bg-transparent border-2 border-white"
        />
      </form>
    </div>
  );
}

export default ContactForm;
