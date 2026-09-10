export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  category: "Full-Stack Web" | "AI & Health Tech";
  metrics?: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  accentColor: string;
  glowColor: string;
  featured: boolean;
  architectureHighlights: string[];
}

export interface SkillItem {
  name: string;
  category: "Programming" | "Web Development" | "Computer Science" | "AI / ML" | "Tools & Platforms";
  level: "Advanced" | "Proficient" | "Core Competency";
  description: string;
  icon: string;
  tags: string[];
  orbitRadius?: number;
  orbitSpeed?: number;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  badge: string;
  highlights: string[];
  techSkills: string[];
  icon: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  focus: string[];
  credentialUrl?: string;
  badgeColor: string;
  description: string;
  topics: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  highlight: string;
  issuer: string;
  category: string;
  icon: string;
  details: string[];
  badgeColor: string;
}

export const PERSONAL_INFO = {
  name: "Satyam Raj",
  shortName: "SR",
  location: "Indore, Madhya Pradesh, India",
  headline: "Computer Science Engineer | AI/ML Engineer | Problem Solver",
  roles: [
    "AI/ML Engineer",
    "Computer Science Engineer",
    "Machine Learning & GenAI Builder",
    "Problem Solver",
  ],
  bioIntro:
    "I’m a Computer Science student passionate about engineering intelligent AI/ML systems, building modern software, solving complex algorithmic challenges, and turning ideas into real-world products.",
  heroDescription:
    "Engineering intelligent AI systems, building modern software architectures, and solving challenging algorithmic problems.",
  aboutDetailed:
    "I'm a B.Tech Computer Science student at SAGE University, Indore, focused on Artificial Intelligence, Machine Learning, software development, and algorithmic problem solving. I enjoy transforming ideas into intelligent practical applications and continuously pushing my technical skills through AI engineering, cloud certifications, and technical community leadership.",
  education: {
    degree: "B.Tech Computer Science",
    institution: "SAGE University, Indore",
    period: "2025–2029",
    status: "Undergraduate",
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/satyam-raj-a13a75385/",
    github: "https://github.com/rajsatyamraj03-collab",
    leetcode: "https://leetcode.com/u/2529UG023722/",
    email: "rajsatyamraj03@gmail.com",
  },
  stats: [
    { label: "Major Projects", value: 2, suffix: "+" },
    { label: "Google Skill Badges", value: 65, suffix: "+" },
    { label: "Microsoft Badges", value: 30, suffix: "+" },
    { label: "Microsoft Trophies", value: 4, suffix: "" },
  ],
};

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  {
    name: "C",
    category: "Programming",
    level: "Core Competency",
    description: "Low-level systems programming, memory management, pointers, and performance-critical algorithms.",
    icon: "Code2",
    tags: ["Systems", "Memory", "Pointers", "Algorithms"],
  },
  {
    name: "C++",
    category: "Programming",
    level: "Proficient",
    description: "Object-oriented programming, STL containers, competitive coding, and high-performance computation.",
    icon: "Cpu",
    tags: ["STL", "OOP", "DSA", "Templates"],
  },
  {
    name: "Java",
    category: "Programming",
    level: "Proficient",
    description: "Enterprise software architecture, OOP design patterns, collections framework, and multi-threading.",
    icon: "Coffee",
    tags: ["OOP", "Collections", "Design Patterns", "JVM"],
  },
  {
    name: "Python",
    category: "Programming",
    level: "Proficient",
    description: "AI/ML scripting, data manipulation, automation, REST API integration, and algorithm development.",
    icon: "FileCode",
    tags: ["AI/ML", "Scripting", "Automation", "NumPy"],
  },

  // Web Development
  {
    name: "React JS",
    category: "Web Development",
    level: "Proficient",
    description: "Component lifecycle, state hooks, virtual DOM, responsive UI architecture, and modular web apps.",
    icon: "Atom",
    tags: ["Components", "Hooks", "Virtual DOM", "SPA"],
  },
  {
    name: "JavaScript",
    category: "Web Development",
    level: "Proficient",
    description: "ES6+ syntax, asynchronous programming (Promises/Async-Await), DOM manipulation, and modern web APIs.",
    icon: "Zap",
    tags: ["ES6+", "Async/Await", "DOM", "Events"],
  },
  {
    name: "HTML5",
    category: "Web Development",
    level: "Advanced",
    description: "Semantic web structure, accessibility (a11y), responsive canvas layouts, and SEO best practices.",
    icon: "Layout",
    tags: ["Semantic HTML", "Accessibility", "SEO"],
  },
  {
    name: "CSS3",
    category: "Web Development",
    level: "Advanced",
    description: "Flexbox, Grid systems, keyframe animations, glassmorphic styling, and responsive media queries.",
    icon: "Palette",
    tags: ["Flexbox", "Grid", "Animations", "Glassmorphism"],
  },

  // Computer Science
  {
    name: "Data Structures",
    category: "Computer Science",
    level: "Proficient",
    description: "Arrays, Linked Lists, Stacks, Queues, Binary Trees, Graphs, Hash Maps, and Heaps.",
    icon: "Network",
    tags: ["Trees", "Graphs", "Hash Maps", "Heaps"],
  },
  {
    name: "Algorithms",
    category: "Computer Science",
    level: "Proficient",
    description: "Searching, sorting, recursion, dynamic programming, greedy methods, and backtracking.",
    icon: "Binary",
    tags: ["Dynamic Programming", "Greedy", "Graph Traversal"],
  },
  {
    name: "Object-Oriented Programming (OOP)",
    category: "Computer Science",
    level: "Advanced",
    description: "Encapsulation, inheritance, polymorphism, abstraction, and clean architectural principles.",
    icon: "Box",
    tags: ["Encapsulation", "Inheritance", "Polymorphism"],
  },
  {
    name: "Problem Solving",
    category: "Computer Science",
    level: "Advanced",
    description: "Algorithmic thinking, edge-case optimization, and competitive coding logic.",
    icon: "Terminal",
    tags: ["LeetCode", "HackerRank", "Logic", "Optimization"],
  },
  {
    name: "Time & Space Complexity",
    category: "Computer Science",
    level: "Proficient",
    description: "Big-O notation analysis, computational efficiency tradeoffs, and memory footprint profiling.",
    icon: "Timer",
    tags: ["Big-O", "Asymptotic Analysis", "Profiling"],
  },

  // AI / ML
  {
    name: "Artificial Intelligence",
    category: "AI / ML",
    level: "Proficient",
    description: "Heuristic search, decision trees, intelligent agents, and neural network foundations.",
    icon: "Brain",
    tags: ["Neural Networks", "Intelligent Agents", "Heuristics"],
  },
  {
    name: "Machine Learning",
    category: "AI / ML",
    level: "Proficient",
    description: "Supervised and unsupervised learning, regression, classification, and model evaluation metrics.",
    icon: "Sparkles",
    tags: ["Supervised Learning", "Classification", "Evaluation"],
  },
  {
    name: "Generative AI",
    category: "AI / ML",
    level: "Proficient",
    description: "LLM architectures, prompt engineering, Retrieval-Augmented Generation (RAG), and AI workflows.",
    icon: "Wand2",
    tags: ["LLMs", "Prompt Engineering", "RAG", "Embeddings"],
  },
  {
    name: "AI Fundamentals",
    category: "AI / ML",
    level: "Advanced",
    description: "Core mathematical foundations, gradient descent, feature extraction, and cloud AI services.",
    icon: "Activity",
    tags: ["Optimization", "Vectors", "Feature Engineering"],
  },

  // Tools & Platforms
  {
    name: "GitHub",
    category: "Tools & Platforms",
    level: "Advanced",
    description: "Git version control, collaborative branching, pull requests, CI/CD actions, and repo management.",
    icon: "Github",
    tags: ["Git", "Version Control", "Collaboration", "CI/CD"],
  },
  {
    name: "Oracle Cloud (OCI)",
    category: "Tools & Platforms",
    level: "Proficient",
    description: "Oracle Cloud Infrastructure compute instances, AI services, identity access management, and cloud architecture.",
    icon: "Cloud",
    tags: ["OCI", "Cloud Compute", "AI Services", "IAM"],
  },
  {
    name: "Google Developer Tools",
    category: "Tools & Platforms",
    level: "Advanced",
    description: "Google Cloud Platform tools, Chrome DevTools profiling, Lighthouse auditing, and SDKs.",
    icon: "Flame",
    tags: ["GCP", "DevTools", "Lighthouse", "Web Vitals"],
  },
  {
    name: "HackerRank",
    category: "Tools & Platforms",
    level: "Advanced",
    description: "Verified problem-solving evaluations, algorithmic challenges, and technical assessments.",
    icon: "Award",
    tags: ["Certified", "Problem Solving", "Assessments"],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "job-junction",
    title: "Job Junction",
    subtitle: "Job Portal Platform",
    tagline: "Connecting ambitious talent with top career opportunities through intelligent filtering and modern UI.",
    description:
      "An interactive job portal built using React JS, HTML, CSS, and JavaScript, designed to simplify job discovery through search, filtering, and company listings.",
    longDescription:
      "Job Junction is an end-to-end frontend job portal application engineered for seamless candidate discovery. It solves the friction of traditional job boards through rapid instant filtering, categorical grouping, dynamic company showcase listings, and a responsive modular architecture built with reusable React components.",
    techStack: ["React JS", "JavaScript", "HTML5", "CSS3", "Responsive UI"],
    features: [
      "Real-time Job Search with Instant Debounced Queries",
      "Multi-facet Job Filtering by Role, Type, Location & Experience",
      "Comprehensive Company Profiles & Detailed Listings",
      "Fluid Responsive UI for Mobile, Tablet, and Desktop",
      "Reusable Modular React Components Architecture",
      "Frontend Performance Optimization & Minimal Re-renders",
    ],
    category: "Full-Stack Web",
    liveDemoUrl: "https://github.com/rajsatyamraj03-collab",
    githubUrl: "https://github.com/rajsatyamraj03-collab",
    accentColor: "#00f0ff",
    glowColor: "rgba(0, 240, 255, 0.4)",
    featured: true,
    architectureHighlights: [
      "Custom React State Management for Filter Facets",
      "Component-driven Atomic UI Structure",
      "CSS Grid & Flexbox adaptive layouts",
      "Accessible Semantic Markup with ARIA roles",
    ],
  },
  {
    id: "ai-health-assistant",
    title: "AI Health Assistant",
    subtitle: "AI-Powered Healthcare Assistant",
    tagline: "Next-generation intelligent healthcare companion providing symptom analysis, medical report summarization, and health insights.",
    description:
      "An AI-powered healthcare assistant focused on symptom-based disease prediction, voice-enabled interaction, medical report PDF summarization, and holistic health guidance.",
    longDescription:
      "AI Health Assistant bridges patients and healthcare intelligence by leveraging AI models for preliminary symptom triage, medical report summarization, and interactive voice guidance. Designed with a futuristic health dashboard, it provides users with predictive risk scores, activity tracking visualizations, and secure medical record analysis.",
    techStack: ["Python", "AI / Machine Learning", "Generative AI", "React JS", "NLP", "Data Analytics"],
    features: [
      "Intelligent AI Chatbot for 24/7 preliminary health inquiries",
      "Symptom-based Predictive Disease Risk Assessment",
      "Medical Report PDF Parsing & Executive Summarization",
      "Voice Input Audio Recognition for Hands-Free Interaction",
      "Interactive Health Analytics & Vital Dashboard",
      "Daily Wellness & Activity Tracking Metrics",
      "Algorithmic Risk-Score Prediction Engine",
    ],
    category: "AI & Health Tech",
    liveDemoUrl: "https://github.com/rajsatyamraj03-collab",
    githubUrl: "https://github.com/rajsatyamraj03-collab",
    accentColor: "#10b981",
    glowColor: "rgba(16, 185, 129, 0.4)",
    featured: true,
    architectureHighlights: [
      "Natural Language Processing for Clinical Terminology Mapping",
      "Predictive Classification Pipeline for Symptoms",
      "Multi-modal input support (Text, Voice, PDF documents)",
      "Real-time reactive visual telemetry charts",
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "gsa",
    role: "Google Student Ambassador",
    company: "Google / Campus Community",
    period: "Nov 2025 – Present",
    type: "Community Leadership & Technical Evangelism",
    location: "SAGE University, Indore",
    badge: "Active Role",
    highlights: [
      "Organized and led technical AI/ML workshops for peer engineering cohorts.",
      "Facilitated Android development & modern web technology bootcamps on campus.",
      "Spearheaded Google developer initiatives and cloud skill badge challenges.",
      "Fostered a collaborative community of 100+ aspiring software engineers.",
      "Coordinated campus hackathons, technical speaker sessions, and coding meetups.",
    ],
    techSkills: ["AI/ML Workshops", "Android", "Web Development", "Google Cloud", "Community Building"],
    icon: "Flame",
  },
  {
    id: "codsoft",
    role: "AI Intern",
    company: "CodSoft",
    period: "Jan 2026",
    type: "Technical Internship",
    location: "Virtual / Remote",
    badge: "Completed",
    highlights: [
      "Engineered machine learning and AI-focused problem-solving modules.",
      "Applied structured algorithmic problem solving and logical reasoning in Python.",
      "Developed software components adhering to modular programming best practices.",
      "Conducted analytical testing, edge-case debugging, and data processing.",
    ],
    techSkills: ["AI Engineering", "Python", "Algorithmic Logic", "Data Analysis", "Software Architecture"],
    icon: "Brain",
  },
  {
    id: "iit-delhi",
    role: "Campus Ambassador",
    company: "Indian Institute of Technology Delhi",
    period: "Nov 2025 – Jan 2026",
    type: "Technical Ambassador",
    location: "IIT Delhi / Campus Outreach",
    badge: "Completed",
    highlights: [
      "Drove student outreach for IIT Delhi's flagship technical festivals and summits.",
      "Managed event registrations and student engagement across college departments.",
      "Promoted technical workshops, competitive programming contests, and robotics showcases.",
      "Represented the university delegation in inter-collegiate technical conferences.",
    ],
    techSkills: ["Student Outreach", "Technical Event Promotion", "Public Relations", "Community Engagement"],
    icon: "GraduationCap",
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "oci-ai-2025",
    title: "Oracle Cloud Infrastructure 2025",
    issuer: "Oracle University",
    year: "2025",
    focus: ["AI Foundations Associate", "Oracle Cloud Infrastructure (OCI)", "Machine Learning", "Generative AI"],
    badgeColor: "from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30",
    description: "Recognized certification verifying foundational mastery in Artificial Intelligence, Machine Learning models, Generative AI applications, and enterprise Oracle Cloud Infrastructure architectures.",
    topics: ["Oracle Cloud Infrastructure", "AI & Machine Learning Concepts", "Generative AI & LLMs", "Cloud Security & Compute"],
  },
  {
    id: "hackerrank-problem-solving",
    title: "Problem Solving Certification",
    issuer: "HackerRank",
    year: "2025",
    focus: ["Data Structures", "Algorithms", "Logical Problem Solving", "Time & Space Optimization"],
    badgeColor: "from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30",
    description: "Certified proficiency in algorithmic reasoning, data structure manipulation, recursion, dynamic programming, and complexity optimization assessed through rigorous coding examinations.",
    topics: ["Arrays & Linked Lists", "Tree & Graph Traversal", "Dynamic Programming", "Algorithmic Complexity"],
  },
  {
    id: "google-skills-arcade",
    title: "Google Skills Arcade — Base Camp",
    issuer: "Google Cloud",
    year: "2025",
    focus: ["Google Cloud Platform", "Cloud AI Solutions", "Modern Development Tools", "DevOps"],
    badgeColor: "from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30",
    description: "Demonstrated practical hands-on proficiency with Google Cloud console labs, cloud compute engines, AI APIs, and modern developer infrastructure.",
    topics: ["Cloud Computing Fundamentals", "GCP Console & CLI", "AI & Data Solutions", "Developer Toolchains"],
  },
  {
    id: "harvard-remote-work",
    title: "Remote Work & Job Program",
    issuer: "Harvard University",
    year: "2025",
    focus: ["Remote Collaboration", "Professional Communication", "Workplace Productivity", "Agile Teams"],
    badgeColor: "from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30",
    description: "Accredited program emphasizing distributed software engineering practices, async team communication, agile workflows, and cross-functional remote productivity.",
    topics: ["Distributed Engineering", "Asynchronous Communication", "Agile Task Management", "Professional Excellence"],
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "google-skill-badges",
    title: "65+ Google Skill Badges",
    highlight: "65+ Hands-On Lab Certifications",
    issuer: "Google Cloud Skills Boost",
    category: "Cloud & AI",
    icon: "ShieldCheck",
    details: [
      "Cloud Computing & Infrastructure deployments",
      "Artificial Intelligence & Machine Learning pipelines",
      "Cybersecurity and Identity Access Controls",
      "Modern Software Development toolchains",
    ],
    badgeColor: "from-blue-500/30 via-cyan-500/20 to-blue-500/10 border-blue-500/40 text-cyan-300",
  },
  {
    id: "microsoft-badges-trophies",
    title: "30+ Microsoft Badges & 4 Trophies",
    highlight: "30+ Badges | 4 Major Trophies",
    issuer: "Microsoft Learn",
    category: "Developer Mastery",
    icon: "Trophy",
    details: [
      "30+ Completed Technical Skill Modules",
      "4 Microsoft Learn Milestones & Trophies",
      "Cloud architecture and enterprise security modules",
      "Developer frameworks and software fundamentals",
    ],
    badgeColor: "from-purple-500/30 via-pink-500/20 to-purple-500/10 border-purple-500/40 text-purple-300",
  },
  {
    id: "google-ai-recognition",
    title: "Google AI Recognition",
    highlight: "AI & ML Learning Distinction",
    issuer: "Google Developer Programs",
    category: "Artificial Intelligence",
    icon: "Sparkles",
    details: [
      "Commended for active AI learning & community workshops",
      "Hands-on execution of Generative AI modules",
      "Peer mentorship in algorithmic problem solving",
      "Participation in developer community technical events",
    ],
    badgeColor: "from-emerald-500/30 via-teal-500/20 to-emerald-500/10 border-emerald-500/40 text-emerald-300",
  },
  {
    id: "open-source-contribution",
    title: "Open Source Collaboration",
    highlight: "GitHub Version Control & Code Quality",
    issuer: "Developer Ecosystem",
    category: "Open Source",
    icon: "GitBranch",
    details: [
      "Active public repositories showcasing modular code",
      "Rigorous Git version control workflows and branch management",
      "Clean documentation and open development standards",
      "Collaborative pull requests and code review habits",
    ],
    badgeColor: "from-amber-500/30 via-orange-500/20 to-amber-500/10 border-amber-500/40 text-amber-300",
  },
];

