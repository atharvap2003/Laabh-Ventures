import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ComplaintsPage from "./pages/ComplaintsPage";
import ContactPage from "./pages/ContactPage";
import PolicyPage from "./pages/PolicyPage";
import TermsPage from "./pages/TermsPage";
import ChatButton from "./components/ChatButton";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* All routing-related components must be inside <Router> */}
        <div>
          <Navbar/>
          <ChatButton />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/complaints-record" element={<ComplaintsPage/>} />
            <Route path="/contact-us" element={<ContactPage/>} />
            <Route path="/privacy-policy" element={<PolicyPage/>} />
            <Route path="/terms-and-conditions" element={<TermsPage/>} />
          </Routes>

          {/* Footer stays visible regardless of the route */}
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
