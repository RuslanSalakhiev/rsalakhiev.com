'use client'

import styles from './page.module.css';
import Link from 'next/link';
import { useState } from 'react';


export default function Home() {

    return (
        <div className={`${styles.Container} `}>
            <div className={`${styles.Title} `}>
                <span className={styles.Title_Caption}>Hello, my name is Ruslan&nbsp;Salakhiev</span>
                <span className={styles.Title_Caption}>I am <span className={styles.Title_Caption___text_gradient}>curios</span></span>
            </div>
            <div>
                Projects: 
                <ul>
                    <li><Link href="/norm">Uzhe norm?</Link></li>
                    <li><Link href="/styleroulette">Styleroulette</Link></li>
                </ul>
            </div>
        </div>
    );
}
