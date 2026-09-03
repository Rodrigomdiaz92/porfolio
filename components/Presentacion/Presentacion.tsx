"use client"
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Intro from "./HeroSection";


import HeroSection from "./HeroSection";
import Skills from "./Skills";

import { useLanguage } from "@/context/LanguageContext";



export default function Presentacion() {
  const { heroData,skillsData } = useLanguage();
  return (
    <>
    <HeroSection data={heroData} />
    <Skills data={skillsData} />
    </>
  );
}
