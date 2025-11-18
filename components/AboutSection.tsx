import Image from "next/image";

export default function AboutSection() {
  const highlights = [
    "Experiencia en litigios de familia, penal, trámites migratorios y asesoría empresarial (marcas y sociedades).",
    "Comunicación clara, cercana y sin tecnicismos innecesarios.",
    "Compromiso con la confidencialidad y el respeto a tu historia.",
    "Enfoque en soluciones prácticas que se adapten a tu realidad."
  ];

  return (
    <section
      id="sobre-mi"
      className="section-spacing bg-brand-light"
      aria-labelledby="sobre-mi-title"
    >
      <div className="section-container grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div className="space-y-4">
          <h2
            id="sobre-mi-title"
            className="font-heading text-2xl sm:text-3xl font-semibold text-brand-dark"
          >
            Sobre la Licda. Idalia Arcia
          </h2>
          <p className="text-sm sm:text-base text-brand-dark/80 leading-relaxed">
            La Licda. Idalia Arcia es abogada panameña y fundadora de{" "}
            <span className="font-semibold">ARCIA LEGAL GROUP</span>. Ha
            dedicado su práctica profesional a acompañar personas y familias en
            momentos clave de su vida: desde conflictos familiares y procesos
            penales, hasta la regularización de su estatus migratorio y la
            protección de sus proyectos empresariales.
          </p>
          <p className="text-sm sm:text-base text-brand-dark/80 leading-relaxed">
            Su enfoque combina la{" "}
            <span className="font-semibold">seriedad técnica</span> con una
            escucha activa y empática. Cada caso se analiza de forma individual,
            explicando con transparencia las opciones y riesgos antes de tomar
            decisiones legales.
          </p>

          <ul className="mt-3 space-y-2 text-sm text-brand-dark/90">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-[4px] inline-block h-2 w-2 rounded-full bg-brand-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-64 sm:h-80 lg:h-[340px]">
          <div className="absolute inset-0 rounded-2xl bg-brand-soft/70" />
          <div className="relative h-full w-full overflow-hidden rounded-2xl border border-brand-soft shadow-soft-lg bg-white">
            <Image
              src="/images/idalia-profile.jpg"
              alt="Licda. Idalia Arcia en su escritorio revisando un expediente"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent p-4 text-white">
              <p className="font-heading text-lg font-semibold">
                Licda. Idalia Arcia
              </p>
              <p className="text-xs text-brand-soft/95">
                Abogada &middot; ARCIA LEGAL GROUP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
