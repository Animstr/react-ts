import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';


const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{
        src: "https://avatars.mds.yandex.net/i?id=2effa651d6f0f9180845c1e22184e0c1_l-5558644-images-thumbs&n=13",
        alt: 'ghbdtn',
        size: 50
    }
};