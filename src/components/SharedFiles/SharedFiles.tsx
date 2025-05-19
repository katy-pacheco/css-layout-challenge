import styles from './SharedFiles.module.css';

export default function SharedFiles() {
    const files = [
        { name: 'Landing Page', created: 'Created: 20.02.2020', color: '#FF9F00', shared: 2 },
        { name: 'Illustration Pack', created: 'Created: 20.02.2020', color: '#FF9F00', shared: 3 },
        { name: 'CV Design', created: 'Created: 20.02.2020', color: '#FF9F00', shared: 2 }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.filesGrid}>
                {files.map((file) => (
                    <div key={file.name} className={styles.fileCard}>
                        <div className={styles.wrapper}>
                            <div className={styles.fileIcon} style={{ backgroundColor: file.color }} />
                            <div className={styles.sharedCircles}>
                                {[...Array(file.shared)].map((_, i) => {
                                    let strokeColor = "#CCCCCC";
                                    if (i === 0) {
                                        strokeColor = "#4AC29D";
                                    } else if (
                                        file.name === "Landing Page" || file.name === "Illustration Pack"
                                    ) {
                                        strokeColor = "#FF6860";
                                    } else {
                                        strokeColor = "#FF9F00";
                                    }
                                    return (
                                        <div key={i} className={styles.circle}>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle
                                                    cx="9"
                                                    cy="9"
                                                    r="8.5"
                                                    fill="white"
                                                    stroke={strokeColor}
                                                />
                                            </svg>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className={styles.fileInfo}>
                            <h3>{file.name}</h3>
                            <p>{file.created}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}