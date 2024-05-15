'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

export default function About() {
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
                <div id="about" className="flex h-max mt-[3vw] w-[100vw] flex-col justify-center items-center">
                    <span id="section title" className="flex w-[90%] justify-start items-center pb-[2vw] text-[10vw] text-amber-600 font-semibold">
                        Sobre
                    </span>
                    <div id="about section text" className="flex flex-col justify-center items-center w-[90%] max-h-max border-2 border-amber-500/80 rounded-md">
                        <div id="xicara image" className="flex flex-col justify-center items-center m-[2vw] w-[50%]">
                            <Image
                                src="/assets/home/xicara.svg"
                                width={0}
                                height={0}
                                className=" w-[70%]"
                            />
                        </div>
                        <span id="about text" className="text-amber-800 text-justify text-[4vw] m-[2vw] w-[90%]">
                            Essa página surgiu com a ideia de disponibilizar um menu de café para todos que nos visitarem em nossa casinha. Tudo começou por que nós somos apaixonados em café(apesar da Katlyn ainda tomar café com açucar...) e o Vitor gosta demais de fazer café de todos os tipos e com isso adquiriu diversas máquinas e formas de se fazer café com o tempo e então com isso surgiu a ideia... Por que não deixar nossas visitas entretidas com essa paixão que temos e fazermos um "Home Coffee Shop" para nossas amadas visitas, e assim surgiu este café.
                        </span>
                    </div>
                </div>
            ) : (
                <div id="about" className="flex h-max mt-[3vw] w-[100vw] flex-col justify-center items-center">
                    <span id="section title" className="flex w-[90%] justify-start items-center pb-[2vw] text-[2vw] text-amber-600 font-semibold">
                        Sobre
                    </span>
                    <div id="about section text" className="flex flex-row justify-center items-center w-[50%] max-h-max border-2 border-amber-500/80 rounded-md">
                        <div id="xicara image" className="flex flex-col justify-center items-center m-2 w-[50%]">
                            <Image
                                src="/assets/home/xicara.svg"
                                width={0}
                                height={0}
                                className=" w-[50%]"
                            />
                        </div>
                        <span id="about text" className="text-amber-800 text-justify text-[0.9vw] m-2 w-[50%]">
                            Essa página surgiu com a ideia de disponibilizar um menu de café para todos que nos visitarem em nossa casinha. Tudo começou por que nós somos apaixonados em café(apesar da Katlyn ainda tomar café com açucar...) e o Vitor gosta demais de fazer café de todos os tipos e com isso adquiriu diversas máquinas e formas de se fazer café com o tempo e então com isso surgiu a ideia... Por que não deixar nossas visitas entretidas com essa paixão que temos e fazermos um "Home Coffee Shop" para nossas amadas visitas, e assim surgiu este café.
                        </span>
                    </div>
                </div>
            )}
        </>
    )
}