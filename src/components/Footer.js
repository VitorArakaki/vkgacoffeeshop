'use client'

import Link from "next/link"
import { useState, useEffect } from "react";

export default function Footer() {
    const [isMobile, setIsMobile] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        setIsMobile(windowWidth < 1100);
    }, [windowWidth]);
    return (
        <>
            {isMobile ? (
                <div id="footer" className="flex flex-row justify-center items-center w-[100vw] h-[10vw] border-t-[1px] border-amber-950 mt-[3vw] overflow-x-hidden text-[2.2vw] text-black">
                    Developed by _<Link href="https://www.linkedin.com/in/vitor-arakaki/">Vitor Guirardeli Arakaki</Link>
                </div>
            ) :
                (
                    <div id="footer" className="flex flex-row justify-center items-center w-[100vw] h-[5vw] border-t-[1px] border-amber-950 mt-[3vw] overflow-x-hidden text-[0.8vw] text-black">
                        Developed by _<Link href="https://www.linkedin.com/in/vitor-arakaki/">Vitor Guirardeli Arakaki</Link>
                    </div>
                )
            }
        </>
    )
}