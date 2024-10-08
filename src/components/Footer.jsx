import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 font-sans shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-4 md:space-y-0">
          {/* Links Section */}
          <div className="text-center md:text-left lg:text-lg text-md">
            <a
              href="https://www.sebi.gov.in/"
              className="text-gray-600 hover:text-gray-800 mx-2 font-sans underline"
            >
              <b>SEBI</b> 
            </a>
            <span>|</span>
            <a
              href="https://www.amfiindia.com/"
              className="text-gray-600 hover:text-gray-800 mx-2 underline"
            >
              <b>AMFI</b>
            </a>
            <span>|</span>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 mx-2 underline"
            >
              <b>DISCLAIMER</b>
            </a>
            <span>|</span>
            <a
              href="https://drive.google.com/drive/folders/1BqTWOegvfQ-uE8ATFkn8SvQADow3YrGg"
              className="text-gray-600 hover:text-gray-800 mx-2 underline"
            >
              <b>SID AND COMMERCIALS</b>
            </a>
            <span>|</span>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 mx-2 underline"
            >
              <b>USEFUL LINKS</b>
            </a>
          </div>
          <br />
          <br />

          {/* Company Info Section */}
          <div className="text-center text-md lg:text-lg text-gray-500 mx-24lg:mx-36 tracking-widest">
            <p>
            LAABH VENTURES LLP, Limited Liability Partnership identification number (LLPIN) AAN-81875.
            </p>
            <br />
            <p>
              COPYRIGHT © 2024 LAABH VENTURES - ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
