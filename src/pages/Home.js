import React, { useEffect, useState } from 'react'
import videoHero from "../videos/heroVideo.mp4"

import "../styles/Home.css"

export default function Home() {
    return (
        <div>
            <div className='HeroVideo-Container'>
                <div className='HeroVideo-Gradient'>
                    <video src={videoHero} preload="auto" autoPlay muted loop className='HeroVideo' onLoadStart={(e) => { e.target.playbackRate = 1.25; }} />
                </div>
            </div>
        </div >
    )
}
