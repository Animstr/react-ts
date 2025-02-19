import { useTranslation } from 'react-i18next';


function MainPage () {
    const {t} = useTranslation()

    return (
        <>
            <h1 data-testId='main-page' >{t('mainPage')}</h1>
        </>
    )
}

export default MainPage;