import React, { useState } from "react";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { FaLocationPin } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebaseDb from "./Firebase";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  //destructure
  const { name, email, subject, message } = state;
  const handleSubmit = (e) => {
    //prevent default behaviour of browser
    e.preventDefault();
    //if any field is empty, don't submit
    if (!name || !email || !subject || !message) {
      toast.error("Please provide input in each field");
    } else {
      //if collection is not initialised, it will initialise a collection in firebase
      //push used to store the value present in state into the firebase
      firebaseDb.set({
        Name: { name },
        Email: { email },
        Subject: { subject },
        Message: { message }
      });
      //make fields empty
      setState({ name: "", email: "", subject: "", message: "" });
      toast.success("Form Submitted Successfully");
    }
  };

  const handleInputChange = (e) => {
    //destructure
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
    //above stores internal state of input field
  };

  return (
    <div className="full-screen">
      <ToastContainer position="top-center" />
      <div className="container">
        <div className="main_msg">
          <form action="" id="Contact_Form">
            <h2>Send us a message !</h2>
            <div className="inputs">
              <input
                type="text"
                name="name"
                className="form_control"
                placeholder="Name"
                onChange={handleInputChange}
                value={name}
              />
              <input
                type="email"
                name="email"
                className="form_control"
                placeholder="E-mail"
                onChange={handleInputChange}
                value={email}
              />
              <input
                type="text"
                name="subject"
                className="form_control"
                placeholder="Subject"
                onChange={handleInputChange}
                value={subject}
              />
              <textarea
                type="text"
                className="form_control"
                name="message"
                placeholder="Message"
                onChange={handleInputChange}
                value={message}
              ></textarea>
            </div>
            <button className="btn" value="Send Message" onClick={handleSubmit}>
              Send Message
            </button>
          </form>
        </div>

        <div className="our_info">
          <div className="text">
            <h2>Contact Us</h2>
          </div>
          <div className="text-2">
            <p>We are open for any suggestion or just have a chat !</p>
          </div>
          <div className="address_info">
            <div className="icon">
              <FaLocationPin />{" "}
              <span>
                {" "}
                <b>Address</b>: 256, New Delhi, India
              </span>
            </div>
            <div className="icon">
              <AiFillPhone />{" "}
              <span>
                <b>Phone</b>: +91 12345 67890
              </span>
            </div>
            <div className="icon">
              <AiTwotoneMail />{" "}
              <span>
                <b>Email</b>: Tirtha@gmail.com
              </span>
            </div>
            <div className="icon">
              <GiWorld />{" "}
              <span>
                <b>Website</b>: Tirtha.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
