import React from "react";
import "../assets/css/footer.css";
import "../assets/css/styles.css";

const WA_LINK = "https://wa.me/3516612084?text=Hola%20Sof!";
const IG_LINK = "https://instagram.com/lic.sof";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <img
              src="/logosof.webp"
              alt="SOF Kinesiología y Osteopatía"
              style={{ height: "64px", width: "auto", marginBottom: "16px", filter: "brightness(0) invert(1)" }}
            />
            <p className="footer-brand-desc">
              Abordaje integral de la persona en su totalidad: mente, cuerpo y
              alma. Villa Carlos Paz, Córdoba, Argentina.
            </p>
            <div className="footer-social-links">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                💬
              </a>
              <a
                href={IG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
                title="Instagram @lic.sof"
              >
                📸
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <div className="footer-col-title">Navegación</div>
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#sobre-mi">Sobre mí</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#autoridad">Autoridad</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          {/* Turnos */}
          <div>
            <div className="footer-col-title">Turnos</div>
            <ul className="footer-links">
              <li>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  Consultar valores
                </a>
              </li>
              <li>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  Solicitar turno
                </a>
              </li>
              <li><a href="#servicios">Kinesiología</a></li>
              <li><a href="#servicios">Osteopatía</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <div className="footer-col-title">Contacto</div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-item"
            >
              <span className="footer-contact-icon">📱</span>
              351-6612084
            </a>
            <a
              href="mailto:lauuburgos18@gmail.com"
              className="footer-contact-item"
            >
              <span className="footer-contact-icon">✉️</span>
              lauuburgos18@gmail.com
            </a>
            <a
              href={IG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-item"
            >
              <span className="footer-contact-icon">📸</span>
              @lic.sof
            </a>
            <div className="footer-contact-item" style={{ cursor: "default" }}>
              <span className="footer-contact-icon">📍</span>
              Villa Carlos Paz, Córdoba
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <span className="footer-copy">
            © 2025 Lic. Sofía Burgos — SOF Kinesiología y Osteopatía. Todos los derechos reservados.{" "}
            <span style={{ opacity: 0.8, marginLeft: "12px", borderLeft: "1px solid rgba(255,255,255,0.3)", paddingLeft: "12px" }}>
              Desarrollado por <a href="https://wa.me/3541221485" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", fontWeight: "500" }}>Francisco Rocchia</a>
            </span>
          </span>
          <span className="footer-legal">
            Ejercicio profesional habilitado · Matrícula vigente
          </span>
        </div>
      </div>
    </footer>
  );
}
