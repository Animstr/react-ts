import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './ArticlesPage.module.scss';
import { memo } from 'react';


const ArticlesPage = () => {

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(style.ArticlesPage, [])}>
            ARTICLES PAGE
        </div>
    );
};

export default memo(ArticlesPage)

