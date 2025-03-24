import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './ArticleList.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';

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
        isLoading
    } = props;
    const{t} = useTranslation('articles');
 
    const renderItems = (article: Article) => (
        <ArticleListItem key={article.id} article={article} view={view} className={style.card}/>
    )

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames('', [className, style[view]])}>
                <Text title={t('No articles yet')} size={TextSize.L}/>
            </div>
        )
    }

    return (
        <div className={classNames('', [className, style[view]])}>
            {
                articles.length
                    ?  articles?.map(renderItems)
                    : null
            }
            {isLoading && ( 
                new Array( view == ArticleView.SMALL ? 12 : 3)
                    .fill(0)
                    .map((skeleton, index) => <ArticleListItemSkeleton key={index} view={view}/>)
            )}
        </div>
    );
});