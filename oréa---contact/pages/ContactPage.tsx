import React, { useEffect, useState } from 'react';
import ContactHero from '../components/ContactHero';
import ContactCards from '../components/ContactCards';
import ContactForm from '../components/ContactForm';

const SignatureMotif = () => (
  <div className="flex items-center justify-center py-20">
    <div className="text-[11px] tracking-[0.6em] uppercase text-orea-taupe font-bold opacity-40">ORÉA</div>
  </div>
);

const ContactPage: React.FC = () => {
  const [formType, setFormType] = useState('consultation');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fade-in bg-orea-cream min-h-screen relative">
      <ContactHero />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-4">
        <ContactCards onSelectType={(type) => setFormType(type)} />
        
        <SignatureMotif />

        <section className="py-24 luxury-transition" id="enquiry-form">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 font-light text-orea-espresso uppercase tracking-[0.2em]">Direct Enquiry</h2>
            <p className="text-orea-taupe text-[13px] tracking-[0.05em] font-normal uppercase">
              Please share your details below to begin the conversation.
            </p>
          </div>
          
          <ContactForm selectedType={formType} />
        </section>
      </div>
    </div>
  );
};

export default ContactPage;