import styles from '../CategoryItem/CategoryItem.module.css';

interface CategoryItemProps {
    name: string;
    files: number;
    size: number;
    color: string;
}

export default function CategoryItem({
    name,
    files,
    size,
    color
}: CategoryItemProps) {
    return (
        <>
            <div className={styles.categoryItem}>
                <div className={styles.iconContainer} style={{ backgroundColor: color }}>
                </div>
                <div className={styles.details}>
                    <div className={styles.nameRow}>
                        <span className={styles.name}>{name}</span>
                        <span className={styles.size}>{size} GB</span>
                    </div>
                    <div className={styles.filesCount}>
                        {files.toLocaleString()} files
                    </div>
                </div>
            </div>
            <hr className={styles.separator} />
        </>
    );
};