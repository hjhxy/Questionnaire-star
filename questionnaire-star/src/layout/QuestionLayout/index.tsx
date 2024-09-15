import React from 'react'
import styles from './index.module.scss';
import { Outlet } from 'react-router-dom';

function QuestionLayout() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                QuestionLayout header
            </div>
            {/* 展示Question页的二级路由 */}
            <div className={styles.body}>
                <Outlet />
            </div>
            <div className={styles.footer}>
                QuestionLayout footer
            </div>
        </div>
    )
}

export default QuestionLayout