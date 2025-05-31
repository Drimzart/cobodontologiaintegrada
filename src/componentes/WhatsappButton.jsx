// src/componentes/WhatsappButton.jsx
"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsappButton() {
  const [visible, setVisible] = useState(true);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.5 }
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0 }
    );

    const hero = document.getElementById("hero");
    const footer = document.querySelector("footer");

    if (hero) heroObserver.observe(hero);
    if (footer) footerObserver.observe(footer);

    return () => {
      heroObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://wa.me/5575999999989"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            bottom: footerVisible ? 110 : 24,
            right: 24,
          }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed z-50"
          style={{ position: "fixed" }}
        >
          <img
            src="/icons/whatsapp.svg"
            alt="Fale conosco no WhatsApp"
            className="w-14 h-14 drop-shadow-lg hover:scale-105 transition-transform"
          />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
