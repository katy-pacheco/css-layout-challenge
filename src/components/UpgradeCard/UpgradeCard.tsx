import styles from '../UpgradeCard/UpgradeCard.module.css';

export default function UpgradeCard() {
    return (
        <div className={styles.container}>
            <div className={styles.gradient}></div>
            <p className={styles.title}>Buy more space now!</p>
            <p className={styles.subtitle}>Upgrade to cloud premium</p>

            <button className={styles.upgradeButton}>
                Upgrade Account!
            </button>
        </div>
    )
}