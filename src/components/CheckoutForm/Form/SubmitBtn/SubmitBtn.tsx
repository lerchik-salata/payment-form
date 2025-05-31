import styles from './SubmitBtn.module.scss';
import loader from '@/assets/loader.svg';
import { useTranslation } from 'react-i18next';

type Props = {
    label: string;
    isProcessing: boolean;
};

const SubmitBtn = ({ label, isProcessing }: Props) => {
    const { t } = useTranslation();

    return (
        <button
            type="submit"
            className={`${styles.paymentButton} ${isProcessing ? styles.processing : ''}`}
            disabled={isProcessing}
        >
            <span className={styles.paymentText}>{label}</span>
            <span className={styles.processingText}>{t('submitBtn.processing')}</span>
            {isProcessing && (
                <span className={styles.spinner}>
                    <img src={loader} alt={t('submitBtn.loadingAlt')} className={styles.spinnerSvg} />
                </span>
            )}
        </button>
    );
};

export default SubmitBtn;