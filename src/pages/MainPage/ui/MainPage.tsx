import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';


function MainPage () {
    const {t} = useTranslation()

    return (
        <Page>
            <h1 data-testId='main-page' >{t('mainPage')}</h1>
        </Page>
    )
}

export default MainPage;