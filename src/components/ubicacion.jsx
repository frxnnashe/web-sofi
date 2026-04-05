import React from "react";
import { motion } from "framer-motion";
import "../assets/css/ubicacion.css";
import "../assets/css/styles.css";

const WA_LINK = "https://wa.me/3516612084?text=Hola%20Sof%C3%ADa%2C%20quisiera%20consultar%20valores%20y%20turnos";
const IG_LINK = "https://instagram.com/lic.sof";

const ubicaciones = [
  {
    icon: "🏥",
    name: "Consultorio Privado",
    address: "Villa Carlos Paz, Córdoba",
    tag: "Consultorio propio",
    proxima: false,
  },
  {
    icon: "📍",
    name: "LATAY",
    address: "Int. García 123, Villa Carlos Paz, Córdoba",
    tag: "Centro interdisciplinario",
    proxima: false,
  },
  {
    icon: "📍",
    name: "CERAFA",
    address: "Echavarría 69, Córdoba",
    tag: "Centro de rehabilitación",
    proxima: false,
  },
  // Próximamente — dejar preparado
  {
    icon: "🗺️",
    name: "La Cumbre",
    address: "Próximamente — Agosto / Octubre 2025",
    tag: "Próximamente",
    proxima: true,
  },
];

export default function Ubicacion() {
  return (
    <section className="ubicacion-section" id="contacto">
      <div className="container">
        <div className="ubicacion-header">
          <div>
            <span className="section-label">Dónde encontrarme</span>
            <h2 className="section-title">Consultorios</h2>
          </div>
          <div className="ubicacion-contact-info">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ubicacion-contact-item"
            >
              <span className="ubicacion-contact-icon">📱</span>
              <span>WhatsApp · 351-6612084</span>
            </a>
            <a
              href={IG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ubicacion-contact-item"
            >
              <span className="ubicacion-contact-icon">📸</span>
              <span>Instagram · @lic.sof</span>
            </a>
          </div>
        </div>

        {/* Grid de ubicaciones */}
        <div className="ubicacion-cards-grid">
          {ubicaciones.map((u, i) => (
            <motion.div
              key={i}
              className={`ubicacion-card${u.proxima ? " proxima" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="ubicacion-card-icon">{u.icon}</div>
              <div className="ubicacion-card-name">{u.name}</div>
              <div className="ubicacion-card-address">{u.address}</div>
              <span className="ubicacion-card-tag">{u.tag}</span>
            </motion.div>
          ))}
        </div>

        {/* Mapa — LATAY (Int. García 123, Villa Carlos Paz) */}
        <motion.div
          className="ubicacion-map-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.3775042426687!2d-64.5019541257714!3d-31.43127269696871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d66497b02b265%3A0x7a94a244d1c779b!2sInt.%20J.%20Garc%C3%ADa%20123%2C%20X5152%20Villa%20Carlos%20Paz%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1744591014470!5m2!1ses!2sar"
            title="Ubicación LATAY — Int. García 123, Villa Carlos Paz"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
