import { Home, User, BookOpen, Briefcase, Folder } from 'lucide-react';

const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Academics", href: "#education", icon: BookOpen },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: Folder },
];

const techskills = [
    "PYTHON",
    "JAVASCRIPT",
    "JAVA",
    "DJANGO",
    "DJANGO REST FRAMEWORK",
    "REACT JS",
    "NODE JS",
    "TAILWIND CSS",
    "POSTGRESQL",
    "POSTMAN",
    "GIT",
    "GITHUB",
    "VISUAL STUDIO CODE",
    "PYCHARM",
    "FIGMA",
    "UI DESIGNS",
    "USER RESEARCH",
    "WIREFRAMING",
    "PROTOTYPING",
]

const expData = [
    {
        title: "Backend Developer",
        company: "Devneural Solutions",
        duration: "Feb 2025 – Apr 2025",
        points: [
            "Worked on 4+ projects, focused on building scalable RESTful APIs using Django and Django REST Framework.",
            "Resolved production bugs, reducing downtime and improving system stability.",
            "Optimized database schema and queries for a reduction in data redundancy and faster API response times.",
        ],
    },
    {
        title: "Full-Stack Developer Intern",
        company: "Technology Business Incubator, K.I.E.T",
        duration: "Nov 2024 – Jan 2025",
        points: [
            "Delivered 3+ successful deployments integrating cloud technologies.",
            "Contributed to 5+ full-stack applications across diverse domains.",
            "Enhanced app performance with a 20% improvement in load times and scalability.",
            "Collaborated with teammates and stakeholders to maintain production-level applications.",
        ],
    },
    {
        title: "Web Internship Coordinator",
        company: "Microsoft Learn Student Ambassador, K.I.E.T",
        duration: "Aug 2024 – Sep 2024",
        points: [
            "Managed 400+ intern candidates with a 95% successful completion rate.",
            "Redesigned the MLSA KIET website UI, increasing user engagement by 25%.",
            "Received 94% positive feedback from participants for program coordination and guidance.",
        ],
    },
];

const projectData = [
    {
        name: "FriendsBook",
        description:
            "A social media app with real-time chat, post creation, and friend requests. Built using Django, React, WebSockets, and PostgreSQL.",
        github: "https://github.com/aditya-madwal/FriendsBook",
        techStack: ["Django", "React", "WebSockets", "SMTP", "PostgreSQL"],
    },
    {
        name: "Aristotle.ai",
        description:
            "AI-powered student productivity platform using Gemini API and IPFS for chat-based learning, roadmaps, and decentralized document storage.",
        github: "https://github.com/aditya-madwal/Aristotle.ai",
        techStack: ["React", "Django REST", "Gemini API", "IPFS", "PostgreSQL"],
    },
    {
    name: "MailBoard",
    description:
        "A Smart email management SaaS platform built with Next.js, featuring AI-powered categorization, Auto Email-to-Task conversions, multi-inbox support, and smart email generation using Gemini API.",
    github: "https://github.com/aditya-madwal/mailboard",
    techStack: ["Next.js", "Tailwind CSS", "Radix UI", "Gemini API", "JWT", "MongoDB", "Google API"],
}
];

export { techskills, navItems, expData, projectData };
