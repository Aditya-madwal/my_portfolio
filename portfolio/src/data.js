// src/data.js

export const personalInfo = {
    name: "Aditya Madwal",
    tagline: "Full-Stack Developer",
    description: "Crafting digital experiences with Django and React. Currently pursuing Computer Science at K.I.E.T Group of Institutions.",
    contacts: [
        {
            type: "phone",
            value: "+91 8130492789",
            url: "tel:+918130492789"
        },
        {
            type: "email",
            value: "adityamadwal@gmail.com",
            url: "mailto:adityamadwal@gmail.com"
        },
        {
            type: "linkedin",
            value: "LinkedIn",
            url: "https://linkedin.com/in/aditya-madwal-118525257"
        },
        {
            type: "github",
            value: "GitHub",
            url: "https://github.com/aditya-madwal"
        }
    ]
};
export const experienceData = [
    {
        role: "Backend Developer",
        company: "Devneural Solutions",
        period: "Feb 2025 - Apr 2025",
        achievements: [
            "Worked across 4+ backend projects, contributing to scalable APIs using Django and Django REST Framework",
            "Integrated Azure Email Services and Azure Communication Services for improved client communication workflows",
            "Diagnosed and fixed bugs leading to 15% decrease in downtime and enhanced system stability",
            "Implemented database optimizations resulting in 20% reduction in data redundancy",
            "Collaborated with frontend teams and stakeholders to deliver features in agile sprints"
        ]
    },
    {
        role: "Full-Stack Developer Intern",
        company: "Technology Business Incubator, K.I.E.T Group of Institutions",
        period: "Dec 2024 - Feb 2024",
        achievements: [
            "Delivered 3+ successful deployments with various cloud integrations",
            "Enhanced multiple full-stack applications with new features",
            "Optimized application performance and scalability"
        ]
    },
    {
        role: "Web Internship Coordinator",
        company: "Microsoft Learn Student Ambassador",
        period: "Aug 2024 - Oct 2024",
        achievements: [
            "Managed 400+ internship placements with 95% completion rate",
            "Improved website UI, increasing engagement by 25%",
            "Achieved 94% positive feedback from program participants"
        ]
    }
];

export const projectsData = [
    {
        title: "Aristotle",
        period: "Dec 2024 - Jan 2025",
        description: "A student productivity platform with AI-powered learning tools",
        technologies: ["React.js", "Django Rest", "Gemini API", "IPFS", "PostgreSQL"],
        features: [
            "AI-powered PDF summarization and roadmap generation",
            "Integrated progress tracking and schedule management",
            "Intuitive UI design for optimal student experience"
        ]
    },
    {
        title: "FriendsBook",
        period: "Aug 2024 - Sep 2024",
        description: "A full-featured social media platform with real-time interactions",
        technologies: ["Python", "Django", "React", "WebSockets", "PostgreSQL"],
        features: [
            "Real-time chat and friend management system",
            "Secure user authentication with email verification",
            "Optimized API endpoints for media handling"
        ],
        images: [
            "https://images.unsplash.com/photo-1745990652119-f13cced69b7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
            "https://images.unsplash.com/photo-1745990652119-f13cced69b7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
            "https://images.unsplash.com/photo-1745990652119-f13cced69b7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
        ]
    }
];

export const educationData = [
    {
        institution: "K.I.E.T Group of Institutions",
        degree: "B.Tech in Computer Science",
        period: "2022 - 2026"
    },
    {
        institution: "Vanasthali Public School",
        degree: "High School (92.4%) | Intermediate (94%)",
        period: "2020, 2022"
    }
];

export const certificationsData = [
    {
        name: "Python Pro Bootcamp",
        platform: "Udemy",
        date: "June, 2023"
    },
    {
        name: "Django Web Framework",
        platform: "Coursera",
        date: "Dec, 2023"
    },
    {
        name: "Principles Of UI/UX Design",
        platform: "Coursera",
        date: "Nov, 2023"
    }
];

export const skillsData = {
    "Languages": ["Python", "JavaScript"],
    "Development": ["HTML", "CSS", "Django", "React", "Node.js", "PostgreSQL"],
    "Tools": ["Git", "VS Code", "Figma", "Postman"]
};