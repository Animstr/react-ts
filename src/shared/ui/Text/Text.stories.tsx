import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextSize, TextThemes } from './Text';
import { styleDecorator } from 'shared/config/storybook/decorators/styleDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
    args:{
        title: 'Title'
    }
};
export const TitleError: Story = {
    args:{
        title: 'Title',
        theme: TextThemes.ERROR
    }
};
export const ComonText: Story = {
    args: {
        text: 'comone text'
    }
};
export const ComonTextError: Story = {
    args: {
        text: 'comone text',
        theme: TextThemes.ERROR
    }
};

export const TextSizeL: Story = {
    args:{
        title: 'Title',
        text: 'subtitle',
        size: TextSize.L
    }
};

export const TitleDark: Story = {
    args:{
        title: 'Title'
    }
};

export const ComonTextDark: Story = {
    args: {
        text: 'comone text'
    }
};

TitleDark.decorators = [styleDecorator(Theme.DARK)]
ComonTextDark.decorators = [styleDecorator(Theme.DARK)]