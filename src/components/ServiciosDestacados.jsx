import React from "react";
import { motion } from "framer-motion";
import "../assets/css/ServiciosDestacados.css";
import "../assets/css/styles.css";

const WA_LINK = "https://wa.me/3516612084?text=Hola%20Sof!";

const servicios = [
  {
    icon: "🦴",
    title: "Kinesiología",
    subtitle: "Rehabilitación del movimiento",
    desc: "La kinesiología estudia y trata las alteraciones del movimiento humano a través de técnicas manuales, ejercicio terapéutico y educación y re educación sensomotora postural. Aborda desde lesiones deportivas y musculoesqueléticas hasta rehabilitación post-quirúrgica.",
    duracion: "40 minutos por sesión",
    placeholder: "La kinesiología utiliza el movimiento, el ejercicio terapéutico y diversas técnicas físicas para curar, prevenir y recuperar la funcionalidad del cuerpo. Es un pilar fundamental para restaurar la movilidad sin dolor y mejorar la calidad de vida.",
  },
  {
    icon: "🧠",
    title: "Osteopatía",
    subtitle: "Equilibrio integral del cuerpo",
    desc: "La osteopatía es una medicina manual que evalúa y trata restricciones de movilidad en articulaciones, tejidos blandos, fascias, vísceras y sistema cráneo-sacro. Su enfoque es global: es un abordaje holístico integral que busca la interconexión e integridad del ser y el ambiente.",
    duracion: "40 minutos por sesión",
    placeholder:
      "A través de técnicas manuales precisas, el osteópata identifica y libera tensiones que el cuerpo acumula como respuesta al estrés, traumas o posturas sostenidas en el tiempo. Trabaja sobre la causa, no solo sobre el síntoma. ",
    musica: {
      titulo: "Un toque Osteopático — Sofía Burgos",
      letra: `Una vez vino Still y me dijo que no olvide
Que somos cuerpo alma y mente
Con osteopatía aprendí la escucha general y local
Que analice las cadenas relacione los sistemas
Las veces que yo quiera
Cuando yo era kine mi vida era simple
Hasta que tope con cadenas
Eslabones agonistas antagonistas
Ja, simples sinergistas
Ahora estamos somos varios manifestando el nuevo enfoque
Holística integral con técnicas manuales
Buscando, movilidad e integridad`,
      reel: "https://www.instagram.com/reel/DDXk9pzISFz/?igsh=NTgyMjB3M2ozNjBl"
    }
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
              whileHover={{ 
                y: -8, 
                boxShadow: "0 15px 30px rgba(38, 145, 161, 0.12)",
                borderColor: "#2691a1" 
              }}
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

              {/* Placeholder ¿Qué es? */}
              {s.placeholder && (
                <div className="servicio-placeholder">
                  <span className="servicio-placeholder-label">
                    ¿Qué es la {s.title.toLowerCase()}?
                  </span>
                  <p>{s.placeholder}</p>
                </div>
              )}

              {/* Música y Reel para Osteopatía */}
              {s.musica && (
                <div className="servicio-musica" style={{ marginTop: "24px", padding: "16px", backgroundColor: "var(--dark-light)", borderRadius: "8px", borderLeft: "4px solid var(--primary)", textAlign: "left" }}>
                  <h4 style={{ fontSize: "1rem", color: "var(--light)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                    🎵 {s.musica.titulo}
                  </h4>
                  <pre style={{ whiteSpace: "pre-wrap", fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--gray-text)", lineHeight: "1.5", marginBottom: "16px" }}>
                    {s.musica.letra}
                  </pre>
                  <a href={s.musica.reel} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", padding: "8px 12px", backgroundColor: "#E1306C", color: "white", borderRadius: "20px", fontWeight: "500", textDecoration: "none" }}>
                    <span style={{ fontSize: "1.1rem" }}>📸</span> Ver el Reel en Instagram
                  </a>
                </div>
              )}

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sof btn-sof-outline"
                style={{ marginTop: "20px" }}
              >
                Consultar turno →
              </motion.a>
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
