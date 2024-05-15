import Link from "next/link";

export default function Banner() {
    return (
        <div className="bg-[url('/assets/home/coffee.png')] mt-[2vw] h-[50vh] border-b-[1px] border-solid border-amber-950">
            <div className="isolate px-6 pt-14 lg:px-8">
                <div className="absolute inset-x-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                </div>
                <div className="mx-auto w-[100vw]">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-black/10 hover:ring-gray-900/20 bg-amber-950/50">
                            Veja nossa mais nova receita  <Link href="#" className="font-semibold text-grey/70"><span className="absolute inset-0" aria-hidden="true"></span> Ver mais <span aria-hidden="true">&rarr;</span></Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-orange-400 sm:text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Home Coffee Shop</h1>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href="/coffee" className="rounded-md bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Ver cafés</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}