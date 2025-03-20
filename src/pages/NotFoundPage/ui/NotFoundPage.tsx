import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';


export const NotFoundPage = () => {
    const {t} = useTranslation();
    return (
        <Page className={classNames(style.NotFoundPage)}>
            {t('PageNotFound')}
        </Page>
    );
};