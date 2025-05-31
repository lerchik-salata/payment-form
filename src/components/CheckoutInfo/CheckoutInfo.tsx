import styles from "./CheckoutInfo.module.scss";
import { useTranslation } from "react-i18next";

const CheckoutInfo = () => {
    const { t } = useTranslation();

    return (
        <aside className={styles.orderInfo}>
            <p className={"subtitle"}>{t("checkout.title")}</p>
            <div className={"mt-6"}>
                <p className={"text-medium font-medium"}>{t("checkout.descriptionLabel")}</p>
                <hr />
                <p className={"text-medium font-medium"}>{t("checkout.productTitle")}</p>
                <p className={"text-small text-light"}>{t("checkout.productSubtitle")}</p>
                <hr />
                <div className={styles.orderPrice}>
                    <p className={"text-large font-semibold"}>{t("checkout.priceFree")}</p>
                    <p className={"text-medium"}>{t("checkout.priceAfter")}</p>
                </div>
            </div>
        </aside>
    );
};

export default CheckoutInfo;