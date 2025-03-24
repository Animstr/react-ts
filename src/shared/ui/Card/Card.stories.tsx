import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Card, CardTheme } from './Card';
import { Text } from '../Text/Text';

const meta = {
    title: 'shared/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{ 
        theme: CardTheme.NORMAL,
        children: <Text text={'ntrcn'}/>
    }
};

export const Outlined: Story = {
    args:{ 
        theme: CardTheme.OUTLINED,
        children: <Text text={'ntrcn'}/>
    }
};


