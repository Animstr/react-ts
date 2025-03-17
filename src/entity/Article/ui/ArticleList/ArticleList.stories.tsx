import type { Meta, StoryObj } from '@storybook/react';
import {  ArticleType, ArticleView } from 'entity/Article/model/types/article';
import { ArticleList } from './ArticleList';

const meta = {
    title: 'entity/Article/ArticleList',
    component: ArticleList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof ArticleList>;

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
        articles: [data, data, data, data],
        view: ArticleView.SMALL,
        isLoading: false
    }
};

export const SmallIsLoading: Story = {
    args:{
        articles: [data, data, data, data],
        view: ArticleView.SMALL,
        isLoading: true
    }
};

export const Big: Story = {
    args:{
        articles: [data, data, data, data],
        view: ArticleView.BIG,
        isLoading: false
    }
};

export const BigIsLoading: Story = {
    args:{
        articles: [data, data, data, data],
        view: ArticleView.BIG,
        isLoading: true
    }
};