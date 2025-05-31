import { useTranslation } from "react-i18next";
import styles from "./LangSwitcher.module.scss";

const LangSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className={styles.langSwitcher}>
            <button
                onClick={() => changeLanguage("en")}
                className={`${styles.lang} ${i18n.language === "en" ? styles.active : ""}`}
            >
                Eng
            </button>
            <button
                onClick={() => changeLanguage("uk")}
                className={`${styles.lang} ${i18n.language === "uk" ? styles.active : ""}`}
            >
                Укр
            </button>
        </div>
    );
};

export default LangSwitcher;
