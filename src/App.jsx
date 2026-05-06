import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail, FiArrowRight } from 'react-icons/fi'

const projects = [
  {
    title: 'NextRead',
    description: 'Red social para lectores con listas, reseñas y notificaciones.',
    stack: ['Node.js', 'Express', 'MySQL', 'React', 'Vite'],
    repo: 'https://github.com/AlejoGuerraa/nextRead',
    details: 'Plataforma social enfocada en lectores con recomendaciones, reseñas y administración de bibliotecas personales.',
  },
  {
    title: 'IPVision',
    description: 'Scanner de redes en Java con exportación de datos.',
    stack: ['Java', 'Redes', 'Escaneo', 'Exportación'],
    repo: 'https://github.com/AlejoGuerraa/IPVision',
    details: 'Herramienta de análisis de redes desarrollada en Java para detectar dispositivos y generar reportes.',
  },
  {
    title: 'CampusCore',
    description: 'Sistema de gestión académica con inscripciones y notas.',
    stack: ['Node.js', 'Express', 'SQL', 'React', 'Vite'],
    repo: 'https://github.com/AlejoGuerraa/CampusCore',
    details: 'Administra cursos, inscripciones y resultados académicos con una interfaz web moderna.',
  },
  {
    title: 'Knowbeat',
    description: 'Aplicación web en desarrollo para aprendizaje musical.',
    stack: ['Node.js', 'Express', 'MongoDB', 'SQL'],
    repo: 'https://github.com/Santino7537/Knowbeat',
    details: 'Aprendizaje de teoría y práctica musical mediante ejercicios personalizados y seguimientos inteligentes.',
    beta: true,
  },
  {
    title: 'TuBuffet',
    description: 'App para comercios escolares con pedidos rápidos.',
    stack: ['Node.js', 'Express', 'SQL', 'React Native'],
    repo: 'https://github.com/Renaaa189/TuBuffet',
    details: 'Solución para buffets escolares que reduce tiempos de espera y organiza ventas con pedidos desde la app.',
    beta: true,
  },
]

const skillGroups = [
  { label: 'Lenguajes', items: ['JavaScript', 'Python', 'C', 'Java'] },
  { label: 'Backend', items: ['Express', 'Node.js'] },
  { label: 'Frontend', items: ['HTML', 'CSS', 'React'] },
  { label: 'Otros', items: ['Unity', 'Arduino'] },
  { label: 'Herramientas', items: ['VSCode', 'Eclipse', 'Postman', 'Figma'] },
]

