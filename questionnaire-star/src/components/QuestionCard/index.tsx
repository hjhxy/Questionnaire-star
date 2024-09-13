import React, { FC } from 'react'
import styles from './index.module.scss';

interface Iprop {
    _id: number,
    title: string,
    isPublished: boolean,
    isStar: boolean,
    answerCount: number,
    createAt: string,
}

const QuestionCard: FC<Iprop> = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.left}>{props.title}</div>
                <div className={styles.right}>
                    <span>{props.isPublished ? '已发布' : '未发布'}</span>
                    <span>答卷：{props.answerCount}</span>
                    <span>{props.createAt}</span>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.left}>
                    <span>编辑问卷</span>
                    <span>数据统计</span>
                </div>
                <div className={styles.right}>
                    <span>标星</span>
                    <span>复制</span>
                    <span>删除</span>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard;