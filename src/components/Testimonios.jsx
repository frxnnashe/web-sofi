import React from "react";
import { motion } from "framer-motion";
import "../assets/css/testimonios.css";
import "../assets/css/styles.css";

export default function Testimonios() {
  return (
    <section className="testimonios-section bg-light-sof" id="testimonios">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="testimonios-header"
        >
          <span className="section-label">Lo que dicen mis pacientes</span>
          <h2 className="section-title">Testimonios</h2>
          <p className="section-subtitle">
            Cada proceso de rehabilitación es único y personal. Aquí comparto algunas experiencias.
          </p>
        </motion.div>

        <div className="testimonios-grid">
          <motion.div
            className="testimonio-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, boxShadow: "0 12px 24px rgba(0,0,0,0.06)", borderColor: "#2691a1" }}
          >
            <div className="testimonio-content">
              <div className="testimonio-icon">"</div>
              <p className="testimonio-text">
                "Este es un testimonio de prueba temporal. Cuando tengas la historia real del paciente, podés reemplazar este texto. De momento sirve para visualizar el diseño y la estructura del cuadro."
              </p>
              <div className="testimonio-author">
                <strong>Paciente de La Cumbre</strong>
                <span>(Rehabilitación en proceso)</span>
              </div>
            </div>
            <div className="testimonio-images">
              <img src="/Testimonioimg1.webp" alt="Evolución testimonio 1" className="testimonio-img" />
              <img src="/Testimonioimg2.webp" alt="Evolución testimonio 2" className="testimonio-img" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
