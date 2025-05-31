import CheckoutForm from "@/components/CheckoutForm/CheckoutForm.tsx";
import CheckoutInfo from "@/components/CheckoutInfo/CheckoutInfo.tsx";
import styles from "./CheckoutPage.module.scss";

const CheckoutPage = () => {
    return (
        <main className={styles.checkoutPage}>
            <CheckoutForm/>
            <CheckoutInfo/>
        </main>
    )
}

export default CheckoutPage;