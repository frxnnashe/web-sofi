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
          {/* Testimonio 1: Juan */}
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
                "Llevo un tiempo de tratamiento con Sofia Burgos y estoy muy conforme con mi recuperación, ya que además de mejorar físicamente, su manera de explicar detalladamente es muy reconfortante."
              </p>
              <div className="testimonio-author">
                <strong>Juan</strong>
              </div>
            </div>
            <div className="testimonio-images">
              <img src="/Testimonioimg1.webp" alt="Evolución testimonio 1" className="testimonio-img" />
              <img src="/Testimonioimg2.webp" alt="Evolución testimonio 2" className="testimonio-img" />
            </div>
          </motion.div>

          {/* Testimonio 2: Madre de Maxi */}
          <motion.div
            className="testimonio-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, boxShadow: "0 12px 24px rgba(0,0,0,0.06)", borderColor: "#2691a1" }}
          >
            <div className="testimonio-content">
              <div className="testimonio-icon">"</div>
              <p className="testimonio-text">
                "Gracias por tu profesionalidad y por explicarme cada duda durante cada día de rehabilitación. En decirme cómo poner en práctica cada movimiento cada posición para que su cuerpo esté mejor y él se sienta cómodo, me ayudó mucho en cada cosa que me ibas enseñando para el bien del Maxi. Me sentí muy acompañada!!.. Te queremos mucho Sofi!!❤️"
              </p>
              <div className="testimonio-author">
                <strong>Madre de Maxi</strong>
              </div>
            </div>
            <div className="testimonio-images" style={{ justifyContent: "center" }}>
              <img src="/maxi.webp" alt="Maxi" className="testimonio-img" style={{ width: "100%", maxHeight: "180px", objectFit: "cover" }} />
            </div>
          </motion.div>

          {/* Testimonio 3: Flor */}
          <motion.div
            className="testimonio-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, boxShadow: "0 12px 24px rgba(0,0,0,0.06)", borderColor: "#2691a1" }}
          >
            <div className="testimonio-content">
              <div className="testimonio-icon">"</div>
              <p className="testimonio-text">
                "Cada sesión con Sofía es mucho más que un tratamiento, es un espacio de bienestar y contención. Desde el primer día me hizo sentir súper cómoda, escuchada y acompañada en todo momento. Su dedicación, calidez y profesionalismo se reflejan en cada técnica que aplica y en los increíbles resultados que se sienten al terminar cada sesión. Lo que más valoro es cómo se toma el tiempo de explicar todo: qué está trabajando, por qué aparecen ciertas dolencias y cómo podemos mejorar nuestro estilo de vida para cuidar mejor nuestro cuerpo. Eso hace que cada terapia también sea un aprendizaje. Siempre es un placer volver, porque además de aliviar el cuerpo, transmite mucha tranquilidad y buena energía. Sin dudas, una excelente profesional y una hermosa persona ❤️"
              </p>
              <div className="testimonio-author">
                <strong>Flor</strong>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
