import { LucideIcon } from "lucide-react";

export interface CrisisService {
    title: string;
    color: string;
    content: string;
    emoji: string;
}

export interface NavSection {
    title: string;
    links: string[];
}

export interface ComplianceItem {
    text: string;
    icon: string;
    id: string;
}

export interface SocialIconData {
    icon: LucideIcon;
    label: string;
    id: string;
}