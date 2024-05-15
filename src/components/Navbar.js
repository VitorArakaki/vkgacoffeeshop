'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

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
        setIsMobile(windowWidth < 1400);
    }, [windowWidth]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const imageUrl = null
    const user = null

    return (
        <div className="flex flex-row relative h-[5vh] w-[100vw] justify-between items-center border-b-[1px] border-solid border-amber-950 bg-amber-950/60">
            <Image
                id="Logo"
                width={0}
                height={0}
                src="/assets/logo.svg"
                className="pl-[1vw] w-[4vw] max-h-[4vh]"
            />
            {isMobile ? (
                <div id="MobileMenu" className="flex flex-col items-center relative">
                    <div className="cursor-pointer pr-[2vw]" onClick={toggleMenu}>
                        <div className={`w-6 h-px bg-black mb-1 ${isOpen ? "rotate-45 translate-y-1" : ""}`} />
                        <div className={`w-6 h-px bg-black mb-1 ${isOpen ? "opacity-0" : ""}`} />
                        <div className={`w-6 h-px bg-black mb-1 ${isOpen ? "-rotate-45 -translate-y-1" : ""}`} />
                    </div>
                    {isOpen && (
                        <div className="absolute top-12 right-0 bg-white border border-black p-4">
                            <Link href="/" className="block mb-2 text-black hover:underline hover:font-bold">Inicio</Link>
                            <Link href="/coffee" className="block mb-2 text-black hover:underline hover:font-bold">Cafés</Link>
                            <Link href="/explanations" className="block mb-2 text-black hover:underline hover:font-bold">Explicações</Link>
                            <Link href={user !== null ? `/profile/${user.name}` : "/signin"}>
                                <img
                                    id="avatar"
                                    src={imageUrl !== null ? imageUrl : "/assets/avatar.svg"}
                                    className="border-2 rounded-xl w-[2vw] h-[2vw]"
                                    alt="User Avatar"
                                />
                            </Link>
                        </div>
                    )}
                </div>

            ) : (
                <div id="Menu Items" className="flex flex-row min-w-[15vw] max-w-[50vw] items-center justify-between pr-[1vw]">
                    <Link href="/" className="text-[0.8vw] hover:underline hover:text-[1vw] hover:font-bold"><span>Inicio</span></Link>
                    <Link href="/coffee" className="text-[0.8vw] hover:underline hover:text-[1vw] hover:font-bold"><span>Cafés</span></Link>
                    <Link href="/explanations" className="text-[0.8vw] hover:underline hover:text-[1vw] hover:font-bold"><span>Explicações</span></Link>

                    <div id="profile">
                        <Link href={user !== null ? `/profile/${user.name}` : "/signin"} >
                            <Image
                                id="avatar"
                                src={imageUrl !== null ? imageUrl : "/assets/avatar.svg"}
                                width={0}
                                height={0}
                                className="border-2 rounded-xl w-[2vw] h-[2vw]"
                            />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}