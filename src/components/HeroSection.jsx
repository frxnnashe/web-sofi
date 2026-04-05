import React from "react";
import { motion } from "framer-motion";
import "../assets/css/hero.css";
import "../assets/css/styles.css";

const WA_LINK = "https://wa.me/3516612084?text=Hola%20Sof%C3%ADa%2C%20quisiera%20consultar%20valores%20y%20turnos";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

export default function HeroSection() {
  return (
    <section className="hero-section" id="inicio">
      <div className="container">
        <div className="hero-grid">
          {/* Columna de texto */}
          <div>
            <motion.span
              className="hero-supra"
              initial="hidden"
              animate="show"
              custom={0.1}
              variants={fadeUp}
            >
              <span className="hero-supra-dot" />
              Lic. Sofía Burgos · Kinesióloga &amp; Osteópata
            </motion.span>

            <motion.h1
              className="hero-h1"
              initial="hidden"
              animate="show"
              custom={0.25}
              variants={fadeUp}
            >
              Abordaje integral de la persona en su{" "}
              <em>totalidad: mente, cuerpo y alma.</em>
            </motion.h1>

            <motion.p
              className="hero-desc"
              initial="hidden"
              animate="show"
              custom={0.4}
              variants={fadeUp}
            >
              Unificando la Kinesiología y la Osteopatía para ofrecerte un
              tratamiento que va más allá del síntoma. Tu proceso de
              rehabilitación, pensado desde lo integral.
            </motion.p>

            <motion.div
              className="hero-ctas"
              initial="hidden"
              animate="show"
              custom={0.55}
              variants={fadeUp}
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sof btn-sof-primary"
              >
                💬 Consultar Valores y Turnos
              </a>
              <a href="#servicios" className="btn-sof btn-sof-outline">
                Ver Servicios →
              </a>
            </motion.div>
          </div>

          {/* Columna de imagen */}
          <motion.div
            className="hero-image-wrap"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="hero-image-bg" />
            <img
              src="/sofia-placeholder.png"
              alt="Lic. Sofía Burgos — Kinesióloga y Osteópata"
            />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          {[
            { value: "2", label: "Disciplinas integradas" },
            { value: "40'", label: "Duración de sesión" },
            { value: "VCP", label: "Villa Carlos Paz · Córdoba" },
            { value: "100%", label: "Enfoque holístico" },
          ].map((s, i) => (
            <div className="hero-stat" key={i}>
              <div className="hero-stat-value">{s.value}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
