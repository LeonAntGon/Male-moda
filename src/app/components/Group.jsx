import Image from "next/image"
//import './styles/group.css'
import { Saira_Condensed } from "next/font/google"
import bggroup from "@/public/imgs/localfront.jpg"

const saira = Saira_Condensed({
    weight: "800",
    subsets:['latin'],
  })

export default function Group(){
    return(
        <section className="my-[60px] ">

            <div className="text-center item-center">
                <h4 className="text-center font-bold">GRUPO DE WHATSAPP</h4>
                <div className="inline-block relative top-[-14px] w-3 h-1 bg-gray-900 rounded-full"></div>
            </div>

            <div className="h-[400px] flex text-center justify-center items-center flex-col"
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
        </section>
    )
}