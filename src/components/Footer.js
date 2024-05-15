import Link from "next/link"

export default function Footer() {
    return (
        <div id="footer" className="flex flex-row justify-center items-center w-[100vw] h-[5vw] border-t-[1px] border-amber-950 mt-[3vw] overflow-x-hidden text-[0.8vw] text-black">
            Developed by _<Link href="https://www.linkedin.com/in/vitor-arakaki/">Vitor Guirardeli Arakaki</Link>
        </div>
    )
}