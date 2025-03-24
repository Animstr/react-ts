import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './ArticleSortSelector.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entity/Article';
import { SortOrder } from 'shared/types';

export interface ArticleSortSelectorProps {
    className?: string,
    order: SortOrder,
    sort: ArticleSortField,
    onChangeSort?: (sort: ArticleSortField) => void;
    onChangeOrder?: (order: SortOrder) => void; 
};

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const{className, order, sort, onChangeOrder, onChangeSort} = props;
    const{t} = useTranslation('articles');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('increase')
        },
        {
            value: 'desc',
            content: t('decrease')
        }       
    ], [t])

    const filterOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('creation date')
        },
        {
            value: ArticleSortField.TITLE,
            content: t('title')
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('views')
        }     
    ], [t])

    return (
        <div className={classNames(style.ArticleSortSelector, [className])}>
            <Select onChange={onChangeSort} value={sort} options={filterOptions} label={t('Sort by')}/>
            <Select onChange={onChangeOrder} value={order} options={orderOptions} label={t('by')} className={style.order}/>
        </div>
    );
});