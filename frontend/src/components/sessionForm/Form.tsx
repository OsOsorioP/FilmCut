import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { CircleArrowLeft } from "lucide-react"

import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react"
import axios from "axios"

import { useForm } from "react-hook-form";
import FormRegister from "./FormRegister"
import FormLogin from "./FormLogin"

interface LoginFormProps {
    onClose: () => void;
}

export default function Form({ onClose }: LoginFormProps) {

    return (
        <>
            <div className="flex flex-row justify-between gap-[20px]">

                <Tabs defaultValue="login" className="flex flex-row md:flex-col justify-between text-center w-[500px] text-[#F6F6F6]">
                    <div className="flex gap-[7px] cursor-pointer pb-8" onClick={onClose}>
                        <CircleArrowLeft />
                        <p>Back</p></div>
                    <TabsList className="flex flex-row justify-center">
                        <TabsTrigger value="register">Sign up</TabsTrigger>
                        <TabsTrigger value="login">Log In</TabsTrigger>
                    </TabsList>
                    <TabsContent value="register">
                        <FormRegister />
                    </TabsContent>
                    <TabsContent value="login">
                        <FormLogin />
                    </TabsContent>
                    <p>For any questions, reach out to support@Quickbetmovies.com</p>
                </Tabs>

                <div className="h-max bg-[#1C1C1C] text-center text-[#FFFFFF]">
                    <h1 className="font-[700] text-[35px] leading-[39px] " >Welcome Back to Quickbet Movie</h1>
                    <p className="font-[400] text-[20px] leading-[24px]">🍿 Ready to dive into the world of unlimited entertainment? Enter your credentials and let the cinematic adventure begin!</p>
                    <Image src={""} alt={""} />
                </div>
            </div>
        </>
    );
};
