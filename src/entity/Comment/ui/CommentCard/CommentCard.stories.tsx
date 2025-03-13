import type { Meta, StoryObj } from '@storybook/react';
import { styleDecorator } from 'shared/config/storybook/decorators/styleDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

const meta = {
    title: 'entity/Comment/CommentCard',
    component: CommentCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{
        'comment': {
            'articleId': '1',
            'id': '1',
            'text': 'What about this?',
            'user': {
                'id': 1,
                'username': 'admin',
                'avatar': "https://avatars.mds.yandex.net/i?id=2effa651d6f0f9180845c1e22184e0c1_l-5558644-images-thumbs&n=13"
            }
        }
    }
};

export const PrimaryDark: Story = {
    args:{
        'comment': {
            'articleId': '1',
            'id': '1',
            'text': 'What about this?',
            'user': {
                'id': 1,
                'username': 'admin',
                'avatar': "https://avatars.mds.yandex.net/i?id=2effa651d6f0f9180845c1e22184e0c1_l-5558644-images-thumbs&n=13"
            }
        }
    }
};

PrimaryDark.decorators = [styleDecorator(Theme.DARK)]