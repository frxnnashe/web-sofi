import React from "react";
import { motion } from "framer-motion";
import "../assets/css/autoridad.css";
import "../assets/css/styles.css";

const certificaciones = [
  "Licenciada en Kinesiología y Fisiatría — Universidad Nacional de Córdoba (UNC)",
  "Especialización en Osteopatía — Formación posgrado",
  "Formación continua en técnicas manuales y abordaje holístico",
];

const experiencia = [
  "Especialista en Rehabilitación Neurológica (Clínica Rita Bianchi 2014-2026)",
  "Amplia experiencia en Equinoterapia / TACCA en diversas instituciones (2015-2024)",
  "Centro Lata'y — Neurorehabilitación en niños y adolescentes",
  "Facilitadora con orientación osteopática y rehabilitación respiratoria pediátrica",
  "Rehabilitación osteopática deportiva (CERAFA)",
];

const posgrados = [
  "Actualmente terminando la formación de Técnica Benenzoniana, terapia que aplica el lenguaje no verbal, exponiendo la expresión desde lo corporal y lo sensorial para acompañar a personas y mejorar su calidad de vida.",
  "Posgrado en Rehabilitación Pulmonar (2020)",
  "Residencia en Neurorehabilitación (Lennox, 2013-2014)",
  "Especialización en Neurodinamia (2018) y Concepto Bobath Adultos (2017)",
  "Formación avanzada: Manejo de ACV y Lesión Medular",
  "Drenaje Linfático Manual (2013) y Análisis de Movimiento Normal (2014)",
];

const etica = [
  "Confidencialidad absoluta de la información clínica del paciente",
  "Actualización profesional constante y práctica basada en evidencia",
  "Derivación oportuna cuando el caso lo requiere",
  "Trato digno, empático y sin discriminación de ningún tipo",
  "Transparencia en el plan de tratamiento y los objetivos terapéuticos",
];

const logosInstitucionales = [
  { label: "Colegio de Kinesiólogos", src: "/colegiokines.png" },
  { label: "AFIP", src: "/logoafip.png" },
  { label: "FOTEM", src: "/FOTEM.png" },
];

export default function Autoridad() {
  return (
    <section className="autoridad-section" id="autoridad">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Trayectoria y ética</span>
          <h2 className="section-title">Autoridad &amp; Confianza</h2>
          <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.55)" }}>
            Mi práctica se sustenta en formación académica sólida y un compromiso
            ético inalterable con cada paciente.
          </p>
        </motion.div>

        <div className="autoridad-grid">
          {/* Certificaciones Títulos */}
          <motion.div
            className="autoridad-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, boxShadow: "0 12px 24px rgba(0,0,0,0.15)", backgroundColor: "var(--dark-light)" }}
          >
            <div className="autoridad-card-icon">🎓</div>
            <h3 className="autoridad-card-title">Títulos Universitarios</h3>
            <ul>
              {certificaciones.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </motion.div>

          {/* Formación y Posgrados */}
          <motion.div
            className="autoridad-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, boxShadow: "0 12px 24px rgba(0,0,0,0.15)", backgroundColor: "var(--dark-light)" }}
          >
            <div className="autoridad-card-icon">📚</div>
            <h3 className="autoridad-card-title">Formación Especializada</h3>
            <ul>
              {posgrados.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </motion.div>

          {/* Experiencia Clínica */}
          <motion.div
            className="autoridad-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, boxShadow: "0 12px 24px rgba(0,0,0,0.15)", backgroundColor: "var(--dark-light)" }}
          >
            <div className="autoridad-card-icon">🏥</div>
            <h3 className="autoridad-card-title">Experiencia Clínica</h3>
            <ul>
              {experiencia.map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </ul>
          </motion.div>

          {/* Ética */}
          <motion.div
            className="autoridad-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, boxShadow: "0 12px 24px rgba(0,0,0,0.15)", backgroundColor: "var(--dark-light)" }}
          >
            <div className="autoridad-card-icon">⚖️</div>
            <h3 className="autoridad-card-title">Política y Ética</h3>
            <ul>
              {etica.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </motion.div>

          {/* Registro y pertenencia */}
          <motion.div
            className="autoridad-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, boxShadow: "0 12px 24px rgba(0,0,0,0.15)", backgroundColor: "var(--dark-light)" }}
          >
            <div className="autoridad-card-icon">📋</div>
            <h3 className="autoridad-card-title">Registro Profesional</h3>
            <ul>
              <li>Matriculada en el Colegio de Kinesiólogos de la Provincia de Córdoba</li>
              <li>Inscripción vigente ante AFIP — Facturación oficial</li>
              <li>Miembro de FOTEM — Fundación Osteopática y Terapias Manuales</li>
              <li>Ejercicio profesional autorizado y en plena vigencia</li>
            </ul>
            <div style={{ marginTop: "24px", padding: "16px", backgroundColor: "var(--dark)", borderRadius: "8px", border: "1px solid var(--gray-mid)" }}>
               <span style={{ display: "block", fontSize: "0.85rem", color: "var(--gray-text)", marginBottom: "12px", textTransform:"uppercase", letterSpacing:"0.05em" }}>Certificado de Matrícula</span>
               <img src="/certificadosof.png" alt="Certificado del Colegio de Kinesiólogos" style={{ width: "100%", borderRadius: "4px", opacity: 0.95 }} />
            </div>
          </motion.div>
        </div>

        {/* Logos institucionales (placeholders) */}
        <motion.div
          className="autoridad-logos"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="autoridad-logos-title">Instituciones y organismos</p>
          <div className="autoridad-logos-grid">
            {logosInstitucionales.map((l) => (
              <motion.div 
                className="logo-placeholder-inst" 
                key={l.label}
                whileHover={{ scale: 1.08 }}
              >
                <img
                  src={l.src}
                  alt={l.label}
                  style={{
                    height: "52px",
                    width: "auto",
                    maxWidth: "110px",
                    objectFit: "contain",
                    filter: "brightness(0) invert(1)",
                    opacity: 0.85,
                  }}
                />
                <span className="logo-placeholder-label">{l.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
