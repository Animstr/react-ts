import { useTranslation } from "react-i18next";

function AboutPage () {
    const {t} = useTranslation('about');
    return (
        <>
            <h2>{t('about')}</h2>
        </>
    )
}

export default AboutPage;