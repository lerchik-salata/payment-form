import { type InputHTMLAttributes } from "react";
import { useFormContext, Controller } from "react-hook-form";
import Cleave from "cleave.js/react";
import styles from "./FormInput.module.scss";
import InfoTooltip from "./InfoTooltip/InfoTooltip.tsx";
import { useTranslation } from "react-i18next";

type Props = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label: string;
    mask?: "card" | "expiry" | "cvc";
};

const FormInput = ({ name, label, mask, ...rest }: Props) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    const { t } = useTranslation();

    const getOptions = () => {
        switch (mask) {
            case "card":
                return { blocks: [4, 4, 4, 4], numericOnly: true, delimiter: " " };
            case "expiry":
                return { date: true, datePattern: ["m", "y"] };
            case "cvc":
                return { numericOnly: true, blocks: [3] };
            default:
                return {};
        }
    };

    const hasError = !!errors[name];

    return (
        <div className={styles.formInput}>
            <label className={"text-small font-medium mb-1"}>{label}</label>
            <div className={styles.inputWrapper}>
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <Cleave
                            {...field}
                            options={getOptions()}
                            onChange={(e) => field.onChange(e.target.value)}
                            className={`${styles.input} ${hasError ? styles.inputError : ""}`}
                            {...rest}
                        />
                    )}
                />
                {mask === "cvc" && (
                    <InfoTooltip text={t("formInput.cvcTooltip")} />
                )}
            </div>
            {hasError && (
                <p className={styles.error}>
                    {(errors[name] as any).message}
                </p>
            )}
        </div>
    );
};

export default FormInput;
