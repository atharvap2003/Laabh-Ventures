import React from "react";
import Image1 from "../assets/WhatsApp_icon.png";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <section className="lg:mx-20 mx-5 mt-5 lg:mt-12 min-h-screen">
      <p className="lg:text-lg text-base lg:ml-12 mx-5 font-normal text-gray-500 uppercase tracking-widest">Contact Us</p>
      <div className="mx-5 py-12">
        <div className="max-w-6xl mx-auto text-center min-h-80">
          <h2 className="lg:text-2xl text-lg font-normal text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8 lg:text-xl text-lg my-5">
            Call us on +91 9881255331 or Message us on Whats App using below
            link
          </p>
          <div className="flex justify-center items-center mt-5">
            <Link to="https://api.whatsapp.com/send/?phone=919975521332&text&type=phone_number&app_absent=0">
              <button className="sm:p-5 p-4 flex flex-row items-center bg-gray-500">
                <img src={Image1} alt="image" className="w-6 mr-1" />
                <p className="text-white font-bold text-md">
                  Message us on WhatsApp
                </p>
              </button>
            </Link>
          </div>
          <h2 className="mt-12 lg:text-xl text-lg">Contact Us on +91 9881255331</h2>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
