import React from 'react'
import styles from './index.module.scss';
import { Outlet } from 'react-router-dom';

function MainLayout() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                MainLayout header
            </div>
            {/* 展示首页的二级路由 */}
            <div className={styles.body}>
                <Outlet />
            </div>
            <div className={styles.footer}>
                MainLayout footer
            </div>
        </ div>
    )
}

export default MainLayout
