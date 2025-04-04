import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/Page";

function AboutPage () {
    const {t} = useTranslation('about');
    return (
        <Page>
            <h2>{t('about')}</h2>
        </Page>
    )
}

export default AboutPage;