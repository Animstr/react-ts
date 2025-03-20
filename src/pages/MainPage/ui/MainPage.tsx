import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';


function MainPage () {
    const {t} = useTranslation()

    return (
        <Page>
            <h1 data-testid='main-page' >{t('mainPage')}</h1>
        </Page>
    )
}

export default MainPage;