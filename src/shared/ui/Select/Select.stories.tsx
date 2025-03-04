import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
    title: 'shared/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{
        label: 'выберите год рождения',
        options: [
            {value: '123', content: 'Hello'},
            {value: '1231', content: 'Hello world'},
            {value: '1235', content: 'Hello my friend'}
        ],
    }
};
/* export const Dark: Story = {
    args:{
        
    }
}; */