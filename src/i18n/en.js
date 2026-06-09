const en = {
  // Navbar
  nav: {
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    viewCv: 'View CV',
  },

  // Hero
  hero: {
    greeting: "Hi, I'm",
    name: 'Nicolás Loza Spataro',
    title: 'Full Stack Developer',
    headline: 'I turn ideas into\nweb applications\nthat scale.',
    subtitle:
      '4 years scaling real-impact digital products with React, Node.js & TypeScript.',
    ctaProjects: 'View experience',
    ctaCv: 'View CV',
    scrollDown: 'Scroll down',
  },

  // About
  about: {
    sectionTitle: 'About me',
    paragraph1:
      'I am a Full Stack Developer with over 4 years of experience building and scaling real-impact digital products. I specialize in React, Node.js and TypeScript, with solid PostgreSQL knowledge and experience across the full development cycle: from architecture design to production deployment.',
    paragraph2:
      'I currently lead a team of 5 developers at PhinxLab, contributing to an educational platform used by more than 300,000 users across schools in Buenos Aires.',
    location: 'Buenos Aires, Argentina',
    statYears: 'years of experience',
    statUsers: 'users impacted',
    statDevs: 'devs managed',
    statFullStack: 'Frontend · Backend · DB',
  },

  // Experience
  experience: {
    sectionTitle: 'Experience',
    present: 'Present',
    jobs: [
      {
        company: 'PhinxLab',
        role: 'Full-stack Developer',
        period: 'May 2023 – Present',
        stack: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'TypeORM', 'MaterialUI', 'Git', 'CircleCI'],
        description:
          'I lead a team of 5 developers in the design, development and continuous deployment of features for an educational platform used by over 300,000 users across schools in Buenos Aires. I led a full UI overhaul, owning the entire implementation from frontend architecture to production deployment, delivering a more modern, accessible and intuitive experience. I coordinate the full development cycle: planning, code reviews, critical bug resolution and deployments, ensuring operational continuity for a high social-impact platform.',
      },
      {
        company: 'PhinxLab',
        role: 'Frontend Developer',
        period: 'January 2023 – April 2023',
        stack: ['React Native', 'PostgreSQL', 'MaterialUI', 'Git', 'CircleCI'],
        description:
          'Developed mobile features in React Native for CIS Express, one of the largest multi-service networks in Latin America, offering money transfers, logistics and payments from mobile devices. Implemented new features contributing to a smoother and more reliable user experience. Worked closely with design and backend teams to ensure intuitive, accessible interfaces aligned with the product quality standards.',
      },
      {
        company: 'PhinxLab',
        role: 'Frontend Developer',
        period: 'May 2022 – December 2022',
        stack: ['Next.js', 'Node.js', 'MaterialUI', 'Git', 'CircleCI'],
        description:
          "Was part of the development team (TL + 2 devs) responsible for the full redesign and rebuild of the company's official website, replacing the previous site with a modern platform built in Next.js. Collaborated with the UX/UI team on information architecture, visual structure and accessibility best practices. Built the internal back office platform with a focus on usability for non-technical users, enabling efficient system management by the operations team.",
      },
    ],
  },

  // Skills
  skills: {
    sectionTitle: 'Skills',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Databases',
      tools: 'Tools',
    },
    frontend: ['React.js', 'React Native', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Material UI', 'Bootstrap'],
    backend: ['Node.js', 'Express.js', 'TypeORM', 'REST APIs'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL'],
    tools: ['Git', 'GitHub', 'Cursor', 'Claude', 'Jira', 'Postman', 'CircleCI'],
    education: 'Education',
    eduItems: [
      {
        institution: 'Coderhouse',
        course: 'Backend Programming I: Advanced Backend Development',
        period: 'Jan 2026 – Mar 2026',
      },
      {
        institution: 'Coderhouse',
        course: 'JavaScript',
        period: 'Jul 2022 – Oct 2022',
      },
      {
        institution: 'Coderhouse',
        course: 'Web Development',
        period: 'Jul 2022 – Oct 2022',
      },
    ],
  },

  // Projects
  projects: {
    sectionTitle: 'Projects',
    comingSoon: 'Coming Soon',
    comingSoonDesc: "I'm preparing this section with my most outstanding projects. Check back soon!",
    viewCode: 'View code',
    viewDemo: 'Live demo',
    cards: [
      {
        title: 'aprendeBA',
        description:
          'Large-scale educational platform for schools in Buenos Aires. 300,000+ active users. Stack: TypeScript, React, Node.js, PostgreSQL, TypeORM.',
        tags: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'TypeORM'],
        status: 'professional',
      },
      {
        title: 'CIS Express Mobile',
        description:
          "Mobile app for CIS Express, one of Latin America's largest multi-service networks, offering money transfers, logistics and mobile payments.",
        tags: ['React Native', 'PostgreSQL', 'MaterialUI', 'CircleCI'],
        status: 'professional',
        image: 'projects/cis-express.png',
        imagePadding: '20px',
      },
      {
        title: 'PhinxLab Corporate Site',
        description:
          "Full redesign and rebuild of PhinxLab's official website with Next.js, plus an internal back office for operational management.",
        tags: ['Next.js', 'Node.js', 'MaterialUI'],
        status: 'professional',
        image: 'projects/phinxlab.png',
        imagePadding: '4px',
      },
      {
        title: 'Real Estate Platform',
        description:
          'Full-stack web platform for managing and publishing real estate listings. Includes property listing with filters, unit detail pages, and a contact form with email delivery.',
        tags: ['React', 'MUI', 'Express.js', 'Prisma', 'Node.js', 'Zod'],
        status: 'personal',
        repo: 'https://github.com/nicolasloza/ap-web',
        demo: 'https://armando-pepe.vercel.app/',
      },
    ],
  },

  // Contact
  contact: {
    sectionTitle: 'Contact',
    subtitle: 'Have a project in mind or want to work together? Reach out!',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    linkedin: 'LinkedIn',
    locationValue: 'Buenos Aires, Argentina',
    form: {
      title: 'Send me a message',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      successTitle: 'Message sent!',
      successText: "Thanks for reaching out. I'll get back to you shortly.",
      sendAnother: 'Send another message',
      error: 'Something went wrong. Please try again or email me directly.',
      emailError: 'Please enter a valid email address.',
    },
  },

  // CV Modal
  cv: {
    title: 'Curriculum Vitae',
    close: 'Close',
    print: 'Download',
    personalInfo: 'Personal information',
    profile: 'Professional profile',
    profileText:
      'Full Stack Developer with over 4 years of experience building and scaling real-impact digital products. Specialized in React, Node.js and TypeScript, with solid PostgreSQL knowledge and experience across the full development cycle: from architecture design to production deployment. Currently leading a team of 5 developers at PhinxLab, contributing to an educational platform used by over 300,000 users across schools in Buenos Aires.',
    experience: 'Work experience',
    skills: 'Technologies',
    tools: 'Tools',
    education: 'Education',
  },
}

export default en
