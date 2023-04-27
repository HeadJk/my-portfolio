import type { Meta, StoryObj } from '@storybook/react';
import SkillChip from '../components/SkillChip';

const meta: Meta<typeof SkillChip> = {
    title: 'Example/SkillCard',
    component: SkillChip,
    tags: ['autodocs'],    
};

export default meta;
type Story = StoryObj<typeof SkillChip>;

export const Default: Story = {
}