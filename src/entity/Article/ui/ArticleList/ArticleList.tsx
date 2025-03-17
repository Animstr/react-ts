import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './ArticleList.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

export interface ArticleListProps {
    className?: string,
    articles: Article[],
    view: ArticleView,
    isLoading?: boolean
};

export const ArticleList = memo((props: ArticleListProps) => {
    const{
        className,
        articles,
        view,
        isLoading = true
    } = props;
    const{t} = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames('', [className, style[view]])}>
                { 
                    new Array( view == ArticleView.SMALL ? 9 : 3)
                        .fill(0)
                        .map((skeleton, index) => <ArticleListItemSkeleton key={index} view={view}/>)
                }
            </div>
        )
    }
 
    const renderItems = (article: Article) => (
        <ArticleListItem key={article.id} article={article} view={view} className={style.card}/>
    )

    return (
        <div className={classNames('', [className, style[view]])}>
            {
                articles.length
                    ?  articles?.map(renderItems)
                    : null
            }
        </div>
    );
});