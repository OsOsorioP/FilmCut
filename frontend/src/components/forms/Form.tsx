"use client"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { CircleArrowLeft } from "lucide-react"

import Image from "next/image";

import characterLogin from "../../../public/character01.png"
import characterRegister from "../../../public/character02.png"

import FormRegister from "./FormRegister"
import FormLogin from "./FormLogin"
import { useState } from "react";
import { useModal } from "@/context/ModalContext";

export default function Form() {

    const [value, setValue] = useState("login");
    const { closeModal } = useModal();

    const handleTabChange = (newValue: string) => {
        setValue(newValue);
    };

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between gap-[20px] w-full h-full">

                <Tabs
                    defaultValue="login"
                    value={value}
                    onValueChange={handleTabChange}
                    className="flex flex-col md:gap-[20px] text-center w-full md:w-full h-full text-[#F6F6F6]"
                >
                    <div className="flex gap-[7px] cursor-pointer h-[10%] md:w-fit">
                        <div className="flex gap-[7px] cursor-pointer items-center h-[10%] md:w-fit"
                        onClick={closeModal}>
                        <CircleArrowLeft />
                        <p>Back</p>
                        </div>
                    </div>
                    

                    <div className="flex justify-center h-[10%]">
                        <TabsList className="fixed flex flex-row justify-center bg-[#262626] w-max h-[46px] text-[#F6F6F6] ">
                            <TabsTrigger value="register" onClick={() => (setValue("register"))} className="data-[state=active]:bg-[#F0B90B] data-[state=active]:text-[#F6F6F6] w-full h-[46px]">Sign up</TabsTrigger>
                            <TabsTrigger value="login" onClick={() => (setValue("login"))} className="data-[state=active]:bg-[#F0B90B] data-[state=active]:text-[#F6F6F6] w-full h-[46px]" >Log In</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="register" className="sm:h-[80%]">
                        <FormRegister />
                    </TabsContent>
                    <TabsContent value="login" className="sm:h-[70%] items-center">
                        <FormLogin />
                    </TabsContent>
                </Tabs>

                <div className="hidden md:w-full h-full md:flex flex-col justify-center items-center px-[20px] bg-[#1C1C1C] text-center text-[#FFFFFF] rounded-r-lg">
                    <div
                    className="w-[100%] h-[50%]"
                    >
                    <h1 className="font-[700] text-[35px] leading-[39px] pt-[20px]">
                        {value === "register" ? "Welcome to FilmCut!" : "Welcome Back to FilmCut"}
                    </h1>
                    <p className="font-[400] text-[20px] leading-[24px] pt-3">
                        {value === "register"
                            ? "🎬 Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!"
                            : "🍿 Ready to dive into the world of unlimited entertainment? Enter your credentials and let the cinematic adventure begin!"}
                    </p>
                    </div>
                    <Image
                        src={value === "register" ? characterRegister : characterLogin}
                        alt="character"
                        width={0}
                        height={0}
                        className="w-[60%] h-[50%] object-cover"
                    />
                </div>

            </div>
        </>
    );
};
