import * as styles from './mainpage.module.scss';
import { useTranslation } from 'react-i18next';

function MainPage () {
    const {t} = useTranslation()

    return (
        <>
            <h1>{t('mainPage')}</h1>
        </>
    )
}

export default MainPage;