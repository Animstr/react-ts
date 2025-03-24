import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './ArticlesPage.module.scss';
import { memo, useCallback } from 'react';
import { ArticleList, } from 'entity/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticlesError, getArticlesIsLoading, getArticlesView } from '../../model/selectors/articlesPageSelectors';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { Text, TextThemes } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilter } from '../ArticlesPageFilters/ArticlesPageFilter';
import { useSearchParams } from 'react-router-dom';

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
}

const ArticlesPage = () => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const view = useSelector(getArticlesView);
    const error = useSelector(getArticlesError);
    const [URLSearchParams] = useSearchParams();
    const {t} = useTranslation();
    console.log(URLSearchParams)
    useInitialEffect(() => {
        dispatch(initArticlesPage(URLSearchParams))
    })

    const onNextPage = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    },[dispatch]) 

    if (error) {
        return (
            <Text theme={TextThemes.ERROR} title={t('Something is going wrong')}/>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onNextPage} className={classNames(style.ArticlesPage, [])}>
                <ArticlesPageFilter />
                <ArticleList 
                    view={view}
                    articles={articles}
                    isLoading={isLoading}
                    className={style.articlesList}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage)

