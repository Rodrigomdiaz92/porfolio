"use client"
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Intro from "./HeroSection";

import { heroDataEs } from "@/data/heroData";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import { skillsDataEs } from "@/data/skillsData";



export default function Presentacion() {
  return (
    <>
    <HeroSection data={heroDataEs} />
    <Skills data={skillsDataEs} />
    </>
  );
}
