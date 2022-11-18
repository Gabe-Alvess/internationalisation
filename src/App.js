import './App.css';
import { useState, Suspense } from "react";
import React from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

const translationsEn = {
  welcome: 'Welcome',
  changed_one: "You changed the language {{count}} time",
  changed_other: "You changed the language {{count}} times",
};

const translationsDu = {
  welcome: 'Welkom',
  changed_one: "Je hebt de taal {{count}} keer veranderd",
  changed_other: "Je hebt de taal {{count}} keren veranderd",
};

const translationsPT = {
  welcome: 'Bem Vindo',
  changed_one: "Você mudou o idioma {{count}} vez",
  changed_other: "Você mudou o idioma {{count}} vezes",
};

i18n.use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationsEn },

      du: { translation: translationsDu },

      pt: { translation: translationsPT },
    }, lng: "en", fallbackLng: "en", interpolation: { escapeValue: false },
  });

function App() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const onChange = (event) => {
    // console.log("changed")
    i18n.changeLanguage(event.target.value)
    console.log((event.target.value))
    setCount((previousCount) => previousCount + 1);
  }
  // https://www.youtube.com/watch?v=kGFEvphB5G0
  // npm i i18next react-i18next
  return (
    <Suspense fallback="Loading">
      <div className="App">
        <header>
          <h1>{t("welcome")}</h1>
          <p>sample
            <strong>
              <i>text</i>
            </strong>
            .
          </p>
          <p>{t('changed', { count })}</p>
          <select name="language" onChange={onChange} id="languageChanger">
            <option value="en">English</option>
            <option value="du">Dutch</option>
            <option value="pt">Português</option>
          </select>
        </header>
      </div ></Suspense>
  );
}

export default App;
