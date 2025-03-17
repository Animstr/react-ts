import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './ArticleListItem.module.scss';
import { memo } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { ArticleView } from '../../model/types/article';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

export interface ArticleListItemSkeletonProps {
    className?: string,
    view: ArticleView
};

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const{
        className,
        view = ArticleView.SMALL,
    } = props;

    if (view == ArticleView.BIG) {

        return (
            <div className={classNames('', [className, style[view]])}>
                <Card>
                    <div className={style.header}>
                        <Skeleton width={30} height={30} border='50%' />
                        <Skeleton width={150} height={16} className={style.username}/>
                        <Skeleton width={150} height={16} className={style.date}/>
                    </div>
                    <Skeleton width={250} height={24} className={style.title}/>
                    <Skeleton  width={'100%'} height={200} className={style.img}/>
                    <div className={style.footer}>
                        <Skeleton width={200} height={36}/>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames('', [className, style[view]])}>
            <Card>
                <div className={style.cardWrapper}>
                    <Skeleton width={200} height={200} className={style.img}/>
                </div>
                <div className={style.infoWrapper}>
                    <Skeleton width={130} height={16}/>
                </div>
                <Skeleton width={150} height={16} className={style.title}/>
            </Card>
        </div>
    );
});