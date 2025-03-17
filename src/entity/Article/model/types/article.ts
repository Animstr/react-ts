import { User } from "entity/User";

export enum ArticleBlockType {
    CODE = "CODE",
    TEXT = "TEXT",
    IMAGE = "IMAGE",
}

export enum ArticleType {
    IT = "IT",
    SCIENCE = "SCIENCE",
    ECONOMIC = "ECONOMIC",
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