import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

export const PageError = () => {
    const reloadPage = () => {
        location.reload()
    }
    const {t} = useTranslation();
    return (
        <div className={classNames(style.PageError, [])}>
            {t('Something is going wrong')} <br/>
            <Button onClick={reloadPage}>{t('Reload page')}</Button>
        </div>
    );
};