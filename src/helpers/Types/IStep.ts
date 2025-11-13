export interface Step {
    title: string;
    description: string;
    iconName: 'ClipboardList' | 'MessageCircle'; // Now a serializable string
    color: string;
    bgColor: string;
    features: string[];
    visualId: 'reflection' | 'conversation'; // Now a serializable string
}