import React from "react";
import { BiLogoWhatsappSquare } from "react-icons/bi";
import { Link } from "react-router-dom";
import Image1 from "../assets/WhatsApp_icon.png";

const HomePage = () => {
  return (
    <>
      <section className=" min-h-[70vh] lg:min-h-screen mt-16">
        <div className="bg-custom-rgba py-8 lg:py-10 mx-8 md:mx-36 ">
          <div className="container p-3 text-center">
            <p className="uppercase lg:text-xl text-md mb-6 font-sans">
              Welcome to Laabh Finance Family
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-5xl mb-6 text-gray-800 font-play tracking-wide font-normal">
              Money Matter Matters!
            </h1>
            <p className="lg:text-lg text-base text-gray-600">
              Secure Your Future with Mutual Funds!
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-72">
          <Link to="https://api.whatsapp.com/send/?phone=919975521332&text&type=phone_number&app_absent=0">
            <button className=" p-5 flex flex-row items-center bg-gray-500">
              <img src={Image1} alt="image" className="w-6 mr-1" />
              <p className="text-white lg:font-bold lg:text-md font-bold text-sm">
                Message us on WhatsApp
              </p>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
