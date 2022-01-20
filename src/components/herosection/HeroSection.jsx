import React, { useEffect } from 'react'
import "./HeroSection.css"

const HeroSection = ({ loaded }) => {

    useEffect(() => {
        console.log(loaded)
    }, [loaded]);

    return (
        <div className='hero-wrapper'>
            <div className="hero-ttl-wrapper ">
                <p className={loaded ? "hero-ttl" : 'hero-ttl-anim'} style={{ fontFamily: "MyFont" }}>ARKLET</p>
            </div>
        </div>
    )
}

export default HeroSection
