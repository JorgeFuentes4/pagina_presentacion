export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f4f2] text-zinc-900">
      <header className="border-b border-zinc-200 bg-zinc-100">
        <div className="mx-auto flex max-w-6xl flex-col px-6 py-10 sm:px-10 lg:px-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Ingeniero en informática
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Jorge Fuentes</h1>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-0 bg-white shadow-sm lg:grid-cols-[280px_1fr]">
        <aside className="bg-zinc-100 px-6 py-10 sm:px-10 lg:px-8">
          <section>
            <h2 className="section-title">Contacto</h2>
            <address className="not-italic text-sm leading-7 text-zinc-700">
              <p>+56 9 3132 1636</p>
              <p>
                <a className="hover:text-zinc-950 hover:underline" href="mailto:jorgefj4@gmail.com">
                  jorgefj4@gmail.com
                </a>
              </p>
              <p>Chorrillos 3, Lampa</p>
              <p className="mt-3 break-words">
                <a
                  className="font-medium hover:text-zinc-950 hover:underline"
                  href="https://www.linkedin.com/in/jorge-fuentes-jara-b108b9281"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </address>
          </section>

          <section className="mt-12">
            <h2 className="section-title">Idiomas</h2>
            <ul className="space-y-2 text-sm text-zinc-700">
              <li>Inglés intermedio</li>
              <li>Español nativo</li>
            </ul>
          </section>

        </aside>

        <div className="px-6 py-10 sm:px-10 lg:px-14">
          <section>
            <h2 className="section-title">Sobre mí</h2>
            <p className="max-w-3xl text-lg leading-8 text-zinc-700">
              Estudiante egresado de ingeniería informática. Me considero una persona responsable,
              ordenada y comprometida con el aprendizaje continuo. Busco mi primera experiencia
              laboral para aplicar los conocimientos adquiridos durante la carrera.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="section-title">Experiencia</h2>
            <div className="space-y-8 text-zinc-700">
              <article>
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-4">
                  <h3 className="text-xl font-semibold text-zinc-950">Práctica profesional</h3>
                  <p className="text-sm font-medium text-zinc-500">Agosto - Octubre 2025</p>
                </div>
                <p className="mt-1 font-medium">AIntelligence SpA</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 leading-7">
                  <li>Creación de flujos de trabajo usando n8n.</li>
                  <li>Programación Front-End y Back-End utilizando Next.js y Supabase.</li>
                </ul>
              </article>

              <article>
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-4">
                  <h3 className="text-xl font-semibold text-zinc-950">Proyecto de título</h3>
                  <p className="text-sm font-medium text-zinc-500">Marzo - Diciembre 2024</p>
                </div>
                <p className="mt-1 font-medium">Real Stock Manager</p>
                <p className="mt-3 leading-7">
                  Sistema Full-Stack de gestión de inventarios, desarrollado en equipo con React,
                  Node.js y PostgreSQL. Enfocado en mejorar la trazabilidad y el control de stock
                  para una pequeña y mediana empresa.
                </p>
                <p className="mt-3 font-medium text-zinc-950">
                  Repositorio del proyecto
                </p>
              </article>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="section-title">Estudios</h2>
            <div className="space-y-6 text-zinc-700">
              <article>
                <h3 className="font-semibold text-zinc-950">
                  Instituto Nacional de Capacitación Profesional de Chile, INACAP
                </h3>
                <p className="mt-1 text-sm text-zinc-500">2021 - 2024</p>
                <p className="mt-1">Ingeniería en informática.</p>
              </article>
              <article>
                <h3 className="font-semibold text-zinc-950">Liceo Politécnico Andes</h3>
                <p className="mt-1 text-sm text-zinc-500">2016 - 2020</p>
                <p className="mt-1">Telecomunicaciones.</p>
              </article>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="section-title">Habilidades</h2>
            <ul className="grid gap-x-8 gap-y-2 text-zinc-700 sm:grid-cols-2">
              <li>Manejo de Microsoft Office</li>
              <li>JavaScript, TypeScript, Python y SQL</li>
              <li>Programación Back-End y Front-End</li>
              <li>React, Node.js, Next.js y Supabase</li>
              <li>PostgreSQL y Power BI</li>
              <li>Metodologías ágiles como SCRUM</li>
              <li>Diseño y gestión de bases de datos</li>
              <li>Trabajo en equipo</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="section-title">Certificados</h2>
            <p className="mb-6 text-xs leading-5 text-zinc-500">
              Para ver una credencial, selecciona “Mostrar credencial” e ingresa el ID correspondiente de ser necesario
            </p>
            <div className="space-y-6 text-sm leading-6 text-zinc-700">
              <article className="border-b border-zinc-300 pb-5">
                <h3 className="font-semibold text-zinc-950">
                  Certificado en soporte computacional
                  <span className="ml-2 inline-block break-all text-xs font-normal text-zinc-500">
                    ID: 791A3450F22E9710
                  </span>
                </h3>
                <p className="mt-2">Universidad Tecnológica de Chile, INACAP</p>
                <p className="text-zinc-500">Expedición: ene. 2025</p>
                <a
                  className="mt-2 inline-block text-xs font-semibold uppercase tracking-wide text-zinc-600 underline underline-offset-4 hover:text-zinc-950"
                  href="https://siga.inacap.cl/Inacap.VerificacionCertificados/Default.aspx#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mostrar credencial
                </a>
              </article>

              <article className="border-b border-zinc-300 pb-5">
                <h3 className="font-semibold text-zinc-950">
                  Certificado en innovación y emprendimiento
                  <span className="ml-2 inline-block break-all text-xs font-normal text-zinc-500">
                    ID: 861C786A67C20F3D
                  </span>
                </h3>
                <p className="mt-2">Universidad Tecnológica de Chile, INACAP</p>
                <p className="text-zinc-500">Expedición: ene. 2025</p>
                <a
                  className="mt-2 inline-block text-xs font-semibold uppercase tracking-wide text-zinc-600 underline underline-offset-4 hover:text-zinc-950"
                  href="https://siga.inacap.cl/Inacap.VerificacionCertificados/Default.aspx#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mostrar credencial
                </a>
              </article>

              <article className="border-b border-zinc-300 pb-5">
                <h3 className="font-semibold text-zinc-950">
                  Certificado en diseño ágil de sistemas
                  <span className="ml-2 inline-block break-all text-xs font-normal text-zinc-500">
                    ID: DDF39CD41AEA8823
                  </span>
                </h3>
                <p className="mt-2">Universidad Tecnológica de Chile, INACAP</p>
                <p className="text-zinc-500">Expedición: ene. 2025</p>
                <a
                  className="mt-2 inline-block text-xs font-semibold uppercase tracking-wide text-zinc-600 underline underline-offset-4 hover:text-zinc-950"
                  href="https://siga.inacap.cl/Inacap.VerificacionCertificados/Default.aspx#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mostrar credencial
                </a>
              </article>

              <article className="border-b border-zinc-300 pb-5">
                <h3 className="font-semibold text-zinc-950">
                  Certificado en desarrollo de aplicaciones básicas
                  <span className="ml-2 inline-block break-all text-xs font-normal text-zinc-500">
                    ID: 5F1F91E565989077
                  </span>
                </h3>
                <p className="mt-2">Universidad Tecnológica de Chile, INACAP</p>
                <p className="text-zinc-500">Expedición: ene. 2025</p>
                <a
                  className="mt-2 inline-block text-xs font-semibold uppercase tracking-wide text-zinc-600 underline underline-offset-4 hover:text-zinc-950"
                  href="https://siga.inacap.cl/Inacap.VerificacionCertificados/Default.aspx#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mostrar credencial
                </a>
              </article>

              <article className="border-b border-zinc-300 pb-5">
                <h3 className="font-semibold text-zinc-950">
                  Certificado en arquitectura cloud
                  <span className="ml-2 inline-block break-all text-xs font-normal text-zinc-500">
                    ID: 1180FCA519DFE7EF
                  </span>
                </h3>
                <p className="mt-2">Universidad Tecnológica de Chile, INACAP</p>
                <p className="text-zinc-500">Expedición: ene. 2025</p>
                <a
                  className="mt-2 inline-block text-xs font-semibold uppercase tracking-wide text-zinc-600 underline underline-offset-4 hover:text-zinc-950"
                  href="https://siga.inacap.cl/Inacap.VerificacionCertificados/Default.aspx#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mostrar credencial
                </a>
              </article>

              <article className="border-b border-zinc-300 pb-5">
                <h3 className="font-semibold text-zinc-950">
                  Certificado en diseño y gestión de base de datos
                  <span className="ml-2 inline-block break-all text-xs font-normal text-zinc-500">
                    ID: C856D54784E24638
                  </span>
                </h3>
                <p className="mt-2">Universidad Tecnológica de Chile, INACAP</p>
                <p className="text-zinc-500">Expedición: ene. 2025</p>
                <a
                  className="mt-2 inline-block text-xs font-semibold uppercase tracking-wide text-zinc-600 underline underline-offset-4 hover:text-zinc-950"
                  href="https://siga.inacap.cl/Inacap.VerificacionCertificados/Default.aspx#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mostrar credencial
                </a>
              </article>

              <article>
                <h3 className="font-semibold text-zinc-950">
                  Certificado de desarrollador Full-Stack
                  <span className="ml-2 inline-block break-all text-xs font-normal text-zinc-500">
                    ID: 7AC7202A4E4461B5
                  </span>
                </h3>
                <p className="mt-2">Universidad Tecnológica de Chile, INACAP</p>
                <p className="text-zinc-500">Expedición: ene. 2025</p>
                <a
                  className="mt-2 inline-block text-xs font-semibold uppercase tracking-wide text-zinc-600 underline underline-offset-4 hover:text-zinc-950"
                  href="https://siga.inacap.cl/Inacap.VerificacionCertificados/Default.aspx#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mostrar credencial
                </a>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
