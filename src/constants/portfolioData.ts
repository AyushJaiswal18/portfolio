export interface PersonalInfo {
  name: string
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  profileImage: string
  summary: string
}

export interface Education {
  institution: string
  degree: string
  major: string
  duration: string
  cgpa: string
  status: string
}

export interface Skill {
  name: string
  icon: string
}

export interface GitHubRepo {
  label: string
  url: string
}

export interface Project {
  title: string
  description: string
  tech: string[]
  highlights: string[]
  github?: string | GitHubRepo[]
  demo?: string
  image: string
}

export interface Experience {
  title: string
  organization: string
  duration: string
  type: string
  achievements: string[]
}

export interface Achievement {
  type: 'Patent' | 'Award'
  title: string
  applicationNumber?: string
  date?: string
  count?: number
  organization?: string
}

export interface SocialLink {
  name: string
  url: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  intro: string
}

export const personalInfo: PersonalInfo = {
  name: 'Ayush Jaiswal',
  firstName: 'Ayush',
  lastName: 'Jaiswal',
  email: 'ayushjaiswalnb@gmail.com',
  phone: '+91-9793839766',
  location: 'Jaipur, Rajasthan',
  profileImage:
    'https://media.licdn.com/dms/image/v2/D5603AQFuR5-DB0WFbg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715371221215?e=1765411200&v=beta&t=92aIUghNNt79hndq4T0XBChguKuGyG-oeRhHmbUEJYU',
  summary:
    'Full-Stack Web Developer proficient in MERN stack, Python, JavaScript, and DevOps with hands-on experience in AI and autonomous agent development. Proven ability to build scalable web applications and automate workflows.',
}

export const education: Education = {
  institution: 'Manipal University Jaipur',
  degree: 'Bachelor of Technology',
  major: 'Computer and Communication Engineering',
  duration: '2022 - 2026',
  cgpa: '8.49/10',
  status: 'expected',
}

export const heroData = {
  greeting: 'Hi, my name is',
  title: 'I build things for the web.',
  description:
    'Full-Stack Web Developer proficient in MERN stack, Python, JavaScript, and DevOps with hands-on experience in AI and autonomous agent development. I build scalable web applications and automate workflows.',
  codeBlock: {
    name: 'Ayush Jaiswal',
    role: 'Full Stack Developer',
    location: 'Jaipur, Rajasthan',
    skills: ['MERN', 'Python', 'DevOps'],
    passion: 'Building scalable applications',
  },
}

export const topSkills: Skill[] = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Python', icon: '🐍' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Express.js', icon: '🚂' },
]

export const recentTechnologies = [
  'React & Next.js',
  'Node.js & Express',
  'Python & AI/ML',
  'MongoDB & PostgreSQL',
  'AWS & Docker',
  'TypeScript & JavaScript',
]

export const projects: Project[] = [
  {
    title: 'MyGradway',
    description:
      'Online Job Listing Platform with asynchronous priority-based email system, Razorpay payments, JWT authentication, and comprehensive admin analytics dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Redis', 'TypeScript', 'Resend', 'Loki', 'Prometheus'],
    highlights: [
      'Architected full-stack career platform with asynchronous priority-based email system using Redis and BullMQ',
      'Integrated Razorpay payments, JWT authentication, Cloudinary uploads, and admin analytics dashboard',
      'Implemented observability with Winston/Loki logging and Prometheus metrics for API monitoring',
    ],
    github: [
      { label: 'Frontend', url: 'https://github.com/AyushJaiswal18/connect-career-grow' },
      { label: 'Backend', url: 'https://github.com/AyushJaiswal18/Career-Connect-Backend' },
    ],
    demo: 'https://mygradway.com/',
    image: 'mygradway',
  },
  {
    title: 'DocuAI',
    description:
      'AI Code Documentation Generator - Autonomous AI agent that analyzes codebases and generates comprehensive documentation automatically.',
    tech: ['Python', 'LangChain', 'Langsmith', 'OpenAI API', 'AST Parser'],
    highlights: [
      'Built autonomous AI agent that analyzes codebases and generates comprehensive documentation automatically',
      'Executed AST parsing to extract function signatures and code structure across Python and JavaScript',
      'Developed CLI tool with multi-language support, identifying code smells and suggesting improvements',
    ],
    github: 'https://github.com/AyushJaiswal18/docuai',
    demo: 'https://docuai.builtwithayush.tech/',
    image: 'docuai',
  },
  {
    title: 'Orca',
    description:
      'Cloud VM Platform - Built cloud platform launching containerized VMs across multiple AWS regions with browser access.',
    tech: ['Node.js', 'React', 'AWS (ECS, EC2, SNS)', 'Kasm Workspaces', 'Docker'],
    highlights: [
      'Built cloud platform launching containerized VMs across multiple AWS regions with browser access',
      'Integrated AWS ECS orchestration, SNS webhooks for real-time updates, and RESTful API architecture',
      'Developed full-stack interface for VM lifecycle management with JWT authentication and multi-region support',
    ],
    github: 'https://github.com/AyushJaiswal18/orca',
    demo: 'https://orca.builtwithayush.tech/',
    image: 'orca',
  },
]

export const experiences: Experience[] = [
  {
    title: 'Technical Lead',
    organization: 'Startup Weekend Jaipur',
    duration: 'May 2024 - Oct 2024',
    type: 'Academic',
    achievements: [
      'Led backend development for 150+ participants using Node.js, Express.js, and MongoDB',
      'Engineered live polling and team formation system processing 500+ submissions with 99% uptime',
      'Deployed scalable backend infrastructure on AWS with Docker, reducing deployment time by 40%',
    ],
  },
  {
    title: 'Developer - Blood Donation Camp Portal',
    organization: 'Manipal University Jaipur',
    duration: 'Nov 2024',
    type: 'Academic',
    achievements: [
      'Developed web portal managing 2000+ donor registrations across 10 hospitals with 95% data accuracy',
      'Architected real-time dashboard displaying blood statistics using Socket.io, reducing manual updates by 100%',
      'Automated certificate generation and validation system, processing 1800+ certificates in under 8 hours',
    ],
  },
]

export const achievements: Achievement[] = [
  {
    type: 'Patent',
    title: 'Bluetooth-Enabled Stethoscope with Integrated Heart Rate Monitor',
    applicationNumber: '202411094555',
    date: 'Dec 2024',
  },
  {
    type: 'Award',
    title: "Dean's Excellence Award in Academics",
    count: 3,
    organization: 'Manipal University Jaipur',
    date: '',
  },
]

export const contactInfo: ContactInfo = {
  email: 'ayushjaiswalnb@gmail.com',
  phone: '+91-9793839766',
  location: 'Jaipur, Rajasthan',
  intro:
    "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
}

export const socialLinks: Omit<SocialLink, 'icon'>[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/AyushJaiswal18',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ayushjaiswal18/',
  },
]

