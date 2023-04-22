import { NavItem } from "@/components/NavBar";

const MainMenu = [
    {
        label: 'Products',
        destination: '/'
    },
    {
        label: 'Pricing',
        destination: '/'
    },
] as const satisfies readonly NavItem[];

export default MainMenu;