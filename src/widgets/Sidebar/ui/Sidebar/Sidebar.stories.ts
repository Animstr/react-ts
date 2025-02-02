import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Sidebar } from './Sidebar';
import { styleDecorator } from 'shared/config/storybook/decorators/styleDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {

};

export const Dark: Story = {

};

Dark.decorators = [styleDecorator(Theme.DARK)]



