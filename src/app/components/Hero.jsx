import bg from '@/public/bg-hero-2.jpg';
import { Saira_Stencil_One, Saira_Condensed } from 'next/font/google';
import '../styles/hero.css'
import Link from 'next/link'
import remera from '@/public/sections/remera.jpg';
import pants from '@/public/sections/jean.jpg';
import campera from '@/public/sections/camperas.jpg';
import sweater from '@/public/sections/sweater.jpg';
import dress  from '@/public/sections/vestidos.jpg';
import shorts from '@/public/sections/pollera.jpg';

const saira = Saira_Condensed({
    weight: "700",
    subsets:['latin'],
})

const sairastn = Saira_Stencil_One({
        weight: "400",
        subsets:['latin'],
    })


export default function Hero(){
    return(
        <main className="mt-[65px]  ">
            <div
            className= " h-[240px] w-full sm:h-[300px] md:h-[350px] " 
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                 // Ajusta el ancho según sea necesario
            }}
>

                <div className='w-full h-full flex items-center justify-center '>
                <h1 className={` text-center text-[24px] text-gray-200 text-shadow ${sairastn.className}`}>INDUMENTARIA FEMENINA</h1>
                </div>
                
            </div>

            <section>
                <div className='bg-black h-[30px] my-[25px] flex justify-center items-center '>
                    <h2 className='text-gray-100 text-center text-[16px] font-bold '>CATÁLOGO</h2>
                </div>

                <div className='container mt-4 mx-auto'>
                
                    <Link href="/remeras">
                        <div className="cont1"
                        style={{ backgroundImage: `url(${remera.src})`}}>
                            <section className='imgcontainer h-[60px] rounded-lg'>
                            <h6 className={` text-center text-[30px] p-2  ${saira.className}`}>REMERAS & TOP</h6>
                            </section>
                        
                        </div>
                    </Link>
                    
                    <Link href="/pantalonesyjeans">
                    <div className="cont2"
                    style={{ backgroundImage: `url(${pants.src})`}}>
                        <section className='imgcontainer h-[60px] rounded-lg'>
                            <h6 className={` text-center text-[30px] p-2  ${saira.className}`}>PANTALONES & JEANS</h6>
                        </section>
                        
                    </div>
                    </Link>

                    <Link href="/camperas">
                    <div className="cont3"
                    style={{ backgroundImage: `url(${campera.src})`}}>
                        <section className='imgcontainer h-[60px] rounded-lg'>
                            <h6 className={` text-center text-[30px] p-2  ${saira.className}`}>CAMPERAS</h6>
                        </section>
                        
                    </div>
                    </Link>

                    <Link href="/sweaters">
                    <div className="cont4"
                    style={{ backgroundImage: `url(${sweater.src})`}}>
                        <section className='imgcontainer h-[60px] rounded-lg'>
                            <h6 className={` text-center text-[30px] p-2  ${saira.className}`}>SWEATERS</h6>
                        </section>
                        
                    </div>
                    </Link>
                    <Link href="/conjuntos">
                    <div className="cont5"
                    style={{ backgroundImage: `url(${dress.src})`}}>
                        <section className='imgcontainer h-[60px] rounded-lg'>
                        <h6 className={` text-center text-[30px] p-2  ${saira.className}`}>VESTIDOS</h6>
                        </section>
                        
                    </div>
                    </Link>
                    <Link href="/vestidos">
                    <div className="cont6"
                    style={{ backgroundImage: `url(${shorts.src})`}}>
                        <section className='imgcontainer h-[60px] rounded-lg'>
                            <h6 className={` text-center text-[30px] p-2  ${saira.className}`}>POLLERAS & SHORTS</h6>
                        </section>
                        
                    </div>
                    </Link>
            </div>

            </section>
        </main>
    )
}
