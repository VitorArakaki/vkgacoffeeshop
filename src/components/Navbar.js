'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

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

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsSticky(offset > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const imageUrl = null;
    const user = null;

    return (
        <div
            className={`flex flex-row relative w-full justify-between items-center border-b-[1px] border-solid border-amber-950 bg-amber-950/60 overflow-x-hidden ${isSticky ? "sticky top-0 z-50" : ""
                }`}
            style={{ position: isSticky ? "fixed" : "relative", top: 0, width: "100%" }}
        >
            <Image
                id="Logo"
                width={0}
                height={0}
                src="/assets/navbar/logo.svg"
                className="pl-[1vw] w-[4vw] max-h-[4vh]"
            />
            {isMobile ? (
                <div id="MenuItems" className="flex flex-row h-[10vw] w-[80vw] max-w-[80vw] items-center justify-between pr-[1vw]">
                    <Link
                        href="/"
                        className="text-[3vw] hover:underline hover:text-[4vw] hover:font-bold"
                    >
                        <span>Inicio</span>
                    </Link>
                    <Link
                        href="/coffee"
                        className="text-[3vw] hover:underline hover:text-[4vw] hover:font-bold"
                    >
                        <span>Cafés</span>
                    </Link>
                    <Link
                        href="/explanations"
                        className="text-[3vw] hover:underline hover:text-[4vw] hover:font-bold"
                    >
                        <span>Explicações</span>
                    </Link>
                    <div id="profile">
                        <Link
                            href={user !== null ? `/profile/${user.name}` : "/signin"}
                        >
                            <Image
                                id="avatar"
                                src={imageUrl !== null ? imageUrl : "/assets/navbar/avatar.svg"}
                                width={0}
                                height={0}
                                className="border-2 rounded-full w-[4vw] h-[4vw]"
                            />
                        </Link>
                    </div>
                </div>
            ) : (
                <div id="MenuItems" className="flex flex-row min-w-[15vw] max-w-[50vw] items-center justify-between pr-[1vw]">
                    <Link
                        href="/"
                        className="text-[0.8vw] hover:underline hover:text-[1vw] hover:font-bold"
                    >
                        <span>Inicio</span>
                    </Link>
                    <Link
                        href="/coffee"
                        className="text-[0.8vw] hover:underline hover:text-[1vw] hover:font-bold"
                    >
                        <span>Cafés</span>
                    </Link>
                    <Link
                        href="/explanations"
                        className="text-[0.8vw] hover:underline hover:text-[1vw] hover:font-bold"
                    >
                        <span>Explicações</span>
                    </Link>
                    <div id="profile">
                        <Link
                            href={user !== null ? `/profile/${user.name}` : "/signin"}
                        >
                            <Image
                                id="avatar"
                                src={imageUrl !== null ? imageUrl : "/assets/navbar/avatar.svg"}
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
