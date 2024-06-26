import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Pagestitles from "../../components/Pagestitles";
import { products } from "./data";
import { productstwo } from "./data2";
import { Image } from "@nextui-org/react";

export default function Tops(){
    return(
        <>
        <Nav/>
        <Pagestitles text="TOPS"/>
        <div className='bg-black h-[30px] my-[25px] flex justify-center items-center '>
                    <h2 className='text-gray-100 text-center text-[16px] font-bold '>NUEVOS INGRESOS</h2>
        </div>

        <section className="flex flex-wrap justify-center gap-2 gap-y-[50px] mx-[10px] h-auto mt-6">
        
                {productstwo.map((product) => (
                    <div className='inline-block min-w-[100px] min-h-[120px] max-w-[160px] ' key={product.id}>
                         <img
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

        <section className="flex flex-wrap justify-center gap-2 gap-y-[50px] mx-[10px] h-auto mt-6">
                {products.map((product) => (
                    <div className='inline-block min-w-[100px] min-h-[120px] max-w-[160px] ' key={product.id}>
                         <img
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