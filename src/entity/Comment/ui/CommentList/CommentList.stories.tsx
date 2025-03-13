import type { Meta, StoryObj } from '@storybook/react';
import { styleDecorator } from 'shared/config/storybook/decorators/styleDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';

const meta = {
    title: 'entity/Comment/CommentList',
    component: CommentList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{
        comments: [
            {
                "id": "1",
                "text": "some comment",
                "articleId": "1",
                'user': {
                    'id': 1,
                    'username': 'admin',
                    'avatar': "https://avatars.mds.yandex.net/i?id=2effa651d6f0f9180845c1e22184e0c1_l-5558644-images-thumbs&n=13"
                }
            },
            {
                "id": "1",
                "text": "some comment",
                "articleId": "1",
                'user': {
                    'id': 1,
                    'username': 'admin',
                    'avatar': "https://avatars.mds.yandex.net/i?id=2effa651d6f0f9180845c1e22184e0c1_l-5558644-images-thumbs&n=13"
                }
            },
            {
                "id": "1",
                "text": "some comment",
                "articleId": "1",
                'user': {
                    'id': 1,
                    'username': 'admin',
                    'avatar': "https://avatars.mds.yandex.net/i?id=2effa651d6f0f9180845c1e22184e0c1_l-5558644-images-thumbs&n=13"
                }
            },
        ]
    }
};

export const isLoading: Story = {
    args:{
        isLoading: true,
        comments: [
            {
                "id": "1",
                "text": "some comment",
                "articleId": "1",
                'user': {
                    'id': 1,
                    'username': 'admin',
                    'avatar': "https://avatars.mds.yandex.net/i?id=2effa651d6f0f9180845c1e22184e0c1_l-5558644-images-thumbs&n=13"
                }
            },
        ]
    }
};

export const PrimaryDark: Story = {
    args:{
        comments: [
            {
                "id": "1",
                "text": "some comment",
                "articleId": "1",
                'user': {
                    'id': 1,
                    'username': 'admin',
                    'avatar': "https://avatars.mds.yandex.net/i?id=2effa651d6f0f9180845c1e22184e0c1_l-5558644-images-thumbs&n=13"
                }
            },
            {
                "id": "1",
                "text": "some comment",
                "articleId": "1",
                'user': {
                    'id': 1,
                    'username': 'admin',
                    'avatar': "https://avatars.mds.yandex.net/i?id=2effa651d6f0f9180845c1e22184e0c1_l-5558644-images-thumbs&n=13"
                }
            },
            {
                "id": "1",
                "text": "some comment",
                "articleId": "1",
                'user': {
                    'id': 1,
                    'username': 'admin',
                    'avatar': "https://avatars.mds.yandex.net/i?id=2effa651d6f0f9180845c1e22184e0c1_l-5558644-images-thumbs&n=13"
                }
            },
        ]
    }
};

PrimaryDark.decorators = [styleDecorator(Theme.DARK)]