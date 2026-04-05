import React from "react";
import { motion } from "framer-motion";
import "../assets/css/ServiciosDestacados.css";
import "../assets/css/styles.css";

const WA_LINK = "https://wa.me/3516612084?text=Hola%20Sof%C3%ADa%2C%20quisiera%20consultar%20valores%20y%20turnos";

const servicios = [
  {
    icon: "🦴",
    title: "Kinesiología",
    subtitle: "Rehabilitación del movimiento",
    desc: "La kinesiología estudia y trata las alteraciones del movimiento humano a través de técnicas manuales, ejercicio terapéutico y educación postural. Aborda desde lesiones deportivas y musculoesqueléticas hasta rehabilitación post-quirúrgica.",
    duracion: "40 minutos por sesión",
    placeholder: null,
  },
  {
    icon: "🌿",
    title: "Osteopatía",
    subtitle: "Equilibrio integral del cuerpo",
    desc: "La osteopatía es una medicina manual que evalúa y trata restricciones de movilidad en articulaciones, tejidos blandos, fascias, vísceras y sistema cráneo-sacro. Su enfoque es global: entiende el cuerpo como una unidad funcional donde todo está interconectado.",
    duracion: "40 minutos por sesión",
    placeholder:
      "A través de técnicas manuales precisas, el osteópata identifica y libera tensiones que el cuerpo acumula como respuesta al estrés, traumas o posturas sostenidas en el tiempo. Trabaja sobre la causa, no solo sobre el síntoma.",
  },
];

export default function ServiciosDestacados() {
  return (
    <section className="servicios-section" id="servicios">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Lo que ofrezco</span>
          <h2 className="section-title">Servicios</h2>
          <p className="section-subtitle">
            Dos disciplinas que se complementan. Cada sesión está pensada desde
            tu caso particular.
          </p>
        </motion.div>

        <div className="servicios-grid">
          {servicios.map((s, i) => (
            <motion.div
              key={i}
              className="servicio-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="servicio-icon">{s.icon}</div>
              <div className="servicio-subtitle">{s.subtitle}</div>
              <h3 className="servicio-title">{s.title}</h3>
              <p className="servicio-desc">{s.desc}</p>

              {/* Meta duración */}
              <div className="servicio-meta">
                <span className="servicio-meta-icon">⏱</span>
                <span className="servicio-meta-text">
                  Duración: {s.duracion}
                </span>
              </div>

              {/* Placeholder ¿Qué es la osteopatía? — solo en tarjeta Osteopatía */}
              {s.placeholder && (
                <div className="servicio-placeholder">
                  <span className="servicio-placeholder-label">
                    ¿Qué es la osteopatía?
                  </span>
                  <p>{s.placeholder}</p>
                </div>
              )}

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sof btn-sof-outline"
                style={{ marginTop: "20px" }}
              >
                Consultar turno →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Nota de trabajo combinado */}
        <motion.div
          className="servicios-nota"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>
            ✳️ <strong>Nota:</strong> Aunque ofrezco la Kinesiología y la
            Osteopatía como servicios independientes, mi forma de trabajo
            siempre contempla la <strong>combinación de ambas disciplinas</strong>.
            Cada persona es evaluada en su totalidad, y el abordaje se adapta
            a lo que realmente necesite en ese momento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
