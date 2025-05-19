import styles from '../FilesTable/FilesTable.module.css';
import ellipsis from '../../assets/icons/ellipsisHorizontal.svg';

export default function FilesTable() {
    const files = [
        { name: 'Travel Landing Page', members: '5 members', lastModified: 'Mar 8, 2020', color: '#FF9F00' },
        { name: 'True Photos', members: '12 members', lastModified: 'Mar 8, 2020', color: '#4AC29D' },
        { name: 'Dashboard Structure', members: '10 members', lastModified: 'Mar 9, 2020', color: '#FF6860' },
        { name: 'Character Illustration', members: '3 members', lastModified: 'Mar 10, 2020', color: '#FF9F00' },
    ]
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Members</td>
                        <td>Last Modified</td>
                    </tr>
                </thead>
                <tbody>
                    {files.map((file) => (
                        <tr key={file.name} className={styles.row}>
                            <td>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="21" height="21" rx="5" fill={file.color} />
                                </svg>
                                {file.name}
                            </td>
                            <td>{file.members}</td>
                            <td>{file.lastModified}</td>
                            <td><img src={ellipsis} alt="more files" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}