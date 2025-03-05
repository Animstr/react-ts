import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/storeDecorator';
import { styleDecorator } from 'shared/config/storybook/decorators/styleDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ProfileCard } from './ProfileCard';
import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';

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
        readonly: true,
        form: {
            first: 'daniil',
            second: 'shuliy',
            age: 23,
            country: Country.RUSSIA,
            currency: Currency.RUB
        }
    }
};

export const isLoading: Story = {
    args: {
        isLoading: true,
        readonly: true
    }
};

export const Error: Story = {
    args: {
        isLoading: false,
        readonly: true,
        error: 'error'
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