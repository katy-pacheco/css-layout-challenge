import Sidebar from "../Sidebar/Sidebar";
import StorageIndicator from "../StorageIndicator/StorageIndicator";
import styles from "../Layout/Layout.module.css";
import rectangleGray from '../../assets/icons/rectangleGray.svg';


import type { ReactNode } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import FilesTable from "../FilesTable/FilesTable";
import SharedFiles from "../SharedFiles/SharedFiles";

type LayoutProps = {
    children?: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.layout}>
            <Sidebar />
            <div className={styles.contentArea}>
                <main className={styles.main}>
                    {children}
                    <div className={styles.recentlySection}>
                        <h2>Recently Used</h2>
                        <div className={styles.wrappedIcon}>
                            <img src={rectangleGray} alt="recently project" />
                            <img src={rectangleGray} alt="recently project" />
                        </div>
                    </div>
                    <ProjectCard />
                    <div>
                        <div className={styles.filesProject}>
                            <h2>Recent Files</h2>
                            <p>View All</p>
                        </div>
                        <FilesTable />
                    </div>
                    <div>
                        <div className={styles.filesProject}>
                            <h2>Share with me</h2>
                            <p>View All</p>
                        </div>
                        <SharedFiles />
                    </div>

                </main>
            </div>
            <StorageIndicator percentage={85} usedSpace={420.2} totalSpace={500} />
        </div>
    )
}