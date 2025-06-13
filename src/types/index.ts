import { Variants } from 'framer-motion';

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    logo: string;
    category: string;
    techIcons: string[];
    buttonLabel: string;
    link: string;
}

export interface Tool {
    name: string;
    icon: string;
    description: string;
}

export interface SocialLink {
    platform: 'linkedin' | 'instagram' | 'dribbble' | 'github';
    url: string;
    icon: React.ComponentType<{ size: number }>;
}

export type AnimationVariants = Variants; 