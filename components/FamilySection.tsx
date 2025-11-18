import Image from "next/image";

export default function FamilySection() {
  return (
    <section
      id="familia"
      className="section-spacing bg-white"
      aria-labelledby="familia-title"
    >
      <div className="section-container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 lg:order-1 h-64 sm:h-80 lg:h-[360px]">
          <div className="absolute inset-0 rounded-2xl bg-brand-soft/60" />
          <div className="relative h-full w-full overflow-hidden rounded-2xl border border-brand-soft shadow-soft-lg">
            <Image
              src="/images/family-law.jpg"
              alt="Niño tomado de las manos por sus padres"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-4">
          <h2
            id="familia-title"
            className="font-heading text-2xl sm:text-3xl font-semibold text-brand-dark"
          >
            Derecho de Familia
          </h2>
          <p className="text-sm sm:text-base text-brand-dark/80 leading-relaxed">
            Los conflictos familiares pueden ser emocionalmente desgastantes.
            Por eso, más allá de la técnica jurídica, ponemos atención en la
            forma en que cada decisión impacta tu vida y la de tus hijos.
          </p>
          <p className="text-sm sm:text-base text-brand-dark/80 leading-relaxed">
            Acompañamos procesos como{" "}
            <span className="font-semibold">
              custodia, patria potestad, reglamentación de visitas, pensión
              alimenticia, separación y divorcio
            </span>
            , buscando siempre soluciones que prioricen el bienestar de los
            menores y la estabilidad de la familia.
          </p>

          <ul className="mt-3 grid gap-2 text-sm text-brand-dark/90 sm:grid-cols-2">
            <li className="flex items-start gap-2">
              <span className="mt-[4px] inline-block h-2 w-2 rounded-full bg-brand-accent" />
              Reglamentación de visitas y tiempos de convivencia.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-[4px] inline-block h-2 w-2 rounded-full bg-brand-accent" />
              Custodia y patria potestad, según las necesidades de cada familia.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-[4px] inline-block h-2 w-2 rounded-full bg-brand-accent" />
              Pensión alimenticia y actualización de montos.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-[4px] inline-block h-2 w-2 rounded-full bg-brand-accent" />
              Mediación y acuerdos extrajudiciales cuando sea posible.
            </li>
          </ul>

          <div className="pt-4">
            <a href="#contacto" className="btn-primary">
              Agendar consulta de familia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
