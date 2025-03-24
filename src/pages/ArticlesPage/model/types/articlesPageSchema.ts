import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entity/Article";
import { ArticleSortField, ArticleType } from "entity/Article";
import { SortOrder } from "shared/types";


export interface ArticlesPageSchema extends EntityState<Article, string>{
    isLoading?: boolean,
    error?: string,

    //pagination
    page: number,
    limit: number,
    hasMore: boolean,
    //filters
    view: ArticleView,
    order: SortOrder,
    sort: ArticleSortField,
    search: string,
    type: ArticleType
    
    _inited: boolean
}