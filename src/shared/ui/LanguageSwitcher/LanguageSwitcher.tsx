import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '../Button/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface LanguageSwitcher {
    short?: boolean,
    className?: string
}

export const LanguageSwitcher = memo(({short, className} : LanguageSwitcher) => {

    const {t, i18n} = useTranslation();

    const switchLanguage = () => {
        i18n.changeLanguage( i18n.language == 'ru' ? 'en' : 'ru')
    }

    return (
        <Button 
            theme={ButtonTheme.CLEAR}
            onClick={switchLanguage}
            className={classNames(className)}
        >
            {t(short ?'switchLanguageShort' : 'switchLanguage')}
        </Button>
    );
});