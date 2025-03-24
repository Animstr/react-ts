import { User } from "entity/User";

export enum ArticleBlockType {
    CODE = "CODE",
    TEXT = "TEXT",
    IMAGE = "IMAGE",
}

export enum ArticleType {
    ALL = "ALL",
    IT = "IT",
    SCIENCE = "SCIENCE",
    ECONOMIC = "ECONOMICS",
}

export enum ArticleView {
    BIG = "BIG",
    SMALL = "SMALL"
}

export interface ArticleBlockCode {
    id: string,
    type: ArticleBlockType.CODE,
    code: string,
}

export interface ArticleBlockImage {
    id: string,
    type: ArticleBlockType.IMAGE,
    src: string,
    title: string,
}

export interface ArticleBlockText {
    id: string,
    type: ArticleBlockType.TEXT,
    title: string,
    paragraphs: string[],
}

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt' 
}

export type ArticleBlock = ArticleBlockText | ArticleBlockImage | ArticleBlockCode 

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    user: User;
    type: ArticleType[];
    blocks: ArticleBlock[];
}