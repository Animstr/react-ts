import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './ArticlesPage.module.scss';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entity/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { useSelector } from 'react-redux';
import { getArticlesError, getArticlesHasMore, getArticlesIsLoading, getArticlesPage, getArticlesView } from '../../model/selectors/articlesPageSelectors';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { Text, TextThemes } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
}

const ArticlesPage = () => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const view = useSelector(getArticlesView);
    const error = useSelector(getArticlesError);
    const page = useSelector(getArticlesPage);
    const hasMore = useSelector(getArticlesHasMore);
    const {t} = useTranslation();

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState())
        dispatch(fetchArticles(1))
    })

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view))
    },[dispatch])

    const onNextPage = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    },[dispatch]) 

    if (error) {
        return (
            <Text theme={TextThemes.ERROR} title={t('Something is going wrong')}/>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page onScrollEnd={onNextPage} className={classNames(style.ArticlesPage, [])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView}/>
                <ArticleList 
                    view={view}
                    articles={articles}
                    isLoading={isLoading}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage)

