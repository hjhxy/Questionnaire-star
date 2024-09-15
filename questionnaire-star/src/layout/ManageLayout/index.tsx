import React from 'react'
import styles from './index.module.scss';
import { Outlet } from 'react-router-dom';

function ManagerLayout() {
    return (
        <div className={styles.container}>
            <div className="header">
                ManagerLayout header
            </div>
            {/* 展示管理页的二级路由 */}
            <div className={styles.body}>
                <Outlet />
            </div>
            <div className={styles.footer}>
                ManagerLayout footer
            </div>
        </div>
    )
}

export default ManagerLayout