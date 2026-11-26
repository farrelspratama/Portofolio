import { profile as idProfile } from "./data.js";

export { technology, hardSkills, softSkills, interests, projectGroups, emailjs } from "./data.js";

export const profile = {
  ...idProfile,
  lead: "Computer Science Education graduate who turns data into accurate, impactful solutions.",
  about:
    "I am a Computer Science Education graduate with a strong interest in data analysis and machine learning. I study Python and use libraries such as Pandas, NumPy, Matplotlib, and Seaborn for data processing, visualization, and building predictive models. Besides technical skills, I also have good communication, teamwork, and problem-solving abilities. I have a strong drive to learn and am committed to continuously growing in technology to become a data analyst who delivers accurate, impactful data-driven solutions.",
  education: "Computer Science Education · Universitas Pendidikan Indonesia",
  location: "Bandung, West Java, Indonesia",
};

export const projects = [
  {
    id: "bike-analysis",
    group: "data",
    category: "Data Analysis",
    title: "Bike Sharing Analysis",
    kind: "browser",
    description:
      "This analysis aims to understand bike rental behavior patterns by time, season, and weather conditions across 2011 and 2012. The data is analyzed to identify usage trends on workdays, weekends, and holidays, as well as the influence of external factors such as season and weather on the number of renters. The analysis uses Pandas for data processing, NumPy for numerical computation, and Matplotlib and Seaborn for visualization, giving a comprehensive picture of peak rental times and differences in user preferences across categories and environmental conditions.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
    images: [
      { src: "bike-analysis-2", label: "EDA", alt: "Exploratory Data Analysis notebook on bike rental data", bg: "#0e1116" },
      { src: "bike-analysis-1", label: "Cleaning", alt: "Data cleaning notebook for bike rental data", bg: "#0e1116" },
    ],
    links: [],
  },
  {
    id: "bike-viz",
    group: "data",
    category: "Dashboard",
    title: "Bike Sharing Visualization",
    kind: "browser",
    description:
      "This project is an interactive Streamlit dashboard presenting an analysis of bike rental data from 2011–2012. Using hourly and daily data, the dashboard explores bike usage patterns by time, season, and weather. Interactive features such as year, season, and weather selection let users dig into relevant insights flexibly. The project aims to help understand rental trends to support better decision-making.",
    stack: ["Python", "Streamlit", "Pandas", "Matplotlib", "Seaborn"],
    images: [
      { src: "bike-viz-1", label: "Hourly pattern", alt: "Streamlit dashboard: bike usage pattern by hour", bg: "#0e1117" },
      { src: "bike-viz-2", label: "Weather & users", alt: "Streamlit dashboard: effect of weather and user comparison", bg: "#0e1117" },
    ],
    links: [],
  },
  {
    id: "life-trans",
    group: "web",
    category: "Web App",
    title: "Life Trans",
    kind: "browser",
    description:
      "A web-based information system designed to help people plan trips efficiently through an interactive map (HERE Maps API) integration and a PHP backend. The development cycle includes comprehensive technical documentation, covering system flow and database design (ERD), a software requirements specification (SRS), a map API integration guide, and a structured User Manual, to ensure the system's sustainability and ease of maintenance.",
    stack: ["PHP", "JavaScript", "HERE Maps API", "MySQL"],
    images: [
      { src: "lifetrans-2", label: "Landing", alt: "Life Trans landing page", bg: "#00b4d8" },
      { src: "lifetrans-1", label: "Route", alt: "Life Trans route planner with an interactive map", bg: "#ffffff" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/MrasyidN/Life-Trans-project" },
    ],
  },
  {
    id: "dragnlearn",
    group: "web",
    category: "Mobile App",
    title: "Drag’n Learn",
    kind: "phone",
    description:
      "An educational mobile app built with React Native that trains students' digital literacy skills through interactive drag & drop modules. Its development is supported by structured technical documents, including user flow mapping, Use Case modeling and multi-actor scenarios (Teacher/Admin and Student), and relational database design (account, class, and game material management).",
    stack: ["React Native", "JavaScript", "Digital Literacy"],
    images: [
      { src: "dragnlearn-1", label: "Sign in", alt: "Drag’n Learn app start screen", bg: "#ffffff" },
      { src: "dragnlearn-2", label: "Course", alt: "Drag’n Learn course page", bg: "#ffffff" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/RhismaSyahrulPutra/uas-mobile-learning-drag-nlearn" },
    ],
  },
  {
    id: "codeventure",
    group: "game",
    category: "Game",
    title: "Codeventure",
    kind: "browser",
    description:
      "An interactive 2D adventure game based on Problem-based Learning (PBL), designed with the R&D method (ADDIE) to train vocational high school (SMK) students' logical thinking and understanding of the Stack data structure. Developed with a valid digital pedagogy approach (expert score 86.54%) that is also responsive (SUS score 74.94).",
    stack: ["Godot Engine", "GDScript", "Stack Data Structure"],
    images: [
      { video: "codeventure-1", poster: "codeventure-1", label: "Dialog", alt: "Codeventure dialogue demo video" },
      { video: "codeventure-2", poster: "codeventure-2", label: "Minigame", alt: "Codeventure minigame demo video" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/farrelspratama/Codeventure" },
      { label: "itch.io", href: "https://blysium.itch.io/codeventure" },
    ],
  },
];

export const experience = [
  {
    title: "Educator Professional Strengthening Program (P3K)",
    place: "SMK Negeri 2 Bandung",
    description:
      "In the Educator Professional Experience Strengthening Program (P3K) at SMK Negeri 2 Bandung, I carried out a range of core activities. I also faced and overcame challenges in daily tasks and the technical side of teaching through continuous evaluation and improvement. The program strengthened my competence as a prospective educator and gave me real experience in managing learning and the dynamics of the school environment.",
    activities: [
      "Teaching practice",
      "Developing teaching media and materials",
      "Learning assessment",
      "School management practice",
    ],
    photos: [
      { src: "p3k-2", alt: "Farrel teaching in the computer lab at SMK Negeri 2 Bandung" },
      { src: "p3k-1", alt: "Group photo with students of SMK Negeri 2 Bandung" },
    ],
  },

  {
    title: "Final Project Research",
    place: "SMK Negeri 13 Bandung",
    description:
      "Designed, developed, and tested a 2D adventure game application based on Problem-based Learning (PBL) for teaching the Stack data structure. I applied an R&D method based on the ADDIE framework and carried out structured evaluation through system usability testing (SUS) and measurable analysis of student learning outcome data. This research experience strengthened my competence in educational software engineering and analytical data processing.",
    activities: [
      "Data collection",
      "Classroom learning implementation",
      "Research result analysis",
    ],
    photos: [
      { src: "penelitian-1", alt: "Farrel teaching in the computer lab at SMK Negeri 13 Bandung" },
      { src: "penelitian-2", alt: "Students' discussion activity at SMK Negeri 13 Bandung" },
      { src: "penelitian-3", alt: "Group photo with students of SMK Negeri 13 Bandung" },
    ],
  },
];
