const es = {
  // Navbar
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    skills: 'Habilidades',
    projects: 'Proyectos',
    contact: 'Contacto',
    viewCv: 'Ver CV',
  },

  // Hero
  hero: {
    greeting: 'Hola, soy',
    name: 'Nicolás Loza Spataro',
    title: 'Full Stack Developer',
    headline: 'Transformo ideas en\naplicaciones web\nque escalan.',
    subtitle:
      '4 años escalando productos digitales de impacto real con React, Node.js y TypeScript.',
    ctaProjects: 'Ver experiencia',
    ctaCv: 'Ver CV',
    scrollDown: 'Desplazar abajo',
  },

  // About
  about: {
    sectionTitle: 'Sobre mí',
    paragraph1:
      'Soy Full Stack Developer con más de 4 años de experiencia construyendo y escalando productos digitales de impacto real. Me especializo en React, Node.js y TypeScript, con sólido manejo de PostgreSQL y experiencia en el ciclo completo de desarrollo: desde el diseño de arquitectura hasta el despliegue en producción.',
    paragraph2:
      'Actualmente lidero un equipo de 5 desarrolladores en PhinxLab, contribuyendo a una plataforma educativa utilizada por más de 300.000 usuarios en las escuelas de Buenos Aires.',
    location: 'Buenos Aires, Argentina',
    statYears: 'años de experiencia',
    statUsers: 'usuarios impactados',
    statDevs: 'devs a cargo',
    statFullStack: 'Frontend · Backend · DB',
  },

  // Experience
  experience: {
    sectionTitle: 'Experiencia',
    present: 'Actualidad',
    jobs: [
      {
        company: 'PhinxLab',
        role: 'Full-stack Developer',
        period: 'Mayo 2023 – Actualidad',
        stack: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'TypeORM', 'MaterialUI', 'Git', 'CircleCI'],
        description:
          'Lidero un equipo de 5 desarrolladores en el diseño, desarrollo y despliegue continuo de funcionalidades para una plataforma educativa usada por más de 300.000 usuarios en las escuelas de Buenos Aires. Lideré la renovación completa de la interfaz de usuario, a cargo de toda la implementación desde la arquitectura frontend hasta el despliegue en producción, logrando una experiencia más moderna, accesible e intuitiva. Coordino el ciclo completo del equipo: planificación, code reviews, resolución de errores críticos y despliegues, garantizando continuidad operativa para una plataforma de alto impacto social.',
      },
      {
        company: 'PhinxLab',
        role: 'Frontend Developer',
        period: 'Enero 2023 – Abril 2023',
        stack: ['React Native', 'PostgreSQL', 'MaterialUI', 'Git', 'CircleCI'],
        description:
          'Desarrollé funcionalidades mobile en React Native para CIS Express, una de las redes multiservicio más grandes de Latinoamérica, con servicios de envío de dinero, logística y pagos desde dispositivos móviles. Implementé nuevas funcionalidades contribuyendo a una experiencia de usuario más fluida y confiable. Trabajé en estrecha colaboración con los equipos de diseño y backend para garantizar interfaces intuitivas, accesibles y alineadas con los estándares de calidad del producto.',
      },
      {
        company: 'PhinxLab',
        role: 'Frontend Developer',
        period: 'Mayo 2022 – Diciembre 2022',
        stack: ['Next.js', 'Node.js', 'MaterialUI', 'Git', 'CircleCI'],
        description:
          'Formé parte del equipo de desarrollo (TL + 2 devs) encargado del rediseño y desarrollo completo del sitio web oficial de la empresa, reemplazando el sitio anterior por una plataforma moderna construida con Next.js. Colaboré con el equipo de UX/UI en la definición de la nueva arquitectura de información, estructura visual y mejores prácticas de accesibilidad. Desarrollé el back office interno de la plataforma con foco en usabilidad para usuarios no técnicos, facilitando la gestión eficiente del sistema.',
      },
    ],
  },

  // Skills
  skills: {
    sectionTitle: 'Habilidades',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Bases de datos',
      tools: 'Herramientas',
    },
    frontend: ['React.js', 'React Native', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Material UI', 'Bootstrap'],
    backend: ['Node.js', 'Express.js', 'TypeORM', 'REST APIs'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL'],
    tools: ['Git', 'GitHub', 'Cursor', 'Claude', 'Jira', 'Postman', 'CircleCI'],
    education: 'Educación',
    eduItems: [
      {
        institution: 'Coderhouse',
        course: 'Programación Backend I: Desarrollo Avanzado de Backend',
        period: 'Ene 2026 – Mar 2026',
      },
      {
        institution: 'Coderhouse',
        course: 'JavaScript',
        period: 'Jul 2022 – Oct 2022',
      },
      {
        institution: 'Coderhouse',
        course: 'Desarrollo Web',
        period: 'Jul 2022 – Oct 2022',
      },
    ],
  },

  // Projects
  projects: {
    sectionTitle: 'Proyectos',
    comingSoon: 'Próximamente',
    comingSoonDesc: 'Estoy preparando esta sección con mis proyectos más destacados. ¡Volvé pronto!',
    viewCode: 'Ver código',
    viewDemo: 'Ver demo',
    cards: [
      {
        title: 'aprendeBA',
        description:
          'Plataforma educativa a gran escala para escuelas de Buenos Aires. +300.000 usuarios activos. Stack: TypeScript, React, Node.js, PostgreSQL, TypeORM.',
        tags: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'TypeORM'],
        status: 'professional',
      },
      {
        title: 'CIS Express Mobile',
        description:
          'Aplicación mobile para CIS Express, una de las redes multiservicio más grandes de Latinoamérica, con servicios de envío de dinero, logística y pagos.',
        tags: ['React Native', 'PostgreSQL', 'MaterialUI', 'CircleCI'],
        status: 'professional',
        image: 'projects/cis-express.png',
        imagePadding: '20px',
      },
      {
        title: 'Sitio Corporativo PhinxLab',
        description:
          'Rediseño y desarrollo completo del sitio web oficial de PhinxLab con Next.js, más back office interno para gestión operativa.',
        tags: ['Next.js', 'Node.js', 'MaterialUI'],
        status: 'professional',
        image: 'projects/phinxlab.png',
        imagePadding: '4px',
      },
      {
        title: 'Plataforma Inmobiliaria',
        description:
          'Plataforma web full-stack para gestión y publicación de propiedades inmobiliarias. Incluye listado de propiedades con filtros, detalle de cada unidad y formulario de contacto con envío de emails.',
        tags: ['React', 'MUI', 'Express.js', 'Prisma', 'Node.js', 'Zod'],
        status: 'personal',
        repo: 'https://github.com/nicolasloza/ap-web',
        demo: 'https://armando-pepe.vercel.app/',
      },
    ],
  },

  // Contact
  contact: {
    sectionTitle: 'Contacto',
    subtitle: '¿Tenés un proyecto en mente o querés trabajar juntos? ¡Escribime!',
    email: 'Email',
    phone: 'Teléfono',
    location: 'Ubicación',
    linkedin: 'LinkedIn',
    locationValue: 'Buenos Aires, Argentina',
    form: {
      title: 'Enviame un mensaje',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar',
      sending: 'Enviando...',
      successTitle: '¡Mensaje enviado!',
      successText: 'Gracias por escribirme. Te respondo a la brevedad.',
      sendAnother: 'Enviar otro mensaje',
      error: 'Hubo un error al enviar. Intentá de nuevo o escribime directo al email.',
      emailError: 'Ingresá un email válido.',
    },
  },

  // CV Modal
  cv: {
    title: 'Currículum Vitae',
    close: 'Cerrar',
    print: 'Descargar',
    personalInfo: 'Información personal',
    profile: 'Perfil profesional',
    profileText:
      'Full Stack Developer con más de 4 años de experiencia construyendo y escalando productos digitales de impacto real. Me especializo en React, Node.js y TypeScript, con sólido manejo de PostgreSQL y experiencia en el ciclo completo de desarrollo: desde el diseño de arquitectura hasta el despliegue en producción. Actualmente lidero un equipo de 5 desarrolladores en PhinxLab, donde contribuyo al desarrollo de una plataforma educativa utilizada por más de 300.000 usuarios en las escuelas de Buenos Aires.',
    experience: 'Experiencia laboral',
    skills: 'Tecnologías',
    tools: 'Herramientas',
    education: 'Educación',
  },
}

export default es
