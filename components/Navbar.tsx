"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#migracion", label: "Migración" },
  { href: "#familia", label: "Familia" },
  { href: "#violencia", label: "Violencia Doméstica" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-soft/80 bg-brand-dark/95 backdrop-blur">
      <nav className="section-container flex h-16 items-center justify-between sm:h-20">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full border border-brand-gold/70 bg-brand-beige">
            <Image
              src="/images/logo-idalia.png"
              alt="Logo Arcia Legal Group"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-sm sm:text-base font-semibold tracking-wide text-white">
              ARCIA LEGAL GROUP
            </span>
            <span className="text-[11px] sm:text-xs text-brand-soft/90">
              Licda. Idalia Arcia – Abogada
            </span>
          </div>
        </a>

        {/* Desktop menu */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-brand-soft">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/50762009635?text=Hola%20Licda.%20Idalia,%20me%20gustar%C3%ADa%20una%20consulta%20legal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs sm:text-sm bg-brand-gold text-brand-dark hover:bg-brand-gold/90"
          >
            WhatsApp directo
          </a>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-brand-soft/70 p-2 text-brand-soft hover:bg-brand-soft/20 md:hidden"
          aria-label="Abrir menú"
        >
          <span className="sr-only">Abrir menú</span>
          <div className="flex flex-col gap-[5px]">
            <span
              className={`h-[2px] w-5 rounded-full bg-brand-soft transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-5 rounded-full bg-brand-soft transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-5 rounded-full bg-brand-soft transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-brand-dark/98 border-t border-brand-soft/60">
          <div className="section-container py-4 space-y-4">
            <ul className="flex flex-col gap-3 text-sm font-medium text-brand-soft">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-1 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/50762009635?text=Hola%20Licda.%20Idalia,%20me%20gustar%C3%ADa%20una%20consulta%20legal"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full bg-brand-gold text-brand-dark hover:bg-brand-gold/90"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
