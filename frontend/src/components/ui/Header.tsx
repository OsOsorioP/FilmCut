"use client"
import Link from "next/link";
import logo from "../../../public/Logo.png"
import Image from "next/image";
import { useEffect, useState } from "react";
import Session from "../auth/Session";
import { useSession } from "next-auth/react";
import { useModal } from "@/context/ModalContext";

export default function Header() {
    const [show, handleShow] = useState(false);
    const { data: session } = useSession();
    const { openModal } = useModal();

    const transitionHeader = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionHeader);
        return () => window.removeEventListener("scroll", transitionHeader)
    }, [])

    return (
        <header className={` fixed flex w-screen h-[69px] top-0 p-5 md:px-12 px-6 z-50 transition-all ease-in duration-500 ${show && "backdrop-blur-sm"} bg-[#000000]`} >
            <div className="flex justify-between w-full align-middle items-center">
                <div className="flex gap-[10px]">
                    <Link className="flex justify-center" href={"/"}>
                        <Image src={logo} alt="logo" />
                    </Link>
                    <Link href={"#popular"}>
                        <p className="hidden md:block font-[600] text-[14px] leading-[14px] align-middle text-[#F6F6F6] p-[16px]">Popular</p>
                    </Link>
                    {session ? <Link href={"/favorite"}>
                        <p className="hidden md:block font-[600] text-[14px] leading-[14px] align-middle text-[#F6F6F6] p-[16px]">Favorites</p>
                    </Link> : <Link href={""} onClick={openModal}>
                        <p className="hidden md:block font-[600] text-[14px] leading-[14px] align-middle text-[#F6F6F6] p-[16px]">Favorites</p>
                    </Link>}

                </div>

                <Session />
            </div>
        </header>
    )
}
