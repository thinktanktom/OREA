import React, { useEffect, useState } from 'react';
import ContactHero from './ContactHero';
import ContactCards from './ContactCards';
import ContactForm from './ContactForm';

const SignatureMotif = () => (
  <div className="flex items-center justify-center py-20">
    <div className="text-[11px] tracking-[0.6em] uppercase text-orea-taupe font-bold opacity-40">ORÉA</div>
  </div>
);

const ContactPage: React.FC = () => {
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const messages = [
      "Complimentary NZ delivery",
      "30-day returns, always",
      "Book a private viewing"
    ];
    const interval = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactCards />
      <SignatureMotif />
      <ContactForm />
    </main>
  );
};

export default ContactPage;
