import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ThemeButton } from './Button';
import { styleDecorator } from 'shared/config/storybook/decorators/styleDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{
        children: 'Text'
    }
};


export const Clear: Story = {
    args:{
        children: 'Text',
        theme: ThemeButton.CLEAR
    }
};
export const Outline: Story = {
    args:{
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    }
};

export const OutlineDark: Story = {
    args:{
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    }
};

OutlineDark.decorators = [styleDecorator(Theme.DARK)]


