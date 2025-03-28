import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';
import { Theme } from 'app/providers/ThemeProvider';
import { styleDecorator } from 'shared/config/storybook/decorators/styleDecorator';

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};
export const Dark: Story = {
};

Dark.decorators = [styleDecorator(Theme.DARK)]