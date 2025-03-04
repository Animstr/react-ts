import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/storeDecorator';
import { styleDecorator } from 'shared/config/storybook/decorators/styleDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entity/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isLoading: false,
        readonly: true
    }
};

export const isLoading: Story = {
    args: {
        isLoading: true,
        readonly: true
    }
};

export const PrimaryDark: Story = {
    args: {
        isLoading: false,
        readonly: true
    }
};


Primary.decorators = [StoreDecorator({
    profile: {
        isLoading: false,
        readonly: true
    }
})]

isLoading.decorators = [StoreDecorator({
    profile: {
        isLoading: true,
        readonly: true
    }
})]

PrimaryDark.decorators = [StoreDecorator({
    profile: {
        isLoading: false,
        readonly: true
    }
})]

PrimaryDark.decorators = [styleDecorator(Theme.DARK)]