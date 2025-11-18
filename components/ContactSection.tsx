"use client";

import React from "react";

export default function ContactSection() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nombre = formData.get("nombre") as string;
    const correo = formData.get("correo") as string;
    const telefono = formData.get("telefono") as string;
    const tipo = formData.get("tipo") as string;
    const mensaje = formData.get("mensaje") as string;

    const subject = "Nueva consulta desde la web – ARCIA LEGAL GROUP";

    const bodyLines = [
      "Has recibido una nueva consulta desde el formulario web:",
      "",
      `Nombre completo: ${nombre || ""}`,
      `Correo electrónico: ${correo || ""}`,
      `Teléfono / WhatsApp: ${telefono || ""}`,
      `Tipo de consulta: ${tipo || ""}`,
      "",
      "Mensaje:",
      mensaje || "",
      "",
      "Enviado desde la landing page de ARCIA LEGAL GROUP."
    ];

    const body = bodyLines.join("\n");

    const mailtoLink = `mailto:iarcia.lg@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contacto"
      className="section-spacing bg-white"
      aria-labelledby="contacto-title"
    >
      <div className="section-container grid gap-10 lg:grid-cols-[1.3fr,0.9fr] lg:items-start">
        <div>
          <h2
            id="contacto-title"
            className="font-heading text-2xl sm:text-3xl font-semibold text-brand-dark mb-3"
          >
            Contáctame
          </h2>
          <p className="text-sm sm:text-base text-brand-dark/80 mb-6 leading-relaxed">
            Comparte algunos datos básicos sobre tu situación. Utilizaremos esta
            información únicamente para responder a tu consulta legal.
          </p>

          <form
            onSubmit={handleSubmit}
            className="card-soft bg-brand-light/70 p-5 sm:p-6 space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="nombre"
                  className="text-xs font-semibold text-brand-dark/80"
                >
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  className="rounded-xl border border-brand-soft bg-white px-3 py-2 text-sm text-brand-dark outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/70"
                  placeholder="Ej. María Rodríguez"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="correo"
                  className="text-xs font-semibold text-brand-dark/80"
                >
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  required
                  className="rounded-xl border border-brand-soft bg-white px-3 py-2 text-sm text-brand-dark outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/70"
                  placeholder="tu@correo.com"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="telefono"
                  className="text-xs font-semibold text-brand-dark/80"
                >
                  Teléfono / WhatsApp
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  className="rounded-xl border border-brand-soft bg-white px-3 py-2 text-sm text-brand-dark outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/70"
                  placeholder="Ej. +507 6XX-XXXX"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="tipo"
                  className="text-xs font-semibold text-brand-dark/80"
                >
                  Tipo de consulta
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  className="rounded-xl border border-brand-soft bg-white px-3 py-2 text-sm text-brand-dark outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/70"
                  defaultValue="Familia"
                >
                  <option value="Familia">Familia</option>
                  <option value="Penal">Penal</option>
                  <option value="Migración">Migración</option>
                  <option value="Empresa">Empresa</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="mensaje"
                className="text-xs font-semibold text-brand-dark/80"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                className="rounded-xl border border-brand-soft bg-white px-3 py-2 text-sm text-brand-dark outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/70"
                placeholder="Cuéntame brevemente tu situación o qué tipo de ayuda necesitas."
              />
            </div>

            <p className="text-[11px] text-brand-dark/70">
              Al enviar este formulario, aceptas que te contactemos por los
              medios indicados para brindar respuesta a tu consulta.
            </p>

            <button type="submit" className="btn-primary w-full">
              Enviar consulta por correo
            </button>
          </form>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href="https://wa.me/50762009635?text=Hola%20Licda.%20Idalia,%20me%20gustar%C3%ADa%20una%20consulta%20legal"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex w-full items-center justify-center bg-brand-accent"
            >
              Escribir por WhatsApp
            </a>
            <a
              href="tel:+50762009635"
              className="btn-secondary flex w-full items-center justify-center"
            >
              Llamar ahora
            </a>
          </div>
        </div>

        {/* Sidebar contact info */}
        <aside className="card-soft bg-brand-light/80 p-5 sm:p-6 space-y-4">
          <h3 className="font-heading text-lg font-semibold text-brand-dark">
            Datos de contacto
          </h3>
          <p className="text-sm text-brand-dark/80 leading-relaxed">
            Si prefieres, puedes escribir o llamar directamente a la Licda.
            Idalia Arcia. Responderemos tu consulta en el menor tiempo posible.
          </p>
          <div className="space-y-2 text-sm text-brand-dark/90">
            <p>
              <span className="font-semibold">Correo:</span>{" "}
              <a
                href="abogada@arcialegalgroup.com"
                className="underline decoration-brand-accent/60 underline-offset-2 hover:text-brand-accent"
              >
                iarcia.lg@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">WhatsApp:</span>{" "}
              <a
                href="https://wa.me/50762009635"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-brand-accent/60 underline-offset-2 hover:text-brand-accent"
              >
                +507 6200-9635
              </a>
            </p>
            <p>
              <span className="font-semibold">Instagram:</span>{" "}
              <a
                href="https://www.instagram.com/arcia.legalgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-brand-accent/60 underline-offset-2 hover:text-brand-accent"
              >
                @arcia.legalgroup
              </a>
            </p>
          </div>

          <div className="pt-2 border-t border-brand-soft/80 mt-4 text-[11px] text-brand-dark/70">
            <p>
              ARCIA LEGAL GROUP · Servicios legales en materia de familia,
              violencia doméstica, derecho penal, migración y empresas en
              Panamá.
            </p>
          </div>

          <footer className="pt-4 text-[11px] text-brand-dark/60">
            <p>
              © {new Date().getFullYear()} ARCIA LEGAL GROUP. Todos los derechos
              reservados.{" "}
              <a
                href="#inicio"
                className="underline underline-offset-2 hover:text-brand-accent"
              >
                Volver arriba
              </a>
            </p>
          </footer>
        </aside>
      </div>
    </section>
  );
}
