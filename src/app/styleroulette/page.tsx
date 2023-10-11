'use client';

import { useEffect, useState } from 'react';
import style from './page.module.css';
import Image from 'next/image'

const PICTURE_PARAMS = {
    '11:15': {
        width: 220,
        height: 300,
    }
}

type AspectRatios = '11:15'



function App() {

    const frameImageContainers = ['1','2','3','4','5','6'];
    const frameImageContainersCnt = frameImageContainers.length  
    const aspectRatio: AspectRatios = '11:15'

    return (
        <div className={style.body}>
        <div className={style.page}>
            <h1 className={style.title}>Насмотренность</h1>
            <div className={style.container}>
                <div className={style.frameContainer}>
                        {frameImageContainers.map((container,i) => {
                            return (<div 
                                className={style.frameImageContainer} 
                                key={container} 

                                >
                                <img  src={`/styleroulette/${Math.round(Math.random()*10) +1}.png`} alt="gallery" />
                                <img  src={`/styleroulette/${Math.round(Math.random() * 10) + 1}.png`} alt="gallery" />
                                <img  src={`/styleroulette/${Math.round(Math.random() * 10) + 1}.png`} alt="gallery" />
                                </div>)
                        })}
                 </div>
            </div>
        </div>
        </div>
    );
}

export default App;
