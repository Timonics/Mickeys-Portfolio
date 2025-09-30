import React from "react";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import Hero from "./components/Hero";

const ContactPage: React.FC = () => {
  return (
    <main className="pb-10">
      <Hero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactForm />
        <ContactInfo />
      </div>
    </main>
  );
};

export default ContactPage;
