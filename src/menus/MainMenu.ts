import { NavItem } from "@/components/NavBar";

const MainMenu = [
    {
        label: 'Home',
        destination: '/'
    },
    {
        label: 'Projects',
        destination: '/projects'
    },
    {
        label: 'Contact',
        destination: '/contact'
    },
] as const satisfies readonly NavItem[];

export default MainMenu;