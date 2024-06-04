import bg from '@/public/bg-hero-2.jpg';
import { Saira_Stencil_One } from 'next/font/google';
import '../styles/strokes.css'

const sairastn = Saira_Stencil_One({
        weight: "400",
        subsets:['latin'],
    })


export default function Hero(){
    return(
        <main className="mt-[65px] h-[240px] w-full">
            <div 
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%', // Ajusta la altura según sea necesario
                width: '100%' // Ajusta el ancho según sea necesario
            }}
            className=''>
                <div className='w-full h-full flex items-center justify-center '>
                <h1 className={` text-center text-[24px] text-gray-200 text-shadow ${sairastn.className}`}>INDUMENTARIA FEMENINA</h1>
                </div>
                
            </div>
        </main>
    )
}
