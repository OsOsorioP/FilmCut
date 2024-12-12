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

interface LoginFormProps {
    onClose: () => void;
}

export default function Form({ onClose }: LoginFormProps) {

    const [value, setValue] = useState("login")

    const handleTabChange = (newValue:string) => {
        setValue(newValue);
    };

    console.log(value)
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between gap-[20px]">

                <Tabs defaultValue="login" value={value} onValueChange={handleTabChange} className="flex flex-row md:flex-col justify-between text-center w-[500px] text-[#F6F6F6]">
                    <div className="flex gap-[7px] cursor-pointer pb-8 w-fit" onClick={onClose}>
                        <CircleArrowLeft />
                        <p>Back</p>
                    </div>
                    <div className="flex justify-center align-top ">
                        <TabsList className="flex flex-row justify-center bg-[#262626] w-fit h-[46px] text-[#F6F6F6] ">
                            <TabsTrigger value="register" onClick={() => (setValue("register"))} className="data-[state=active]:bg-[#F0B90B] data-[state=active]:text-[#F6F6F6] w-[116px] h-[46px]">Sign up</TabsTrigger>
                            <TabsTrigger value="login" onClick={() => (setValue("login"))} className="data-[state=active]:bg-[#F0B90B] data-[state=active]:text-[#F6F6F6] w-[116px] h-[46px]" >Log In</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="register">
                        <FormRegister />
                    </TabsContent>
                    <TabsContent value="login">
                        <FormLogin />
                    </TabsContent>
                </Tabs>

                <div className="h-full flex flex-col justify-center align-middle items-center px-[20px] bg-[#1C1C1C] text-center text-[#FFFFFF] rounded-r-lg">
                    <h1 className="font-[700] text-[35px] leading-[39px] pt-[20px]">
                        {value === "register" ? "Welcome to Quickbet Movies!" : "Welcome Back to Quickbet Movie"}
                    </h1>
                    <p className="font-[400] text-[20px] leading-[24px] pt-3">
                        {value === "register"
                            ? "🎬 Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!"
                            : "🍿 Ready to dive into the world of unlimited entertainment? Enter your credentials and let the cinematic adventure begin!"}
                    </p>
                    <Image
                        src={value === "register" ? characterRegister : characterLogin}
                        alt="character"
                        width={350}
                        height={350}
                    />
                </div>

            </div>
        </>
    );
};
