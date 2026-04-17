import { LucideIcon } from "lucide-react";

export interface ConversationMessage {
    role: "user" | "assistant";
    text: string;
    time: string;
}

export interface Companion<TIcon> {
    name: string;
    icon: TIcon;
    description: string;
    gradient: string;
}

export type LucideCompanion = Companion<LucideIcon>;