import { HeaderClient } from "./HeaderClient";
import type { IMenuItem } from "@/helpers/Types/IMenuItem";

const menuItems: IMenuItem[] = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#features", label: "What You'll Get" },
    { href: "#the-science", label: "The Science" },
    { href: "#how-we-help", label: "How We Help" },
    { href: "#crisis-support", label: "Crisis Support" },
    { href: "/contact", label: "Get in Touch" },
];

export default function Header() {
    return (
        <HeaderClient
            menuItems={menuItems}
        />
    );
}
