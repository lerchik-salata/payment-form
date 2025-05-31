import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPaymentSchema } from "@/validation/checkoutSchema.ts";
import FormInput from "./FormInput/FormInput.tsx";
import SubmitBtn from "./SubmitBtn/SubmitBtn.tsx";
import styles from "./Form.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type {PaymentSchema} from "@/validation/checkoutSchema.ts";

const Form = () => {
    const { t } = useTranslation();
    const paymentSchema = createPaymentSchema(t);

    const methods = useForm<PaymentSchema>({
        resolver: zodResolver(paymentSchema),
        mode: "onTouched",
        reValidateMode: "onChange",
        defaultValues: {
            cardNumber: "",
            expiry: "",
            cvc: "",
        },
    });

    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmit = async (data: PaymentSchema) => {
        if (isProcessing) return;
        setIsProcessing(true);

        setTimeout(() => {
            console.log("Payment Data:", data);
            setIsProcessing(false);
            setIsSuccess(true);
            methods.reset();
            setTimeout(() => setIsSuccess(false), 3000);
        }, 2000);
    };

    return (
        <FormProvider {...methods}>
            <div className={`${styles.snackbar} ${isSuccess && styles.active}`}>
                {t("form.snackbarSuccess")}
            </div>
            <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
                <div className={"flex flex-col gap-3"}>
                    <FormInput
                        name="cardNumber"
                        label={t("form.cardNumber")}
                        placeholder={t("form.cardPlaceholder")}
                        mask="card"
                    />
                    <div className={"flex gap-2"}>
                        <FormInput
                            name="expiry"
                            label={t("form.expiry")}
                            placeholder={t("form.expiryPlaceholder")}
                            mask="expiry"
                        />
                        <FormInput
                            name="cvc"
                            label={t("form.cvc")}
                            placeholder={t("form.cvcPlaceholder")}
                            mask="cvc"
                        />
                    </div>
                </div>
                <SubmitBtn
                    label={t("submitBtn.pay", { amount: "299.99" })}
                    isProcessing={isProcessing}
                />
            </form>
        </FormProvider>
    );
};

export default Form;
