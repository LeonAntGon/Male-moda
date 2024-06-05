import Image from "next/image"
//import './styles/group.css'
import { Saira_Condensed } from "next/font/google"
import bggroup from "@/public/imgs/localfront.jpg"

const saira = Saira_Condensed({
    weight: "800",
    subsets:['latin'],
  })

export default function Info(){
    return(
        <section className="mt-[80px] max-w-[640px] mx-auto">

            <section className="text-center item-center">
                <h4 className="text-center font-bold">GRUPO DE WHATSAPP</h4>
                <div className="inline-block relative top-[-14px] w-3 h-1 bg-gray-900 rounded-full"></div>
            </section>

            <div className="h-[400px] flex text-center justify-center items-center flex-col shadow-gray-400 "
            style={{
                backgroundImage: `url(${bggroup.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',                 
            }}>
                <p className={`text-[26px] font-semibold pt-6 pb-2 ${saira.className}`}
                style={{
                    color: 'whitesmoke',
                    WebkitTextStrokeWidth: '1px',
                    WebkitTextStrokeColor: '#000000',
                }}>ÚNETE A NUESTRO GRUPO DE <span className="text-green-200">WHATS UP</span></p>
                <p className={`titletwo text-[22px] font-semibold pt-2 pb-2 ${saira.className}`}
                style={{
                    color: '#FECDFF',
                    WebkitTextStrokeWidth: '1px',
                    WebkitTextStrokeColor: '#000000',
                }}>💎NUEVOS INGRESOS + PRECIOS ESPECIALES💎</p>
                
                <svg xmlns="http://www.w3.org/2000/svg" className=" my-10 icon icon-tabler icon-tabler-brand-whatsapp" width="84" height="84" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
                
                <div className="h-[60px] w-[150px] ">
                    
                    <a className={`bg-[#FECDFF] h-full w-full py-[5px] px-6 text-black mt-[60px] rounded-md
                     shadow-black shadow-md ${saira.className}`}
                    href="https://chat.whatsapp.com/EV38eity48w5gC1Wc86XEY"
                    target="_blank" 
                    rel="noopener noreferrer"                    
                    >IR AL GRUPO</a>
                    
                </div>
                
            </div>

            <section className="mt-[45px] mb-[30px]">
                <h3 className="text-center font-bold mt-6">Visitanos</h3>
                <div className="mt-[40px] h-[300px] flex justify-center items-center bg-black">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3561.940584704566!2d-65.20843282307773!3d-26.778163807552176!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d007f5e7baf%3A0x253c52d52d94a146!2sMale%20Moda!5e0!3m2!1sen!2sar!4v1717619705023!5m2!1sen!2sar"
                title="Mapa"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-[90%] h-[95%]"
                ></iframe>
                </div>
                <div className="text-center mt-6">
                    <p>Las Talitas calle 6 nº</p>
                    <p>Tucumán | Argentina</p></div>
                
                    
            </section>
        </section>
    )
}