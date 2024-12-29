'use client'

import { useEffect, useRef } from "react"
import "./slider.css"
import { ArrowLeft, ArrowRight, Indent } from "lucide-react"
import { HomeCard } from "./card"
import Link from "next/link"
import { pastEvents } from "@/data/pastEvents";

export default function Slider() {

    const style1 = {
        backgroundImage: "linear-gradient(180deg, #0f1019 0%, #212125 90%)"
    }
    const style2 = {
        backgroundImage: "red"
    }
    const style3 = {
        backgroundImage: "url(https://i.ibb.co/qCkd9jS/img1.jpg)"
    }
    const style4 = {
        backgroundImage: "url(https://i.ibb.co/jrRb11q/img2.jpg)"
    }
    const style5 = {
        backgroundImage: "uurl(https://i.ibb.co/NSwVv8D/img3.jpg)"
    }
    const style6 = {
        backgroundImage: "url(https://i.ibb.co/Bq4Q0M8/img4.jpg)"
    }
    const style7 = {
        backgroundImage: "url(https://i.ibb.co/jTQfmTq/img5.jpg)"
    }
    const style8 = {
        backgroundImage: "url(https://i.ibb.co/RNkk6L0/img6.jpg)"
    }

    // const [index, setIndex] = useState(0);
    const slideRef = useRef(null);

   const data = pastEvents.slice(0,5);

    
    const handleNext = () => {
        if (slideRef.current) {
            //@ts-ignore
            const items = slideRef.current.querySelectorAll('.item');
            //@ts-ignore
            slideRef.current.appendChild(items[0]);
        }
    };

    const handlePrev = () => {
        if (slideRef.current) {
            //@ts-ignore
            const items = slideRef.current.querySelectorAll('.item');
            //@ts-ignore
            slideRef.current.prepend(items[items.length - 1]);
        }
    };

    useEffect(() => {
        
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container h-auto" style={style1}>
            <div className="bg-1"></div>
            <div className="left2">
                <div className="flex flex-row gap-2">
                    <div className="header">G<span className="samkaran">ALLERY</span></div>
                </div>
            </div>
            <div className="right2 flex">
                <div className="container-gallery" style={style2}>
                    <div className="slide" ref={slideRef}>
                        {
                            data.map((slider, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="item"
                                        style={{
                                            backgroundImage: `url(${slider.image})`
                                        }}
                                    >
                                        <div className="content">
                                            <div className="name">{slider.shortTitle}</div>
                                            <div className="des">{slider.shortDescription}</div>
                                            <button> <Link href="/gallery">See More</Link> </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="button">
                        <button className="prev" onClick={handlePrev}><ArrowLeft color="black" size={22} /></button>
                        <button className="next" onClick={handleNext}><ArrowRight color="black" size={22} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}