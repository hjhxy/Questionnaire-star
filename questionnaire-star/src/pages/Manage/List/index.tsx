import React, { FC, useState } from 'react';
import styles from './index.module.scss';
import QuestionCard from '../../../components/QuestionCard'

const List: FC = () => {
    const [questionList, setQuestionList] = useState([
        {
            _id: 1,
            title: '新建问卷01',
            isPublished: false,
            isStar: false,
            answerCount: 7,
            createAt: '2024年3月20日 13:20:00'
        },
        {
            _id: 2,
            title: '新建问卷02',
            isPublished: false,
            isStar: false,
            answerCount: 7,
            createAt: '2024年3月20日 13:20:00'
        }
    ])
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                问卷的header
            </div>
            <div className={styles.body}>
                {questionList.map(q => (
                    <div className={styles.card} key={q._id}>
                        <QuestionCard  {...q} />
                    </div>
                ))}
            </div>
            <div className={styles.footer}>
                问卷的footer
            </div>
        </div>
    )
}


export default List;