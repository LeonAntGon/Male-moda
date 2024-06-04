import bg from '@/public/bg-hero.jpg'

export default function Hero(){
    return(
        <main className="mt-[84px] h-[240px] w-full">
            <div 
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%', // Ajusta la altura según sea necesario
                width: '100%' // Ajusta el ancho según sea necesario
            }}
            className=''></div>
        </main>
    )
}
