"use client";
import Header from "@/components/header";
import MainSection from "@/components/main/main";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";


export default function Home() {
  const [theme, setTheme] = useState("lighter")
  const toggleTheme = ()=>{
    setTheme(theme === "lighter" ? 'darker' : 'lighter')
  }
  useEffect(()=>{
    document.body.className = 'container-'+theme
  }, [theme])
  return (<div id="root" className={"container-"+theme}>
        <Header setter={toggleTheme} theme={theme}/>
        <MainSection theme={theme} />
    </div>
  );
}
