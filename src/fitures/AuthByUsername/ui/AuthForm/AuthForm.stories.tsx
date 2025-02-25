import type { Meta, StoryObj } from '@storybook/react';
import AuthForm from './AuthForm';
import { StoreDecorator } from 'shared/config/storybook/decorators/storeDecorator';
import { styleDecorator } from 'shared/config/storybook/decorators/styleDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'fitures/AuthForm',
    component: AuthForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof AuthForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{}
};

export const Error: Story = {
    args:{}
};

export const PrimaryDark: Story = {
    args:{}
};


Primary.decorators = [StoreDecorator({
    authForm: {
        loggin: '',
        password: '',
        isLoading: false,
    }
})]

Error.decorators = [StoreDecorator({
    authForm: {
        loggin: '123',
        password: 'adad',
        isLoading: false,
        error: 'Error'
    }
})]

PrimaryDark.decorators = [StoreDecorator({
    authForm: {
        loggin: '',
        password: '',
        isLoading: false,
    }
})]

PrimaryDark.decorators = [styleDecorator(Theme.DARK)]