import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { styleDecorator } from 'shared/config/storybook/decorators/styleDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';


const meta = {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};
export const Dark: Story = {
};

Dark.decorators = [styleDecorator(Theme.DARK)]