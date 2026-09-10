import { PERSONAL_INFO, SKILLS_DATA, PROJECTS_DATA, EXPERIENCE_DATA, CERTIFICATIONS_DATA, ACHIEVEMENTS_DATA } from "./portfolioData";

export const RESUME_DETAILS = {
  header: {
    name: PERSONAL_INFO.name,
    title: PERSONAL_INFO.headline,
    location: PERSONAL_INFO.location,
    email: PERSONAL_INFO.socialLinks.email,
    linkedin: PERSONAL_INFO.socialLinks.linkedin,
    github: PERSONAL_INFO.socialLinks.github,
    leetcode: PERSONAL_INFO.socialLinks.leetcode,
  },
  summary:
    "Proactive Computer Science Engineering student at SAGE University with demonstrated proficiency in AI/ML engineering, intelligent algorithms, full-stack systems, and problem solving. Recognized with 65+ Google Skill Badges, 30+ Microsoft Badges, Oracle Cloud 2025 AI Associate, and leadership as Google Student Ambassador.",
  education: [
    {
      institution: "SAGE University, Indore",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      period: "2025 – 2029",
      location: "Indore, Madhya Pradesh",
      details: [
        "Core Coursework: Data Structures, Algorithms, Object-Oriented Programming, Computer Networks, Operating Systems.",
        "Active student leader and Google Student Ambassador.",
      ],
    },
  ],
  skills: {
    programming: ["C", "C++", "Java", "Python", "JavaScript", "HTML5", "CSS3"],
    web: ["React JS", "Responsive UI", "Component Architecture", "REST APIs", "Modern CSS"],
    cs: ["Data Structures & Algorithms", "OOP Principles", "Problem Solving", "Time & Space Complexity"],
    ai_ml: ["Artificial Intelligence", "Machine Learning", "Generative AI", "NLP", "Prompt Engineering"],
    tools: ["GitHub / Git", "Oracle Cloud Infrastructure (OCI)", "Google Cloud Tools", "HackerRank"],
  },
  experience: EXPERIENCE_DATA,
  projects: PROJECTS_DATA,
  certifications: CERTIFICATIONS_DATA,
  achievements: ACHIEVEMENTS_DATA,
};
