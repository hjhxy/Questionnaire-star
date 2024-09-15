import React from 'react'
import styles from './index.module.scss';
import { useNavigate, Link } from 'react-router-dom';

function Home() {
    const navigator = useNavigate();

    const handlerNavigate = () => {
        navigator('/login');
    }
    return (
        <div className={styles.container}>
            <button onClick={handlerNavigate}>跳转</button>
            <Link to={'/login'}>跳转</Link>
        </div>
    )
}

export default Home