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
      '4 years shipping products with React & Node.js · From UI to backend, seamlessly.',
    ctaProjects: 'View projects',
    ctaCv: 'View CV',
    scrollDown: 'Scroll down',
  },

  // About
  about: {
    sectionTitle: 'About me',
    paragraph1:
      'I am a Full Stack Developer with over 4 years of experience building modern web applications. I specialize in the JavaScript ecosystem — React.js on the frontend and Node.js on the backend.',
    paragraph2:
      'I work with relational databases such as PostgreSQL and MySQL, and I apply development best practices: clean code, scalable architectures, and collaborative Git workflows.',
    paragraph3:
      'I currently lead a development team at PhinxLab, where I participated in building an educational platform used by more than 300,000 students across schools in Buenos Aires.',
    location: 'Buenos Aires, Argentina',
    email: 'n.lozaspataro@gmail.com',
    phone: '+51 911 5622 6313',
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
        description: 'I lead a team of 5 developers building and maintaining an educational platform with over 300,000 active users across schools in Buenos Aires. I own the system architecture on both frontend and backend, using TypeScript, React, and Node.js with TypeORM. I also led a full UI overhaul that significantly improved the user experience and accessibility of the product.',
      },
      {
        company: 'PhinxLab',
        role: 'Frontend Developer',
        period: 'January 2023 – April 2023',
        stack: ['React Native', 'PostgreSQL', 'MaterialUI', 'Git', 'CircleCI'],
        description: 'Developed mobile features for CIS Express, one of the largest multi-service networks in Latin America. I worked with React Native to deliver a smooth, consistent experience on iOS and Android, integrating the app with the existing backend.',
      },
      {
        company: 'PhinxLab',
        role: 'Frontend Developer',
        period: 'May 2022 – December 2022',
        stack: ['React Native', 'Next.js', 'PostgreSQL', 'MaterialUI'],
        description: "Built PhinxLab's official website and its administrative back office. I used Next.js to optimize public-site performance and SEO, and React Native for the internal panel interfaces.",
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
    backend: ['Node.js', 'TypeORM', 'REST APIs'],
    databases: ['PostgreSQL', 'MySQL'],
    tools: ['Git', 'GitHub', 'Cursor', 'Claude', 'Jira', 'Postman', 'CircleCI'],
    education: 'Education',
    eduItems: [
      {
        institution: 'Coderhouse',
        course: 'JavaScript & Web Development',
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
          'Large-scale educational platform for schools in Buenos Aires. 300,000+ active users. Stack: React, Node.js, PostgreSQL, TypeORM.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
        status: 'professional',
      },
      {
        title: 'CIS Express Mobile',
        description:
          "Mobile application for one of Latin America's largest multi-service networks, built with React Native.",
        tags: ['React Native', 'MaterialUI', 'CircleCI'],
        status: 'professional',
      },
      {
        title: 'PhinxLab Corporate Site',
        description:
          "Official company website and administrative back office built with Next.js and React Native.",
        tags: ['Next.js', 'React Native', 'MaterialUI'],
        status: 'professional',
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
  },

  // CV Modal
  cv: {
    title: 'Curriculum Vitae',
    close: 'Close',
    print: 'Print / Download PDF',
    personalInfo: 'Personal information',
    profile: 'Professional profile',
    profileText:
      'Full Stack Developer with 4 years of experience building web applications. Specialized in Node.js and React.js. Strong knowledge of relational databases such as MySQL and PostgreSQL, with a focus on development best practices and teamwork.',
    experience: 'Work experience',
    skills: 'Technologies',
    tools: 'Tools',
    education: 'Education',
  },
}

export default en
