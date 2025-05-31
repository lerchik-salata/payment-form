import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import arrow from "@/assets/arrow.svg";
import LangSwitcher from "./LangSwitcher/LangSwitcher.tsx";
import {useTranslation} from "react-i18next";

const Header = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <header className={styles.header}>
            <button onClick={() => navigate(-1)} className={styles.backBtn}>
                <img src={arrow} alt={t("back")}/>
            </button>
            <LangSwitcher />
        </header>
    );
};

export default Header;
