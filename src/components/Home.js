import React, { useEffect, useState } from 'react'
import videoHero from "../videos/heroVideo.mp4"

import "../styles/Home.css"

export default function Home() {
    return (
        <div>
            <div className='HeroVideo-Container'>
                <video src={videoHero} preload="auto" autoPlay muted className='HeroVideo' onLoadStart={(e) => { e.target.playbackRate = 1.25; }} />
            </div>
        </div >
    )
}
