import { Project, Tool } from '../types';

export const projects: Project[] = [
    {
        id: "1",
        title: "Tuku Ternak",
        description:
            "Tuku Ternak is an application that is engaged in animal husbandry e-commerce (selling various livestock products) that applies business concepts and empowerment of breeders and MSMEs.",
        image: "/assets/tuku ternak 1.jpg",
        logo: "/assets/tuku-ternak.png",
        category: "Ticketing",
        techIcons: [
            "/assets/figma.svg",
            "/assets/whimsical.svg",
            "/assets/invision.svg",
            "/assets/flutter.svg",
            "/assets/firebase.svg",
            "/assets/git.svg"
        ],
        buttonLabel: "STUDY CASE",
        link: "#",
    },
    {
        id: "2",
        title: "Event Id",
        description:
            "Event Id is a Ticketing Management Service (TMS) superior technology in supporting all event organizers from distribution & ticket management, to providing event analysis reports at the end of the event.",
        image: "/assets/event-id.png",
        logo: "/assets/event_logo_color.png",
        category: "Ticketing",
        techIcons: [
            "/assets/figma.svg",
            "/assets/whimsical.svg",
            "/assets/invision.svg"
        ],
        buttonLabel: "STUDY CASE",
        link: "#",
    },
    {
        id: "3",
        title: "Medica",
        description:
            "Medica is the Web Design for Commercial and Residential Room Disinfection, Decontamination Services Eliminating 99.999% of bacteria, viruses, spores using international standard products.",
        image: "/assets/medica-logo-1.png",
        logo: "/assets/medica-logo.png",
        category: "Health",
        techIcons: [
            "/assets/figma.svg",
            "/assets/whimsical.svg",
            "/assets/invision.svg"
        ],
        buttonLabel: "STUDY CASE",
        link: "#",
    },
    {
        id: "4",
        title: "Fly",
        description: "A travel booking platform for flights and accommodations.",
        image: "/assets/img-fly.png",
        logo: "/assets/logo-bsc.png",
        category: "Travel",
        techIcons: [
            "/assets/react.svg",
            "/assets/graphql.svg",
            "/assets/aws.svg"
        ],
        buttonLabel: "STUDY CASE",
        link: "https://fly.example.com",
    },
];

export const tools: Tool[] = [
    {
        name: "Figma",
        icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=figma",
        description: "My primary design tool for creating and collaborating on UI/UX designs with team members.",
    },
    {
        name: "Whimsical",
        icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=whimsical",
        description: "A versatile tool for creating wireframes, flowcharts, and mind maps to plan and organize projects.",
    },
    {
        name: "Invision",
        icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=invision",
        description: "Used for creating interactive prototypes and gathering feedback from stakeholders.",
    },
    {
        name: "Flutter",
        icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=flutter",
        description: "My go-to framework for building cross-platform mobile applications with beautiful UI.",
    },
    {
        name: "VS Code",
        icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=vscode",
        description: "My preferred code editor with powerful extensions for efficient development.",
    },
    {
        name: "Git",
        icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=git",
        description: "Essential version control system for managing code and collaborating with team members.",
    },
]; 