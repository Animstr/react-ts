import type { Meta, StoryObj } from '@storybook/react';
import { CountrySelect } from './Country';


const meta = {
    title: 'entity/CountrySelect',
    component: CountrySelect,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    }
};