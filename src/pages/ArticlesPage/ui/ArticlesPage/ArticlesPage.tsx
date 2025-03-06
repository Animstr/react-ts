import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './ArticlesPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

export interface ArticlesPageProps {};

const ArticlesPage = ({}: ArticlesPageProps) => {
    const{t} = useTranslation('articles');

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(style.ArticlesPage, [])}>
            ARTICLES PAGE
        </div>
    );
};

export default memo(ArticlesPage)

