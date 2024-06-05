"use client"
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Whatsup from "./components/Whatsup";
import Group from "./components/Group";

export default function Home() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Group />
      <Whatsup/>
      <Footer/>   
    </>
  );
}
