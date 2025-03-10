import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entity/Article';
import { useParams } from 'react-router-dom';

const ArticleDetailsPage = () => {
    const{t} = useTranslation('articles');
    let {id} = useParams<{id: string }>();
    if (__PROJECT__ == 'storybook') {
        id = '1';
    }
    if (!id) {
        return (
            <div className={classNames(style.ArticleDetailsPage, [])}>
                {t('Article is not found')}
            </div>
        )
    }

    return (
        <div className={classNames(style.ArticleDetailsPage, [])}>
            <ArticleDetails id={id}/>
        </div>
    );
};

export default memo(ArticleDetailsPage)