import type { Meta, StoryObj } from '@storybook/react';
import { CurrencySelect } from './Currency';


const meta = {
    title: 'entity/CurrencySelect',
    component: CurrencySelect,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    }
};