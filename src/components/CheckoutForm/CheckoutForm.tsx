import styles from "./CheckoutForm.module.scss";
import Form from "./Form/Form.tsx";
import logo from "@/assets/apple-pay.svg";
import { useTranslation, Trans } from "react-i18next";

const CheckoutForm = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.checkoutForm}>
            <div className={styles.checkoutHeader}>
                <h2 className={"subtitle"}>{t("checkoutForm.title")}</h2>
                <h1 className={"title"}>{t("checkoutForm.freeTrial")}</h1>
                <p className={"text-large font-medium mb-6"}>
                    {t("checkoutForm.priceInfo")}
                </p>
            </div>

            <button className={styles.applePayBtn}>
                <img src={logo} alt={t("checkoutForm.applePayAlt")} />
            </button>

            <div className={styles.divider}>
                <hr />
                <p className={"text-medium"}>{t("checkoutForm.orPayWithCard")}</p>
                <hr />
            </div>

            <Form />

            <p className={`${styles.info} text-small`}>
                <Trans i18nKey="checkoutForm.infoText" components={{ bold: <span className="font-semibold" /> }} />
            </p>
        </div>
    );
};

export default CheckoutForm;
