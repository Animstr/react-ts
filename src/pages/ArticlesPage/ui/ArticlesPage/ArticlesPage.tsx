import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './ArticlesPage.module.scss';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entity/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticles } from '../../model/services/fetchArticles';
import { useSelector } from 'react-redux';
import { getArticlesError, getArticlesIsLoading, getArticlesView } from '../../model/selectors/articlesPageSelectors';

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
}

const ArticlesPage = () => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const view = useSelector(getArticlesView);
    const error = useSelector(getArticlesError);

    useInitialEffect(() => {
        dispatch(fetchArticles())
        dispatch(articlesPageActions.initState())
    })

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view))
    },[dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(style.ArticlesPage, [])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView}/>
                <ArticleList 
                    view={view}
                    articles={articles}
                    isLoading={isLoading}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage)

