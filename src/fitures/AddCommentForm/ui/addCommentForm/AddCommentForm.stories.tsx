import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/storeDecorator';
import { styleDecorator } from 'shared/config/storybook/decorators/styleDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AddCommentForm from './AddCommentForm';

const meta = {
    title: 'fitures/AddCommentForm',
    component: AddCommentForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{
        onSendComment: (text: string) => {}
    }
};

export const Error: Story = {
    args:{
        onSendComment: (text: string) => {}
    }
};

export const PrimaryDark: Story = {
    args:{
        onSendComment: (text: string) => {}
    }
};


Primary.decorators = [StoreDecorator({
    addCommentsForm: {
        'text': '12'
    }
})]

Error.decorators = [StoreDecorator({
    addCommentsForm: {
        'error': '12'
    }
})]

PrimaryDark.decorators = [StoreDecorator({
    addCommentsForm: {
        'text': '12'
    }
})]

PrimaryDark.decorators = [styleDecorator(Theme.DARK)]