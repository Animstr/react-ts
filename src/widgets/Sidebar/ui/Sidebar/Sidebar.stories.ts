import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Sidebar } from './Sidebar';
import { styleDecorator } from 'shared/config/storybook/decorators/styleDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/storeDecorator';

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

export const LightNoAuth: Story = {

};

export const DarkNoAuth: Story = {

};
export const LightAuth: Story = {

};

export const DarkAuth: Story = {

};

DarkNoAuth.decorators = [styleDecorator(Theme.DARK)]
DarkAuth.decorators = [styleDecorator(Theme.DARK), StoreDecorator({ user: { authData: { id: 1, username: 'admin'}}})]
LightAuth.decorators = [StoreDecorator({ user: { authData: { id: 1, username: 'admin'}}})]



