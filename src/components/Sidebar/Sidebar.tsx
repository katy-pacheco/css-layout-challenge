import unionIcon from '../../assets/icons/union.svg';
import rectangleWhite from '../../assets/icons/rectangle.svg';
import rectangleGray from '../../assets/icons/rectangleGray.svg';
import styles from './Sidebar.module.css';
import { useState } from 'react';

export default function Sidebar() {
    const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Home');

    const menuItems = [
        { label: 'Home' },
        { label: 'My Files' },
        { label: 'Recent Files' },
        { label: 'Shared Files' },
        { label: 'File Request' },
        { label: 'Trash' },
    ];

    const createOptions = [
        { label: 'Upload files' },
        { label: 'Upload folder' },
        { label: 'New folder' },
        { label: 'More' },
    ];

    const toggleCreateMenu = () => {
        setIsCreateMenuOpen(!isCreateMenuOpen);
    };

    const handleMenuItemClick = (label: string) => {
        setActiveItem(label);
    };

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarContent}>
                <div className={styles.gradient}></div>

                <nav className={styles.navigation}>
                    {menuItems.map((item) => (
                        <a
                            key={item.label}
                            href="#"
                            className={`${styles.menuItem} ${activeItem === item.label ? styles.active : ''}`}
                            onClick={() => handleMenuItemClick(item.label)}
                        >
                            {activeItem === item.label && <div className={styles.leftIndicator}></div>}
                            <div className={styles.iconContainer}>
                                <img src={rectangleGray} alt="rectangle" className={styles.rectangleIcon} />
                                <img src={rectangleWhite} alt="rectangle" className={styles.rectangleIconHover} />
                            </div>
                            <span>{item.label}</span>
                        </a>
                    ))}
                </nav>

                <div className={styles.createSection}>
                    {isCreateMenuOpen && (
                        <div className={styles.options}>
                            {createOptions.map((option) => (
                                <a key={option.label} href="#" className={styles.createOption}>
                                    <div className={styles.iconContainer}>
                                        <img src={rectangleWhite} alt="rectangle" className={styles.rectangleIcon} />
                                        <img src={rectangleGray} alt="rectangle" className={styles.rectangleIconHover} />
                                    </div>
                                    <span className={styles.createOptionLabel}>{option.label}</span>
                                </a>
                            ))}
                        </div>
                    )}
                    <button className={styles.createButton} onClick={toggleCreateMenu}>
                        Create Now
                        <div className={styles.iconWrapper}>
                            <img src={unionIcon} alt="create new" className={styles.unionIcon} />
                        </div>
                    </button>
                </div>
            </div>
        </aside>
    );
}