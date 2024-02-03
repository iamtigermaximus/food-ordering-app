import React from 'react';
import SectionHeaders from './SectionHeaders';

const ContactSection = () => {
  return (
    <section className="text-center my-16">
      <SectionHeaders subHeader="" mainHeader="Contact Us" />
      <div className="mt-8">
        <a
          className="text-4xl underline text-gray-500"
          href="tel:+3581234567891"
        >
          +3581234567891
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
