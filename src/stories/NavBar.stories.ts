import type { Meta, StoryObj } from '@storybook/react';
import NavBar from '../components/NavBar';
import MainMenu from '../menus/MainMenu';

const meta: Meta<typeof NavBar> = {
    title: 'Example/NavBar',
    component: NavBar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
    args: {
        menu: MainMenu
    }
}