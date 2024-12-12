"use client"

import Link from "next/link";
import logo from "../../public/Logo.png"
import logoSession from "../../public/Frame.png"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
    const [show,handleShow] = useState(false);
    const transitionHeader = () =>{
        if (window.scrollY > 100) {
            handleShow(true)
        }else{
            handleShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", transitionHeader);
        return () => window.removeEventListener("scroll", transitionHeader)
    },[])

    return (
        <header className={` fixed flex w-full h-[69px] top-0 p-5 md:px-12 px-6 z-50 transition-all ease-in duration-500 ${show && "backdrop-blur-sm"} bg-[#000000]`} >
            <div className="flex justify-between align-middle items-center">
                <Link href={"/"}>
                    <Image src={logo} alt="logo" />
                </Link>

                <Image className="cursor-pointer fixed right-5 " src={logoSession} alt="avatar" />
            </div>
        </header>
    )
}
