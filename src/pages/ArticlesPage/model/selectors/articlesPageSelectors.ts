import { StateSchema } from "app/providers/StoreProvider";
import { ArticleSortField, ArticleType, ArticleView } from "entity/Article";

export const getArticlesIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false

export const getArticlesError = (state: StateSchema) => state.articlesPage?.error

export const getArticlesView = (state: StateSchema) => state.articlesPage?.view || ArticleView.BIG

export const getArticlesPage = (state: StateSchema) => state.articlesPage?.page || 1

export const getArticlesLimit = (state: StateSchema) => state.articlesPage?.limit

export const getArticlesHasMore = (state: StateSchema) => state.articlesPage?.hasMore

export const getArticlesInited = (state: StateSchema) => state.articlesPage?._inited

export const getArticlesOrder = (state: StateSchema) => state.articlesPage?.order || 'asc'

export const getArticlesSort = (state: StateSchema) => state.articlesPage?.sort || ArticleSortField.CREATED

export const getArticlesSearch = (state: StateSchema) => state.articlesPage?.search || ''

export const getArticlesType = (state: StateSchema) => state.articlesPage?.type || ArticleType.ALL