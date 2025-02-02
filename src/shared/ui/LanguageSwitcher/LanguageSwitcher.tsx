import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './LanguageSwitcher.module.scss';
import { Button, ThemeButton } from '../Button/Button';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {

    const {t, i18n} = useTranslation();

    const switchLanguage = () => {
        i18n.changeLanguage( i18n.language == 'ru' ? 'en' : 'ru')
    }

    return (
        <Button 
            theme={ThemeButton.CLEAR}
            onClick={switchLanguage}
            className={classNames(style.LanguageSwitcher)}
        >
            {t('switchLanguage')}
        </Button>
    );
};