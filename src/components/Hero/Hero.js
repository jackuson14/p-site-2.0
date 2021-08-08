import React, {useState} from 'react';
import { useEffect, useRef } from "react";
import { Section2, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { SectionBody } from './HeroStyles';
import Typed from 'typed.js';
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

const Hero = (props) => {
    const el = useRef(null);
    const [width, setWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 0
    );
    const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
    return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
    };
    }, []);
    let isMobile = width <= 768 ? true : false;
    useEffect(() => {
        const typed = new Typed(el.current, {
        strings: ["Junior Software Developer", "Computer Science Student", "Hobby photographer"], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 1000,
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        cursorChar: '_',
        loop: true
        });
    
        // Destroying
        return () => {
        typed.destroy();
        };
    }, []);
    return(
    <Section2 center>
        <div style={{color: '#fff',position: 'absolute',zIndex: '2',width: '100%', paddingTop:'10vh'}}>
            <SectionBody>
            Hi, I'm Jackson. <br />
            <span style={{ fontFamily: 'Roboto Slab', fontStyle:'italic', fontSize:'4.5rem'}} ref={el}></span>
            </SectionBody>
            <br />

            {isMobile ? null : 
            <Link href="#projects">
            <a style={{background: 'transparent', color: 'inherit', border: '0px', padding: 0, cursor: 'pointer', outline: 'inherit'}} >
                <ArrowWithAnimation />
            </a>
            </Link>}
        </div>
        <Carousel autoPlay infiniteLoop showArrows={false} showStatus={false} showIndicators={false} showThumbs={false}>
        <div>
        <img src="/images/slide1.jpg" style={{width: '100%', height: '75vh',objectFit: 'cover',backgroundSize: 'cover',opacity: '0.5'}}/>
        </div>
        <div>
        <img src="/images/slide2.jpg"  style={{width: '100%', height: '75vh',objectFit: 'cover',backgroundSize: 'cover',opacity: '0.5'}}/>
        </div>
        <div>
        <img src="/images/slide3.jpg"  style={{width: '100%', height: '75vh',objectFit: 'cover',backgroundSize: 'cover',opacity: '0.5'}}/>
        </div>
        <div>
        <img src="/images/slide4.jpg"  style={{width: '100%', height: '75vh',objectFit: 'cover',backgroundSize: 'cover',opacity: '0.5'}}/>
        </div>
        </Carousel>
        
    </Section2>
    );
}

const ArrowWithAnimation = () => (
    <div className="ico animated">
        <div className="circle circle-top" />
        <div className="circle circle-main" />
        <div className="circle circle-bottom" />
        <svg
        className="svg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 612 612"
        style={{ enableBackground: "new 0 0 612 612" }}
        xmlSpace="preserve"
        >
        <defs>
            <clipPath id="cut-off-arrow">
            <circle cx={306} cy={306} r={287} />
            </clipPath>
            <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
            <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
            </filter>
        </defs>
        <path
            className="st-arrow"
            d="M317.5,487.6c0.3-0.3,0.4-0.7,0.7-1.1l112.6-112.6c6.3-6.3,6.3-16.5,0-22.7c-6.3-6.3-16.5-6.3-22.7,0
                        l-86,86V136.1c0-8.9-7.3-16.2-16.2-16.2c-8.9,0-16.2,7.3-16.2,16.2v301.1l-86-86c-6.3-6.3-16.5-6.3-22.7,0
                        c-6.3,6.3-6.3,16.5,0,22.7l112.7,112.7c0.3,0.3,0.4,0.7,0.7,1c0.5,0.5,1.2,0.5,1.7,0.9c1.7,1.4,3.6,2.3,5.6,2.9
                        c0.8,0.2,1.5,0.4,2.3,0.4C308.8,492.6,313.8,491.3,317.5,487.6z"
        />
        </svg>
    </div>
)

export default Hero;