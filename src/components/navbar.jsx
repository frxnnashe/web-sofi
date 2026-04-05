import React, { useEffect, useState } from "react";
import "../assets/css/navbar.css";
import "../assets/css/styles.css";

const WA_NUMBER = "3516612084";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hola%20Sof%C3%ADa%2C%20quisiera%20consultar%20valores%20y%20turnos`;

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Autoridad", href: "#autoridad" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav className={`sof-navbar${scrolled ? " scrolled" : ""}`}>
        <div className="container">
          {/* Logo oficial */}
          <a href="#inicio" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <img
              src="/logosof.webp"
              alt="SOF Kinesiología y Osteopatía"
              style={{ height: "75px", width: "auto", display: "block" }}
            />
          </a>

          {/* Links de escritorio */}
          <ul className="sof-nav-links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>

          {/* CTA escritorio */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sof btn-sof-primary sof-navbar-cta"
            style={{ fontSize: "0.82rem", padding: "10px 22px" }}
          >
            💬 Consultar Turno
          </a>

          {/* Hamburguesa */}
          <button
            className="sof-hamburger"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              style={
                menuOpen
                  ? { transform: "translateY(7px) rotate(45deg)" }
                  : {}
              }
            />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span
              style={
                menuOpen
                  ? { transform: "translateY(-7px) rotate(-45deg)" }
                  : {}
              }
            />
          </button>
        </div>

        {/* Menú mobile */}
        <div className={`sof-mobile-menu${menuOpen ? " open" : ""}`}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={handleLinkClick}>
              {l.label}
            </a>
          ))}
          <div className="sof-mobile-cta">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sof btn-sof-primary"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={handleLinkClick}
            >
              💬 Consultar Turno
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
