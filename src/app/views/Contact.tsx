import React from 'react';
import FormContact from "../components/FormContact";
import SocialNetworks from "../components/SocialNetworks";

export default function Contact() {
  return (
    <section className="mb-32 bg-cover bg-center py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
          Contáctanos
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/2">
            <SocialNetworks />
          </div>
          <div className="lg:w-1/2">
            <FormContact />
          </div>
        </div>
      </div>
    </section>
  );
}

