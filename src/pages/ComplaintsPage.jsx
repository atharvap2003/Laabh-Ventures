import React from "react";

const ComplaintsPage = () => {
  return (
    <div>
      <article className="md:mx-20 mx-5 mt-5 lg:mt-12 min-h-screen">
        <p className="text-base lg:text-lg lg:ml-12 mx-5 font-normal text-gray-500 uppercase tracking-widest">
          Complaints Record
        </p>
        <section className="lg:ml-52 mx-5 mt-12 text-gray-600 text-base lg:text-xl">
          <div className="mt-5">
            <span className="font-bold">Total Complaints Received​ </span>{" "}
            <span>- 0</span>
          </div>
          <div className="mt-5">
            <span className=" font-bold">Total Complaints Received​ </span>{" "}
            <span>- 0</span>
          </div>
          <div className="mt-5">
            <span className="mt-5 font-bold">Total Pending Complaints</span>{" "}
            <span>- 0</span>
          </div>
          <div className="mt-5">
            <span className="mt-5 font-bold">
              ATR/REPLY Sent and Pending With SEBI​{" "}
            </span>{" "}
            <span>- 0</span>
          </div>
          <div className="mt-5">
            <span className="mt-5 font-bold">Review(s) Received​ </span>{" "}
            <span>- 0</span>
          </div>
        </section>

        <section className="mt-16 lg:ml-52 mx-5 ">
          <h1 className="lg:text-2xl text-lg">Grievance Redressal & Escalation Matrix</h1>

          <div className="my-5 lg:text-lg text-base">
            <p className="font-bold lg:text-xl text-lg">First Level of Escalation</p>
            To raise a complaint, kindly mail us at{" "}
            <span className="underline"><a href="mailto:gsawealthbo@gmail.com" target="_blank">gsawealthbo@gmail.com</a></span>
          </div>

          <div className="lg:text-lg text-base">
            <p className="font-bold text-xl">Second Level of Escalation</p>
            If the issue is not resolved at the first level, kindly mail us at<span className="underline"><a href="mailto:gopal.agrawal@gmail.com" target="_blank">gopal.agrawal@gmail.com</a></span>
            
          </div>
        </section>
      </article>
    </div>
  );
};

export default ComplaintsPage;
