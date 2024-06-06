import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import { products } from "./data";
import { Image } from "@nextui-org/react";
import Pagestitles from "@/src/app/components/Pagestitles";

export default function Remerasmangascortas(){
    return(
        <>
        <Nav/>
        <Pagestitles text="REMERAS MANGAS CORTAS"/>

        <section className="flex flex-wrap justify-center gap-2 gap-y-[50px] mx-[10px] h-auto mt-6">
                {products.map((product) => (
                    <div className='inline-block min-w-[100px] min-h-[120px] max-w-[160px] ' key={product.id}>
                         <Image
                          className="w-full h-full rounded-md"
                          src={product.image.src}
                          alt="prenda"/>

                        <div className="[&>p]:text-center">
                            <p className=' text-xs font-bold '>{ product.title }</p>
                            <p className=' text-xs font-medium '>{ product.brand }</p>
                            <p className=' text-xs font-light '>{ product.price }</p>
                        </div>
                    </div>
                ))}
            </section>
            
        <Footer/>
        </>
    )
}