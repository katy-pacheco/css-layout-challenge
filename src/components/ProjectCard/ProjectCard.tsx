import styles from '../ProjectCard/ProjectCard.module.css';
import projectIcon from '../../assets/icons/projectIcon.svg';
import projectCircle from '../../assets/icons/projectCircle.svg';
import moreIcon from '../../assets/icons/moreIcon.svg';

export default function ProjectCard() {
    const projectItems = [
        { name: 'App Project', created: 'Created: 20.02.2020' },
        { name: 'Project: fitbit', created: 'Created: 28.02.2020' },
        { name: 'Client Documents', created: 'Created: 4.03.2020' }
    ]

    return (
        <div className={styles.projectCard}>
            {
                projectItems.map((project) => (
                    <div key={project.name} className={styles.container}>
                        <div className={styles.headerIcons}>
                            <img src={projectIcon} alt="project icon" className={styles.projectIcon} />
                            <div className={styles.iconWrapper}>
                                <img src={projectCircle} alt="project circle" className={styles.baseIcon} />
                                <img src={projectCircle} alt="project circle" className={styles.overlayIcon} />
                            </div>
                            <img src={moreIcon} alt="more project" className={styles.moreIcon} />
                        </div>

                        <div className={styles.content}>
                            <h4 className={styles.title}>{project.name}</h4>
                            <p className={styles.created}>{project.created}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}