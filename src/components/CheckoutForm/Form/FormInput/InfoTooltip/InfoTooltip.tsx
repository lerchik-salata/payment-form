import styles from "./InfoTooltip.module.scss";
import info from "@/assets/info.svg";

const InfoTooltip = ({ text }: { text: string }) => (
    <div className={styles.infoWrapper}>
        <button type="button" className={styles.infoBtn} title={text}>
            <img src={info} alt="Info" />
        </button>
        <div className={styles.info}>{text}</div>
    </div>
);

export default InfoTooltip;
