import type { Meta, StoryObj } from '@storybook/react';
import Logo from '../components/Logo';

const meta: Meta<typeof Logo> = {
    title: 'Example/Logo',
    component: Logo,
    tags: ['autodocs'],    
    argTypes: {
        color: {
          options: ['inherit', 'primary.main', 'secondary.main', 'common.white', 'common.black'],
          control: { type: 'radio' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {}

export const Small: Story = {
    args: {
        size: 16
    }
}

export const Large: Story = {
    args: {
        size: 48
    }
}