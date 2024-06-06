"use client"
import React from "react";
import { Navbar, MobileNav,Typography,Button,IconButton,Card,} from "@material-tailwind/react";
import logo from '@/public/logo.png';
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const toggleDivVisibility = () => {
    setOpenNav(!openNav);   
  };
 
  const navList = (
    <ul className={`flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6 bg-black tb-2 ${openNav ? 'block' : 'hidden'}`}>
       <hr className="border-t-[1px] border-gray-300 h-0.5 w-full my-[2px]" />
      <Typography as="li" variant="small" color="blue-gray" className="font-normal">
       
        <Link href="/" className="flex items-center text-white hover:text-rose-300">
          INICIO
        </Link>
      </Typography>
      <hr className="border-t-[1px] border-gray-300 h-0.5 w-full my-[2px]" />
      <Typography as="li" variant="small" color="blue-gray" className="font-normal">
       
        <Link href="/pages/remeras" 
        className="flex items-center text-white hover:text-rose-300 hover:font-semibold">
          REMERAS
        </Link>

      </Typography>
      <hr className="border-t-[1px] border-gray-300 h-0.5 w-full my-[2px]" />
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/pages/pantalonesyjeans" 
        className="flex items-center text-white hover:text-rose-300 hover:font-semibold">
          PANTALONES & JEANS
        </Link>
        
      </Typography>
      <hr className="border-t-[1px] border-gray-300 h-0.5 w-full my-[2px]" />
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal "
      >
        <Link href="/pages/camperas" 
        className="flex items-center text-white hover:text-rose-300 hover:font-semibold">
          CAMPERAS
        </Link>

      </Typography>
      <hr className="border-t-[1px] border-gray-300 h-0.5 w-full my-[2px]" />
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/pages/sweaters" 
        className="flex items-center text-white hover:text-rose-300 hover:font-semibold">
          SWEATERS
        </Link>
      </Typography>
      <hr className="border-t-[1px] border-gray-300 h-0.5 w-full my-[2px]" />
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/pages/vestidos" 
        className="flex items-center text-white hover:text-rose-300 hover:font-semibold">
        VESTIDOS
        </Link>
      </Typography>
      <hr className="border-t-[1px] border-gray-300 h-0.5 w-full my-[2px]" />
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/pollerasyshorts" 
        className="flex items-center text-white hover:text-rose-300 hover:font-semibold">
          POLLERAS & SHORTS
        </Link>
      </Typography>
      <hr className="border-t-[1px] border-gray-300 h-0.5 w-full my-[2px]" />
    </ul>
  );
 
  return (
    <header className=" w-full z-20">
      <Navbar className="bg-black fixed top-0 z-10 max-w-full h-[65px] rounded-none ">


        <div className="grid lg:grid-cols-2 lg:grid-template-columns[auto-auto] text-blue-gray-900"
         style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
      }}>            
          <div className="block lg:hidden "></div>
          <div className="h-[65px] flex items-center justify-center">
            <Image src={logo} className="h-[60px] w-[120px] z-10"  alt="logo"/>
          </div>
          
          <div className="hidden lg:block"></div>
          <div className="flex items-center justify-end gap-4">
            <div className="mr-4 hidden lg:block text-center">{navList}</div>
            <div className="flex items-center gap-x-1">
              
            </div>
            <IconButton
              variant="text"
              className="mr-4 ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (                
                <svg width="30px" height="30px" stroke-width="1.2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 5H21" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12H21" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 19H21" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              )}
            </IconButton>
          </div>
          
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>

    </header>
  );
}
