import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ButtonSize, ButtonTheme } from './Button';
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
        theme: ButtonTheme.CLEAR
    }
};

export const ClearInverted: Story = {
    args:{
        children: 'Text',
        theme: ButtonTheme.CLEAR_INVERTED
    }
};
export const Outline: Story = {
    args:{
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    }
};
export const OutlineInverted: Story = {
    args:{
        children: 'Text',
        theme: ButtonTheme.OUTLINE_INVERTED,
    }
};

export const OutlineSizeM: Story = {
    args:{
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M
    }
};

export const OutlineSizeL: Story = {
    args:{
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L
    }
};

export const OutlineSizeXl: Story = {
    args:{
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL
    }
};

export const OutlineDark: Story = {
    args:{
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    }
};

export const Background: Story = {
    args:{
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    }
};

export const BackgroundInverted: Story = {
    args:{
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    }
};

export const Square: Story = {
    args:{
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true
    }
};

export const SquareSizeM: Story = {
    args:{
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M
    }
};

export const SquareSizeL: Story = {
    args:{
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L
    }
};

export const SquareSizeXL: Story = {
    args:{
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL
    }
};

export const Disabled: Story = {
    args:{
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        disabled: true
    }
};

OutlineDark.decorators = [styleDecorator(Theme.DARK)]


