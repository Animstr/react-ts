import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

export interface NotFoundPageProps {};

export const NotFoundPage = ({}: NotFoundPageProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(style.NotFoundPage)}>
            {t('PageNotFound')}
        </div>
    );
};