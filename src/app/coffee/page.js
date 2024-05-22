import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Coffee() {
    const products = [
        {
            "id": "1",
            "name": "Café Caseiro",
            "type": "Café Filtrado",
            "description": "Um delicioso café ao estilo brasileiro de café caseiro, coado em filtro de papel melita e com o delicioso pó de café pilão, melita ou pelé."
        },
        {
            "id": "2",
            "name": "Expresso Pequeno",
            "type": "Café Expresso",
            "description": "Um café expresso pequeno equivalente a uma dose, com o total de 50ml de café."
        }
    ]

    return (
        <div id="coffees page" className="flex min-h-screen w-[100vw] flex-col items-center justify-between overflow-x-hidden bg-amber-100/100">
            <Navbar />
            <div id="coffee catalog" className="w-[100vw] h-[100vh] flex flex-row space-x-4 mt-[2vw] justify-center">
                {products.map((item, index) => (
                    <div key={index} id="product box" className="w-[14vw] h-[16vw] border-amber-950/50 rounded-md border-[2px] flex flex-col justify-start items-center">
                        <Image
                            src="/assets/navbar/logo.svg"
                            width={0}
                            height={0}
                            className="w-[100%] h-[50%] border-b-2 border-amber-950/60 mb-2" />
                        <span key={index} className="text-amber-900 text-[1.1vw] font-semibold">{item.name}</span>
                        <span key={index} className="text-amber-900 text-[0.9vw] font-normal">Tipo: {item.type}</span>
                        <span key={index} className="text-amber-900 text-[0.8vw] font-normal">{item.description}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
