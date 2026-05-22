import React from "react";
import { motion } from "framer-motion";
import "../assets/css/about.css";
import "../assets/css/styles.css";

const WA_LINK = "https://wa.me/3516612084?text=Hola%20Sof!";

const fadeIn = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function AboutMe() {
  return (
    <section className="about-section" id="sobre-mi">
      <div className="container">
        <div className="about-grid">
          {/* Imagen */}
          <motion.div
            className="about-image-wrap"
            initial={fadeIn.hidden}
            whileInView={fadeIn.show}
            viewport={{ once: true }}
          >
            <img
              src="/sofgpt2.webp"
              alt="Lic. Sofía Burgos — Kinesióloga y Osteópata"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Sobre mí</span>
            <h2 className="section-title">Lic. Sofía Burgos</h2>
            <div className="sof-divider" />

            <p>
              Nací en <strong>Cachi, Salta</strong> — a 3.457 metros sobre el
              nivel del mar — y eso define mi forma de ver el mundo: desde la
              altura, con perspectiva. Estudié en{" "}
              <strong>Córdoba</strong>, donde me recibí de Kinesióloga a los{" "}
              <strong>23 años</strong> con un promedio de egreso de{" "}
              <strong>7.11</strong>.
            </p>

            <p>
              La kinesiología me enseñó a escuchar el cuerpo. Pero con el
              tiempo entendí que el movimiento por sí solo no siempre es
              suficiente. Fue así que busqué especializarme como{" "}
              <strong>Osteópata</strong>, para sumar una mirada más profunda y
              holística: una que integra las estructuras, los tejidos, el
              sistema nervioso y la historia de cada persona.
            </p>

            <p>
              Hoy trabajo desde la <strong>fusión de ambas disciplinas</strong>.
              No es kinesiología más osteopatía sumadas; es un nuevo abordaje
              donde una potencia a la otra, orientando cada sesión hacia la
              rehabilitación genuina a través del movimiento y la integración
              mente-cuerpo-alma. Por esta misma inquietud de comprender
              al ser humano en su totalidad, actualmente soy <strong>Estudiante de Psicología</strong> en la Universidad Nacional de Córdoba (UNC).
            </p>

            <p>
              Fuera del consultorio, mi lado humano se nutre del arte y la vocación de servicio: soy <strong>apasionada por cantar</strong>, transmitiendo emociones a través de la música, y avanzando firme con el sueño en curso de recibirme de psicóloga.
            </p>

            <div className="about-highlights">
              {[
                "🎓 Kinesióloga UNC",
                "🧠 Especialización en Osteopatía",
                "📚 Estudiante de Psicología UNC",
                "🎵 Apasionada por cantar",
                "📍 Cachi, Salta → Córdoba",
              ].map((tag) => (
                <span className="about-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sof btn-sof-primary"
            >
              💬 Reservar mi turno
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
