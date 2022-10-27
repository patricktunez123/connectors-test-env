import React from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Common/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />
      <PageBanner pageTitle="Contact Us" />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
