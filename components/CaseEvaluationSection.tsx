export default function CaseEvaluationSection() {
  return (
    <section
      id="evaluacion"
      className="section-spacing bg-brand-accent text-white"
    >
      <div className="section-container grid gap-6 lg:grid-cols-[1.4fr,0.8fr] lg:items-center">
        <div className="space-y-3">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-light">
            Evaluación y revisión de expedientes
          </h2>
          <p className="text-sm sm:text-base text-brand-soft/95 leading-relaxed">
            Si ya tienes un proceso en curso o documentación avanzada, la Licda.
            Idalia Arcia puede revisar tu expediente, identificar riesgos y
            proponerte estrategias legales realistas antes de tomar la próxima
            decisión.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <a href="#contacto" className="btn-secondary bg-white text-brand-accent">
            Quiero evaluar mi caso
          </a>
          <a
            href="https://wa.me/50762009635?text=Hola%20Licda.%20Idalia,%20quisiera%20coordinar%20una%20evaluaci%C3%B3n%20de%20mi%20expediente"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary border-white/60 bg-transparent text-white hover:bg-white/10"
          >
            Enviar detalles por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
