import type { Meta, StoryObj } from '@storybook/react';
import {  ArticleType, ArticleView } from 'entity/Article/model/types/article';
import { ArticleListItem } from './ArticleListItem';

const meta = {
    title: 'entity/Article/ArticleListItem',
    component: ArticleListItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = {
    id: "1",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    views: 1022,
    createdAt: "26.02.2022",
    user : {
        'id': 1,
        'username': 'admin'
    },
    type: [ArticleType.IT],
    blocks: []
};

export const Small: Story = {
    args:{
        article: data,
        view: ArticleView.SMALL
    }
};

export const Big: Story = {
    args:{
        article: data,
        view: ArticleView.BIG
    }
};