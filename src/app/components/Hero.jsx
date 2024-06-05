import bg from '@/public/bg-hero-2.jpg';
import { Saira_Stencil_One, Saira_Condensed } from 'next/font/google';
import '../styles/hero.css'
import Link from 'next/link'


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

                <div className='container mt-4'>
                
                    <Link href="/remeras">
                        <div className="cont1">
                        <h4 className={saira.className}>REMERAS & TOP</h4>
                        </div>
                    </Link>
                    
                    <Link href="/pantalonesyjeans">
                    <div className="cont2">
                        <h4 className={saira.className}>PANTALONES & JEANS</h4>
                    </div>
                    </Link>

                    <Link href="/camperas">
                    <div className="cont3">
                        <h4 className={saira.className}>CAMPERAS</h4>
                    </div>
                    </Link>

                    <Link href="/sweaters">
                    <div className="cont4">
                        <h4 className={saira.className}>SWEATERS</h4>
                    </div>
                    </Link>
                    <Link href="/conjuntos">
                    <div className="cont5">
                        <h4 className={saira.className}>VESTIDOS</h4>
                    </div>
                    </Link>
                    <Link href="/vestidos">
                    <div className="cont6">
                        <h4 className={saira.className}>POLLERAS & SHORTS</h4>
                    </div>
                    </Link>
            </div>

            </section>
        </main>
    )
}