export const CODING_PROFILES = [
  {
    name: "LinkedIn",
    category: "Professional Network",
    handle: "satyam-raj-a13a75385",
    url: "https://www.linkedin.com/in/satyam-raj-a13a75385/",
    ctaText: "Connect on LinkedIn",
    description: "Explore professional updates, student ambassador initiatives, and network with me.",
    statLabel: "Community",
    statValue: "Ambassador",
    accent: "from-blue-600 to-cyan-500",
    borderGlow: "rgba(59, 130, 246, 0.4)",
    icon: "Linkedin",
  },
  {
    name: "GitHub",
    category: "Projects & Code Repositories",
    handle: "rajsatyamraj03-collab",
    url: "https://github.com/rajsatyamraj03-collab",
    ctaText: "View GitHub Profile",
    description: "Explore open source repositories, frontend applications, and algorithmic experiments.",
    statLabel: "Repositories",
    statValue: "Active Projects",
    accent: "from-purple-600 to-violet-400",
    borderGlow: "rgba(168, 85, 247, 0.4)",
    icon: "Github",
  },
  {
    name: "LeetCode",
    category: "Problem Solving & DSA",
    handle: "2529UG023722",
    url: "https://leetcode.com/u/2529UG023722/",
    ctaText: "View LeetCode Profile",
    description: "Data structures, algorithmic challenges, complexity optimization, and coding practice.",
    statLabel: "Focus",
    statValue: "DSA & Problem Solving",
    accent: "from-amber-500 to-yellow-400",
    borderGlow: "rgba(245, 158, 11, 0.4)",
    icon: "Code",
  },
];
