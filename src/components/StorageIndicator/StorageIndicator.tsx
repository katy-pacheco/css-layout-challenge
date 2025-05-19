import styles from './StorageIndicator.module.css';
import circleIcon from '../../assets/icons/circle.svg';
import squareIcon from '../../assets/icons/square.svg';
import CategoryItem from '../CategoryItem/CategoryItem';
import UpgradeCard from '../UpgradeCard/UpgradeCard';

interface StorageIndicatorProps {
    percentage: number;
    usedSpace: number;
    totalSpace: number;
}

export default function StorageIndicator({ percentage, usedSpace, totalSpace }: StorageIndicatorProps) {
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const strokeWidth = 6;

    const storageData = {
        used: 420.2,
        total: 500,
        percentage: 85,
        categories: [
            { id: 1, name: 'Documents', files: 720, size: 200, color: '#FF9500' },
            { id: 2, name: 'Documents', files: 720, size: 125, color: '#3B82F6' },
            { id: 3, name: 'Documents', files: 720, size: 75, color: '#10B981' },
            { id: 4, name: 'Documents', files: 720, size: 50, color: '#D1D5DB' },
        ]
    };

    const segments = [
        { start: 0, end: 15, color: '#10B981' },
        { start: 16, end: 56, color: '#FF9500' },
        { start: 57, end: 72, color: '#D1D5DB' },
        { start: 73, end: 100, color: '#3B82F6' }
    ];


    const gapSize = 15;
    const numSegments = segments.length;
    const totalGap = gapSize * numSegments;
    const effectiveCircumference = circumference - totalGap;
    let currentOffset = 0;


    return (
        <div className={styles.containerWrapper}>
            <div className={styles.container}>
                <div className={styles.profileContent}>
                    <div className={styles.profileIcons}>
                        <img src={squareIcon} alt="profile icon" />
                        <img src={squareIcon} alt="profile icon" />
                    </div>
                    <div className={styles.profile}>
                        <span>Name</span>
                        <img src={circleIcon} alt="profile" />
                    </div>
                </div>
                <hr className={styles.separator} />
                <p className={styles.title}>Storage</p>
                <div className={styles.indicator}>
                    <svg width="180" height="180" viewBox="0 0 160 160">
                        <circle
                            cx="80"
                            cy="80"
                            r={radius - 10}
                            fill="#FFFFFF"
                            strokeWidth={strokeWidth}
                        />

                        {segments.map((segment, index) => {
                            const percentageSpan = (segment.end - segment.start) / 100;
                            const segmentLength = percentageSpan * effectiveCircumference;

                            const circleProps = {
                                cx: 80,
                                cy: 80,
                                r: radius,
                                fill: 'none',
                                stroke: segment.color,
                                strokeWidth: strokeWidth,
                                strokeDasharray: `${segmentLength} ${circumference - segmentLength}`,
                                strokeDashoffset: -currentOffset,
                                transform: 'rotate(-90, 80, 80)',
                                strokeLinecap: 'round' as 'round',
                            };

                            currentOffset += segmentLength + gapSize;

                            return <circle key={index} {...circleProps} />;
                        })}

                        <text
                            x="72"
                            y="72"
                            textAnchor="middle"
                            fontSize="18"
                            fill="#343951"
                        >
                            {percentage}
                        </text>
                        <text
                            x="93"
                            y="72"
                            textAnchor="middle"
                            fontSize="14"
                            fill="#343951"
                        >
                            %
                        </text>
                        <text
                            x="80"
                            y="96"
                            textAnchor="middle"
                            fontSize="14"
                            fill="#858A9D"
                        >
                            Used
                        </text>
                    </svg>
                </div>
                <div className={styles.details}>
                    <span>{usedSpace} GB of {totalSpace} GB used</span>
                </div>
                <div className={styles.categories}>
                    {storageData.categories.map(category => (
                        <CategoryItem
                            key={category.id}
                            name={category.name}
                            files={category.files}
                            size={category.size}
                            color={category.color}
                        />
                    ))}
                </div>

                <div className={styles.upgradeWrapper}>
                    <UpgradeCard />
                </div>
            </div>
        </div>

    );
};
