import { z } from "zod";

const validateExpiryDate = (value: string) => {
    const [month, year] = value.split("/").map(Number);
    if (!month || !year) return false;

    const now = new Date();
    const expiry = new Date(2000 + year, month);
    return expiry > now;
};

export const createPaymentSchema = (t: (key: string) => string) =>
    z.object({
        cardNumber: z
            .string()
            .min(1, t("validation.cardNumberRequired"))
            .regex(/^\d{4} \d{4} \d{4} \d{4}$/, t("validation.cardNumberInvalid")),
        expiry: z
            .string()
            .min(1, t("validation.expiryRequired"))
            .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, t("validation.expiryInvalidFormat"))
            .refine(validateExpiryDate, {
                message: t("validation.expiryExpired"),
            }),
        cvc: z
            .string()
            .min(3, t("validation.cvcRequired"))
            .max(4, t("validation.cvcLength"))
            .regex(/^\d{3,4}$/, t("validation.cvcInvalid")),
    });

export type PaymentSchema = z.infer<ReturnType<typeof createPaymentSchema>>;
