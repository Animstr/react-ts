import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { AppLink, AppLinkTheme } from './AppLink';
import { styleDecorator } from 'shared/config/storybook/decorators/styleDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{
        children: 'Main',
        to: '/',
        theme: AppLinkTheme.PRIMARY,
    }
};
export const Secondary: Story = {
    args: {
        children: 'About',
        to: '/about',
        theme: AppLinkTheme.SECONDARY
    }

};
export const PrimaryDark: Story = {
    args:{
        children: 'Main',
        to: '/',
        theme: AppLinkTheme.PRIMARY,
    }
};

export const SecondaryDark: Story = {
    args: {
        children: 'About',
        to: '/about',
        theme: AppLinkTheme.SECONDARY
    }

};

PrimaryDark.decorators = [styleDecorator(Theme.DARK)]
SecondaryDark.decorators = [styleDecorator(Theme.DARK)]