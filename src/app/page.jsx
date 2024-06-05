"use client"
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Whatsup from "./components/Whatsup";
import Info from "./components/Info";

export default function Home() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Info />
      <Whatsup/>
      <Footer/>   
    </>
  );
}
