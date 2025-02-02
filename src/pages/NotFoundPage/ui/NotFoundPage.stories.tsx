import type { Meta, StoryObj } from '@storybook/react';
import { NotFoundPage } from './NotFoundPage';
import { Theme } from 'app/providers/ThemeProvider';
import { styleDecorator } from 'shared/config/storybook/decorators/styleDecorator';

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};
export const Dark: Story = {
};

Dark.decorators = [styleDecorator(Theme.DARK)]