import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactBg from "../assets/illustrations/contact.png";

export const Contect = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Portfolio",       // Your Service ID
        "template_taw0uwi", // Your Template ID
        formRef.current,
        "tVdEnShsy7vp7wa0N" // Your Public Key
      )
      .then(
        (response) => {
          alert("✅ Message sent successfully! We will get back to you soon. 😊");
          e.target.reset(); // Clear the form
        },
        (error) => {
          alert(
            "❌ Failed to send the message. Please contact directly at 📧 shrikantkus26@gmail.com\n\nError: " +
              error.text
          );
        }
      );
  };

  return (
    <div
      id="contact"
      className="contact w-full flex items-center justify-center px-4 py-10 relative mt-16"
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "80vh",
        clipPath: "polygon(0 10%, 100% 0, 100% 80%, 0 100%)",
      }}
    >
      <div className="w-full max-w-md">
        <form
          ref={formRef}
          id="contact-form"
          onSubmit={sendEmail}
          className="p-8 rounded-lg space-y-4"
        >
          <h2 className="text-2xl font-bold mb-4 text-white">We need to talk!</h2>

          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
            className="w-full p-4 mb-4 rounded bg-white text-black focus:outline-none transition duration-300"
          />

          <input
            type="email"
            name="email"
            placeholder="example@xyz.com"
            required
            className="w-full p-4 mb-4 rounded bg-white text-black focus:outline-none transition duration-300"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Type your thought.."
            required
            className="w-full p-4 mb-4 rounded bg-white text-black focus:outline-none transition duration-300"
          ></textarea>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-half whitespace-nowrap bg-green-500 text-white p-4 rounded hover:bg-[rgb(10,153,0)] dark:hover:bg-green-400 transition duration-300"
            >
              Submit your response
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
