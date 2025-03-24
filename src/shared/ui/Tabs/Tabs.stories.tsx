import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { fn } from '@storybook/test';

const meta = {
    title: 'shared/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{
        tabs: [
            {
                value: 'value 1',
                content: 'value 1' 
            },
            {
                value: 'value 2',
                content: 'value 2' 
            },
            {
                value: 'value 3',
                content: 'value 3' 
            }
        ],
        value: 'value 1',
        'onTabClick': fn()
    }
};