export default function Footer(){
    return(
    <footer className="mt-[80px]">
        
        <div className="flex">
        <div class="w-full h-[0.5px] Altura de la línea bg-gray-400 my-[12px]"></div>
            <h3 className="text-[16px] font-bold px-2">Nosotros</h3>
            <div class="w-full h-[0.5px] Altura de la línea bg-gray-400 my-[12px]"></div>
        </div>
        
        <div className="flex mx-auto justify-evenly my-[20px]">
            <div>Realizamos envíos</div>

            <div>
            <svg width="30px" height="30px" stroke-width="1.2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M8 19C9.10457 19 10 18.1046 10 17C10 15.8954 9.10457 15 8 15C6.89543 15 6 15.8954 6 17C6 18.1046 6.89543 19 8 19Z" stroke="#000000" stroke-width="1.2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 19C19.1046 19 20 18.1046 20 17C20 15.8954 19.1046 15 18 15C16.8954 15 16 15.8954 16 17C16 18.1046 16.8954 19 18 19Z" stroke="#000000" stroke-width="1.2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.05 17H15V6.6C15 6.26863 14.7314 6 14.4 6H1" stroke="#000000" stroke-width="1.2" stroke-linecap="round"></path><path d="M5.65 17H3.6C3.26863 17 3 16.7314 3 16.4V11.5" stroke="#000000" stroke-width="1.2" stroke-linecap="round"></path><path d="M2 9L6 9" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 9H20.6101C20.8472 9 21.0621 9.13964 21.1584 9.35632L22.9483 13.3836C22.9824 13.4604 23 13.5434 23 13.6273V16.4C23 16.7314 22.7314 17 22.4 17H20.5" stroke="#000000" stroke-width="1.2" stroke-linecap="round"></path><path d="M15 17H16" stroke="#000000" stroke-width="1.2" stroke-linecap="round"></path></svg>
            </div>
        </div>

        <div>
            
            <h3 className="text-center text-[16px] font-bold px-2">Siguenos</h3>
            
            <div className="flex mx-4 justify-center my-[25px]">
            <a>
            <div className="pr-4 cursor-pointer">
                <svg  className="[&>path]:hover:stroke-blue-700" width="30px" height="30px" stroke-width="1.2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                <path  d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
            </a>

           <a href="https://www.instagram.com/male_moda1"></a>
            <div className="pl-4 cursor-pointer">
                <svg className="[&>path]:hover:stroke-violet-700" width="30px" height="30px" stroke-width="1.2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="#000000" stroke-width="1.2"></path><path d="M17.5 6.51L17.51 6.49889" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
        </div>
            </div>
            
    </footer>
    )
}