import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Lottie from "lottie-react";
import animationData from "../../assets/Animation - 1717616963855.json";
import { useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const phoneAnimation = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Web Wizard",
        message: message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-black h-full flex justify-center items-center">
      <div className="w-full px-6 md:px-[50px] py-10 text-white">
        <h1 className="text-gray-200 font-bold text-xl md:text-2xl text-start mb-5">
          Contact Me
        </h1>
        <hr className="mb-10 border-b border-gray-600" />
        <div className="flex flex-col justify-between md:flex-row">
          <div className="w-full md:w-1/3 mb-5 md:mb-0">
            <Lottie lottieRef={phoneAnimation} animationData={animationData} />
          </div>
          <div className="w-full md:w-1/2 md:mt-10 flex flex-col justify-center  md:justify-start">
            <div className="grid grid-cols-2 gap-4 text-gray-300 mb-8">
              <div className="flex items-center">
                <FaPhoneAlt className="mr-2 text-blue-500 text-2xl text-buttons" />
                <p className="font-bold text-sm md:text-xl">+48 797 390 029</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-xl text-blue-500  text-buttons" />
                <p className="font-bold text-sm md:text-xl">
                  <a
                    href="mailto:bersitedi421@gmail.com"
                    className="text-buttons hover:underline"
                  >
                    bersitedi421@gmail.com
                  </a>
                </p>
              </div>
              <div className="flex items-center">
                <FaLinkedin className="mr-2 text-2xl text-blue-500 text-buttons" />
                <p className="font-bold text-sm md:text-xl">
                  <a
                    href="https://www.linkedin.com/in/bersabeh-tsegaye-aa3b28236/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-buttons hover:underline"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
              <div className="flex items-center">
                <FaGithub className="mr-2 text-blue-500 text-2xl text-buttons" />
                <p className="font-bold  text-sm md:text-xl">
                  <a
                    href="https://github.com/bersitedi?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-buttons hover:underline"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col w-full ">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-4 p-2 border-1 border-gray-200 shadow-sm shadow-gray-300 bg-gray-200 placeholder:text-gray-700 rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 p-2 border-1 border-gray-200 shadow-sm shadow-gray-300 bg-gray-200 placeholder:text-gray-700 rounded-lg"
              />
              <textarea
                cols="30"
                rows="10"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mb-4 p-2 h-[100px] border-1 border-gray-200 shadow-sm shadow-gray-300 bg-gray-200 placeholder:text-gray-700 rounded-lg"
              ></textarea>
              <button
                type="submit"
                className=" w-full text-orange-600 border-b-2 border-b-orange-400 py-2 px-4 hover:bg-gray-950 self-center md:self-start bg-gray-900 bg-opacity-50 border border-gray-800 shadow-lg shadow-gray-800 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
