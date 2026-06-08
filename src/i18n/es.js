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
      '4 años construyendo productos con React y Node.js · De la pantalla al backend, sin fricción.',
    ctaProjects: 'Ver proyectos',
    ctaCv: 'Ver CV',
    scrollDown: 'Desplazar abajo',
  },

  // About
  about: {
    sectionTitle: 'Sobre mí',
    paragraph1:
      'Soy un desarrollador Full Stack con más de 4 años de experiencia construyendo aplicaciones web modernas. Me especializo en el ecosistema JavaScript, tanto en el frontend con React.js como en el backend con Node.js.',
    paragraph2:
      'Trabajo con bases de datos relacionales como PostgreSQL y MySQL, y aplico buenas prácticas de desarrollo: código limpio, arquitecturas escalables y flujos de trabajo colaborativos con Git.',
    paragraph3:
      'Actualmente lidero un equipo de desarrollo en PhinxLab, donde participé en la construcción de una plataforma educativa utilizada por más de 300.000 estudiantes en escuelas de Buenos Aires.',
    location: 'Buenos Aires, Argentina',
    email: 'n.lozaspataro@gmail.com',
    phone: '+51 911 5622 6313',
  },

  // Experience
  experience: {
    sectionTitle: 'Experiencia',
    present: 'Actualidad',
    jobs: [
      {
        company: 'PhinxLab',
        role: 'Full-stack Developer',
        period: 'Mayo 2023 - Actualidad',
        stack: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'TypeORM', 'MaterialUI', 'Git', 'CircleCI'],
        description: 'Lidero un equipo de 5 desarrolladores en el desarrollo y mantenimiento de una plataforma educativa con más de 300.000 usuarios activos en escuelas de Buenos Aires. Estoy a cargo de la arquitectura del sistema en frontend y backend, usando TypeScript, React y Node.js con TypeORM. Además, lideré la renovación completa de la UI, logrando una mejora significativa en la experiencia de usuario y la accesibilidad del producto.',
      },
      {
        company: 'PhinxLab',
        role: 'Frontend Developer',
        period: 'Enero 2023 - Abril 2023',
        stack: ['React Native', 'PostgreSQL', 'MaterialUI', 'Git', 'CircleCI'],
        description: 'Desarrollé funcionalidades mobile para CIS Express, una de las redes multiservicio más grandes de Latinoamérica. Trabajé con React Native para garantizar una experiencia fluida y consistente en iOS y Android, integrando el sistema con el backend existente.',
      },
      {
        company: 'PhinxLab',
        role: 'Frontend Developer',
        period: 'Mayo 2022 - Diciembre 2022',
        stack: ['React Native', 'Next.js', 'PostgreSQL', 'MaterialUI'],
        description: 'Desarrollé el sitio web oficial de PhinxLab y su back office administrativo. Utilicé Next.js para optimizar el rendimiento y el SEO del sitio público, y React Native para las interfaces del panel interno.',
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
    backend: ['Node.js', 'TypeORM', 'REST APIs'],
    databases: ['PostgreSQL', 'MySQL'],
    tools: ['Git', 'GitHub', 'Cursor', 'Claude', 'Jira', 'Postman', 'CircleCI'],
    education: 'Educación',
    eduItems: [
      {
        institution: 'Coderhouse',
        course: 'JavaScript y Desarrollo Web',
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
          'Plataforma educativa a gran escala para escuelas de Buenos Aires. +300.000 usuarios activos. Stack: React, Node.js, PostgreSQL, TypeORM.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
        status: 'professional',
      },
      {
        title: 'CIS Express Mobile',
        description:
          'Aplicación mobile para una de las redes multiservicio más grandes de Latinoamérica. Desarrollo con React Native.',
        tags: ['React Native', 'MaterialUI', 'CircleCI'],
        status: 'professional',
      },
      {
        title: 'Sitio Corporativo PhinxLab',
        description:
          'Sitio web oficial y back office administrativo desarrollado con Next.js y React Native.',
        tags: ['Next.js', 'React Native', 'MaterialUI'],
        status: 'professional',
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
  },

  // CV Modal
  cv: {
    title: 'Currículum Vitae',
    close: 'Cerrar',
    print: 'Imprimir / Descargar PDF',
    personalInfo: 'Información personal',
    profile: 'Perfil profesional',
    profileText:
      'Desarrollador Full Stack con 4 años de experiencia en desarrollo de aplicaciones web. Especializado en Node.js y React.js. Conocimiento sólido en bases de datos relacionales como MySQL y PostgreSQL, con enfoque en buenas prácticas de desarrollo y trabajo en equipo.',
    experience: 'Experiencia laboral',
    skills: 'Tecnologías',
    tools: 'Herramientas',
    education: 'Educación',
  },
}

export default es
