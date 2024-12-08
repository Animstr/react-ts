import { useState } from "react";

import * as styles from './mainpage.module.scss';

function MainPage () {
    const [count, setCount]= useState(0);

    const increase = () => {
        setCount(count + 1)
    }

    return (
        <>
            <h1>{count}</h1>
            <button className={styles.btn} onClick={increase}>increase</button>
        </>
    )
}

export default MainPage;