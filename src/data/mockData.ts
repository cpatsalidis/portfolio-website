import { Project, Tool } from '../types';

export const projects: Project[] = [
    {
        id: "1",
        title: "CampGround Site",
        description:
            "The CampGround website is a fullstack web-application that aims to provide a platform for users to find, review and list campsites. A centralised hub for available campsites near your desired location.",
        image: "/campground/campgrounds.png",
        logo: "/campground/camping_img.jpg",
        category: "Personal Project",
        techIcons: [
            "/assets/figma.svg",
            "/assets/express.svg",
            "/assets/nodejs.svg",
            "/assets/mongodb.svg",
            "/assets/bootstrap.svg",
            "/assets/git.svg",
        ],
        buttonLabel: "More details..",
        link: "/projects/campground",
    },
    {
        id: "2",
        title: "Agentic AI Community",
        description:
            "This was part of my Master Thesis, where I modelled and implemented an community of agents that could collaborate with eachother to achieve a certain goal. This was centered around Machine Learning and the ways in which information can be shaped and revealed in optimal ways to a controlled collective of agents.",
        image: "/AI/patial.svg",
        logo: "/AI/ai_logo.svg  ",
        category: "Machine Learning",
        techIcons: [
            "/assets/mesa_logo.png",
            "/assets/jupyter.svg",
            "/assets/gymnasium.svg",
            "/assets/python.svg",
            "/assets/git.svg",
        ],
        buttonLabel: "More details..",
        link: "/projects/agentic-ai",
    },
    {
        id: "3",
        title: "Graph API",
        description:
            "This was a collaborative feature development project, with a team of 3 other junior developers. The project had us developing a core feature that allowed users to easily and seamlesly display their health data (Heart rate, sleep, etc) in a graph format of their choosing, amongst other capabilities. This included migration to IOS and Android mobile apps.",
        image: "/graphAPI/leaflet_2.png",
        logo: "/graphAPI/graph_api_logo.svg",
        category: "Data Visualisation",
        techIcons: [
            "/assets/javascript.svg",
            "/assets/css.svg",
            "/assets/html.svg",
            "/assets/react.svg",
            "/assets/swift.svg",
            "/assets/openai.svg",
        ],
        buttonLabel: "More details..",
        link: "/projects/graph-api",
    },
    {
        id: "4",
        title: "My very own Portfolio",
        description: "This portfolio has been built from scratch, to not only showcase some of my projects, but also my skills and abilities as a developer. This was a way of venturing deeper into design best practises/patterns and UI/UX design, and to also provide an insight to my professional and lean style of web development.",
        image: "/assets/img-fly.png",
        logo: "/assets/portfolio_logo.svg   ",
        category: "Personal Project",
        techIcons: [
            "/assets/react.svg",
            "/assets/ts.svg",
            "/assets/tailwind.svg",
            "/assets/vite.svg",
            "/assets/framer-motion.png",
            "/assets/git.svg",
        ],
        buttonLabel: "More details..",
        link: "/projects/portfolio",
    },
];

export const tools: Tool[] = [
    {
        name: "Figma",
        icon: "assets/figma.svg",
        description: "My primary design tool for creating and collaborating on UI/UX designs with team members.",
    },
    {
        name: "Docker",
        icon: "assets/docker.svg",
        description: "A containerization platform I use to develop, ship, and run applications efficiently across different environments.",
    },
    {
        name: "WCAG",
        icon: "assets/accessibility.svg",
        description: "An accessibility guidelines extension I use to ensure my web projects meet modern accessibility standards for all users.",
    },
    {
        name: "Jasmine",
        icon: "assets/jasmine.svg",
        description: "A unit testing tool I use to write and run automated tests, ensuring code quality and reliability in my JavaScript projects.",
    },
    {
        name: "VS Code",
        icon: "assets/vs.svg",
        description: "My preferred code editor with powerful extensions for efficient development.",
    },
    {
        name: "Git",
        icon: "assets/git.svg",
        description: "Essential version control system for managing code and collaborating with team members.",
    },
]; 