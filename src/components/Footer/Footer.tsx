import styles from './Footer.module.scss';
import logo from '@/assets/logo.svg';
import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <p className={"text-medium font-medium"}>{t("powered")}</p>
            <img src={logo} alt={"logo"} />
        </footer>
    )
}

export default Footer;