import React, {useEffect} from 'react';
import {useTranslation} from "react-i18next";

function App() {
    const {t, i18n} = useTranslation();

    useEffect(() => {
        i18n.changeLanguage();
    }, [])

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
    }

  return (
    <div>
        <h1>{t("Example")}</h1>
        <button onClick={() => handleLanguageChange('en')}>en</button>
        <button onClick={() => handleLanguageChange('ru')}>ru</button>
    </div>
  );
}

export default App;
