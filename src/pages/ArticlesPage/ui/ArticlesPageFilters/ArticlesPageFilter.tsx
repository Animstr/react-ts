import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './ArticlesPageFilter.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleSortField, ArticleSortSelector, ArticleType, ArticleView, ArticleViewSelector } from 'entity/Article';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticlesOrder, getArticlesSearch, getArticlesSort, getArticlesType, getArticlesView } from '../../model/selectors/articlesPageSelectors';
import { Input } from 'shared/ui/Input/Input';
import { Card } from 'shared/ui/Card/Card';
import { SortOrder } from 'shared/types';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { TabItem } from 'shared/ui/Tabs/Tabs';
import { ArticleTypeTabs } from 'entity/Article';

export interface ArticlesPageFilterProps {
    className?: string
};

export const ArticlesPageFilter = memo((props: ArticlesPageFilterProps) => {
    const{className} = props;
    const{t} = useTranslation('articles');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesView);
    const order = useSelector(getArticlesOrder);
    const sort = useSelector(getArticlesSort);
    const search = useSelector(getArticlesSearch);
    const type = useSelector(getArticlesType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticles({replace: true}))
    }, [dispatch])

     
    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view))
    },[dispatch])

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageActions.setOrder(order))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    },[dispatch, fetchData])

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(sort))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    },[dispatch, fetchData])

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search))
        dispatch(articlesPageActions.setPage(1))
        debouncedFetchData()
    }, [dispatch, debouncedFetchData])

    const onChangeType = useCallback((tab: ArticleType) => {
        dispatch(articlesPageActions.setType(tab))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    return (
        <div className={classNames('', [className])}>
            <div className={style.sortWrapper}> 
                <ArticleSortSelector 
                    order={order} 
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}/>
                <ArticleViewSelector view={view} onViewClick={onChangeView}/>
            </div>
            <Card className={style.card}>
                <Input value={search} onChange={onChangeSearch} placeholder={t('Search')} />
            </Card>
            <ArticleTypeTabs value={type} callback={onChangeType} className={style.tabs}/>
        </div>
    );
});