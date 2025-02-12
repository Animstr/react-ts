import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nesciunt laborum minima corporis ullam possimus quos autem iusto tenetur non, quibusdam corrupti. Illo minus, assumenda facere nobis repellendus in numquam!',
        isOpen: true
    }
};
export const Dark: Story = {
    args:{
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nesciunt laborum minima corporis ullam possimus quos autem iusto tenetur non, quibusdam corrupti. Illo minus, assumenda facere nobis repellendus in numquam!',
        isOpen: true,
        isTestingDark: true
    }
};