const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Formación', href: '#education' },
  { label: 'Contacto', href: '#contact' },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-full max-w-5xl rounded-3xl border border-slate-700/70 bg-slate-900/95 p-8 shadow-glow backdrop-blur-xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="inline-flex rounded-full bg-cyan-500/15 px-3 py-1 text-sm text-cyan-300">Beta</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">{project.title}</h2>
            <p className="mt-3 text-slate-300">{project.details}</p>
          </div>
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-800 px-5 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-700"
          >
            Cerrar
          </button>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <div className="rounded-3xl border border-slate-700/60 bg-slate-950/70 p-5 shadow-xl shadow-slate-950/40">
              <h3 className="text-xl font-semibold text-white">Descripción</h3>
              <p className="mt-3 text-slate-300">{project.description}</p>
            </div>
            <div className="rounded-3xl border border-slate-700/60 bg-slate-950/70 p-5 shadow-xl shadow-slate-950/40">
              <h3 className="text-xl font-semibold text-white">Tecnologías</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-2xl bg-slate-800 px-3 py-2 text-sm text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-slate-700/60 bg-slate-950/70 p-5 shadow-xl shadow-slate-950/40">
              <h3 className="text-xl font-semibold text-white">Vista previa</h3>
              <div className="mt-5 grid gap-4">
                <div className="h-44 rounded-3xl bg-gradient-to-br from-cyan-500/15 via-slate-800 to-slate-900 p-4">
                  <div className="h-full w-full rounded-3xl border border-slate-700/80 bg-slate-900/80 backdrop-blur-sm" />
                </div>
                <div className="h-44 rounded-3xl bg-gradient-to-br from-violet-500/15 via-slate-800 to-slate-900 p-4">
                  <div className="h-full w-full rounded-3xl border border-slate-700/80 bg-slate-900/80 backdrop-blur-sm" />
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-700/60 bg-slate-950/70 p-5 shadow-xl shadow-slate-950/40">
              <h3 className="text-xl font-semibold text-white">Repositorio</h3>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-2xl bg-cyan-500/15 px-4 py-3 text-sm text-cyan-200 transition hover:bg-cyan-500/25"
              >
                Ver en GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-slate-700/20 via-transparent to-transparent" />
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-28 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <header className="sticky top-0 z-30 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#hero" className="text-lg font-semibold text-slate-100">AlejoG</a>
          <nav className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-slate-100">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3 text-slate-400 md:hidden">
            <a href="#projects" className="rounded-full border border-slate-700/80 bg-slate-800/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-100">
              Ver
            </a>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-6 pb-20 pt-10 md:px-10">
        <section id="hero" className="relative overflow-hidden rounded-[2rem] border border-slate-800/70 bg-slate-900/95 p-10 shadow-glow backdrop-blur-xl md:p-16">
          <div className="absolute inset-0 bg-hero-pattern opacity-60" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.8fr_0.5fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 inline-flex rounded-full bg-cyan-500/15 px-4 py-2 text-sm text-cyan-200 ring-1 ring-cyan-500/15">
                Portafolio personal — Dark developer style
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Soy Alejo Guerra,
                <span className="block text-cyan-300">Estudiante de Informática y desarrollador en formación</span>
              </h1>
              <p className="mt-6 max-w-2xl text-slate-300">
                Apasionado por la tecnología, con foco en resolver problemas reales y construir productos útiles. Busco oportunidades para crecer como desarrollador, trabajando en proyectos web con experiencia moderna y diseño profesional.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                  Proyectos <FiArrowRight className="ml-2" />
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-800/90 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-100">
                  Contacto
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-slate-700/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-600">
                  Descargar CV
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/40"
            >
              <div className="overflow-hidden rounded-[1.75rem] border border-slate-700/80 bg-slate-900/90 p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-3xl bg-slate-800 px-3 py-2 text-xs uppercase tracking-[0.25em] text-slate-300">Resumen</span>
                  <span className="rounded-3xl bg-cyan-500/15 px-3 py-2 text-xs text-cyan-200">Activa</span>
                </div>
                <p className="text-slate-300">
                  Desarrollo aplicaciones web modernas, sistemas backend y soluciones con bases de datos. Me destaco por mi orden, capacidad de adaptación y compromiso para crear experiencias limpias y funcionales.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-950/80 p-4 ring-1 ring-slate-700/50">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Experiencia</p>
                    <p className="mt-3 text-xl font-semibold text-white">Proyectos reales</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/80 p-4 ring-1 ring-slate-700/50">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Foco</p>
                    <p className="mt-3 text-xl font-semibold text-white">Web / Backend / UI</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mt-16">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-10 shadow-glow backdrop-blur-xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Sobre mí</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Desarrollador en crecimiento con mentalidad estratégica</h2>
              </div>
              <div className="space-y-2 rounded-3xl bg-slate-950/80 p-6 text-sm text-slate-300 ring-1 ring-slate-700/70">
                <p>Adaptable, organizado y orientado a la resolución de problemas complejos.</p>
                <p>Me enfoco en construir soluciones web limpias, funcionales y con experiencia de usuario intuitiva.</p>
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6">
                <h3 className="text-xl font-semibold text-white">¿Qué ofrezco?</h3>
                <p className="mt-4 text-slate-300">Conocimiento en proyectos full-stack, trabajo colaborativo y ganas de aprender nuevas herramientas. Tengo una visión clara de cómo llevar ideas a productos digitales atractivos y sólidos.</p>
              </div>
              <div className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6">
                <h3 className="text-xl font-semibold text-white">Enfoque profesional</h3>
                <ul className="mt-4 space-y-3 text-slate-300">
                  <li>Desarrollo web responsivo y moderno.</li>
                  <li>Optimización de flujo de trabajo.</li>
                  <li>Comunicación clara y entrega puntual.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="mt-16">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Proyectos</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Trabajos destacados</h2>
            </div>
            <p className="max-w-2xl text-slate-400">Proyectos terminados e iniciativas en desarrollo con tecnologías reales de backend, frontend y experiencia de usuario.</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-6 shadow-xl shadow-slate-950/30 backdrop-blur-xl"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Proyecto</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <span className="rounded-2xl bg-slate-800 px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">{project.beta ? 'En curso' : 'Finalizado'}</span>
                </div>
                <p className="text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-2xl bg-slate-800 px-3 py-2 text-xs text-slate-300 transition group-hover:bg-cyan-500/15">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    Vista previa
                  </button>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-cyan-300 transition hover:text-cyan-100"
                  >
                    Ver repositorio
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-16">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-10 shadow-glow backdrop-blur-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Habilidades</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Tecnologías y herramientas</h2>
              </div>
              <p className="max-w-xl text-slate-400">Conozco lenguajes, frameworks y herramientas clave para el desarrollo de aplicaciones web y proyectos técnicos.</p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.label} className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6">
                  <h3 className="text-lg font-semibold text-white">{group.label}</h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-2xl bg-slate-800 px-3 py-2 text-sm text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="education" className="mt-16">
          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-10 shadow-glow backdrop-blur-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Formación</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Educación y certificaciones</h2>
              </div>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6">
                <h3 className="text-xl font-semibold text-white">Escuela Técnica N°36 "Almirante Brown"</h3>
                <p className="mt-3 text-slate-300">Técnico en Computación (2021 – En curso)</p>
              </div>
              <div className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6">
                <h3 className="text-xl font-semibold text-white">CECIE 24 (Villa Ortúzar)</h3>
                <p className="mt-3 text-slate-300">Nivel de inglés B2 certificado, 2023.</p>
              </div>
            </div>
            <div className="mt-10 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6">
              <h3 className="text-xl font-semibold text-white">Cursos y certificaciones</h3>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <p className="font-semibold text-slate-200">CS50 Introduction to Computer Science</p>
                  <p className="mt-2 text-slate-400">En curso</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-200">Talento Tech</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-400">
                    <li>Web Development 1</li>
                    <li>Web Development 2</li>
                    <li>UX/UI Design</li>
                    <li>Unity Game Development (2D & 3D)</li>
                    <li>AI Chatbot Development with Python</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-16">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-10 shadow-glow backdrop-blur-xl">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_0.75fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Contacto</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Hablemos sobre tu próximo proyecto</h2>
                <p className="mt-4 max-w-xl text-slate-400">Estoy disponible para colaborar en proyectos web, aplicaciones y soluciones técnicas. Puedes escribirme por email o visitar mis perfiles para ver más trabajo.</p>
                <div className="mt-8 space-y-4 text-slate-300">
                  <div className="flex items-center gap-3 rounded-3xl bg-slate-950/70 p-4">
                    <FiMail className="text-cyan-300" />
                    <span>Email: guerra.alejoet36@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-3xl bg-slate-950/70 p-4">
                    <FaGithub className="text-cyan-300" />
                    <a href="https://github.com/AlejoGuerraa" target="_blank" rel="noreferrer" className="text-slate-100 transition hover:text-cyan-200">github.com/AlejoGuerraa</a>
                  </div>
                  <div className="flex items-center gap-3 rounded-3xl bg-slate-950/70 p-4">
                    <FaLinkedin className="text-cyan-300" />
                    <a href="https://linkedin.com/in/alejo-guerra-inf" target="_blank" rel="noreferrer" className="text-slate-100 transition hover:text-cyan-200">linkedin.com/in/alejo-guerra-inf</a>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-800/70 bg-slate-950/80 p-8 text-slate-300 shadow-xl shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">¿Listo para empezar?</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Tu próximo colaborador</h3>
                <p className="mt-4">Disponible para propuestas freelance, pasantías y nuevas oportunidades que me permitan seguir aprendiendo y aportando valor.</p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-slate-800/70 bg-slate-950/95 py-6 text-center text-sm text-slate-500">
        © 2026 Alejo Guerra · Diseñado con React, Tailwind y Framer Motion.
      </footer>

      <AnimatePresence>{selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}</AnimatePresence>
    </div>
  )
}

export default App
