import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

export interface ArticleDetailsPageProps {};

const ArticleDetailsPage = ({}: ArticleDetailsPageProps) => {
    const{t} = useTranslation('articles');

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(style.ArticleDetailsPage, [])}>
            ARTICLES DETAILS
        </div>
    );
};

export default memo(ArticleDetailsPage)