import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { styleDecorator } from 'shared/config/storybook/decorators/styleDecorator';
import { Skeleton } from './Skeleton';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CircleLight: Story = {
    args: {
        width: '100px',
        height: '100px',
        border: '50%'
    }
};
export const CircleDark: Story = {
    args: {
        width: '100px',
        height: '100px',
        border: '50%'
    }
};

CircleDark.decorators = [styleDecorator(Theme.DARK)]

export const SquareLight: Story = {
    args: {
        width: '200px',
        height: '100px',
    }
};
export const SquareDark: Story = {
    args: {
        width: '200px',
        height: '100px',
    }
};

SquareDark.decorators = [styleDecorator(Theme.DARK)]

export const SquareBlue: Story = {
    args: {
        width: '200px',
        height: '100px',
    }
};

SquareBlue.decorators = [styleDecorator(Theme.BLUE)]