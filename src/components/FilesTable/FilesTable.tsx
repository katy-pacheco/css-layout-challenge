import styles from './FilesTable.module.css';
import ellipsis from '../../assets/icons/ellipsisHorizontal.svg';

export default function FilesTable() {
    const files = [
        { name: 'Travel Landing Page', members: '5 members', lastModified: 'Mar 8, 2020', color: '#FF9F00' },
        { name: 'True Photos', members: '12 members', lastModified: 'Mar 8, 2020', color: '#4AC29D' },
        { name: 'Dashboard Structure', members: '10 members', lastModified: 'Mar 9, 2020', color: '#FF6860' },
        { name: 'Character Illustration', members: '3 members', lastModified: 'Mar 10, 2020', color: '#FF9F00' },
    ];

    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.headerRow}>
                        <th className={styles.headerCell}>Name</th>
                        <th className={styles.headerCell}>Members</th>
                        <th className={styles.headerCell}>Last Modified</th>
                        <th className={styles.actionHeader}></th>
                    </tr>
                </thead>
                <tbody>
                    {files.map((file) => (
                        <tr key={file.name} className={styles.row}>
                            <td className={styles.nameCell}>
                                <div className={styles.nameContainer}>
                                    <div className={styles.iconContainer}>
                                        <div
                                            className={styles.icon}
                                            style={{ backgroundColor: file.color }}
                                        />
                                    </div>
                                    <span className={styles.fileName}>{file.name}</span>
                                </div>
                            </td>
                            <td className={styles.membersCell}>{file.members}</td>
                            <td className={styles.dateCell}>{file.lastModified}</td>
                            <td className={styles.actionsCell}>
                                <button className={styles.actionButton}>
                                    <img src={ellipsis} alt="More options" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}