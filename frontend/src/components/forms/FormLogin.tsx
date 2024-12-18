"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter()
    const [error, setError] = useState<string | null>(null)

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);

        const res = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        if (res?.error) {
            setError(res.error)
        } else {
            
            router.refresh()
        }
    });

    return (
        <div className="flex w-full h-full justify-center items-center">
            <form 
            onSubmit={onSubmit} 
            className="flex flex-col justify-center items-center w-full gap-[20px]"
            >

                {error && (
                    <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">{error}</p>
                )}

                <p className="font-[400] text-[14px] leading-[20px] text-center text-[#FFFFFF]">We love having you back</p>

                <input
                    type="email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Email is required",
                        },
                    })}
                    className="w-1/2 h-[46px] text-[#333] bg-[#F6F6F6] rounded-t-lg border-b-2 border-[#717171] p-3"
                    placeholder="Email"
                />

                {errors.email && (
                    <span className="text-red-500 text-xs">
                        {typeof errors.email.message === "string"
                            ? errors.email.message
                            : "An error occurred"}
                    </span>
                )}
                <input
                    type="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: "Password is required",
                        },
                    })}
                    className="w-1/2 h-[46px] text-[#333] bg-[#F6F6F6] rounded-t-lg border-b-2 border-[#717171] p-3"
                    placeholder="Password"
                />

                {errors.password && (
                    <span className="text-red-500 text-xs">
                        {typeof errors.password.message === "string"
                            ? errors.password.message
                            : "An error occurred"}
                    </span>
                )}

                <div className="flex justify-center w-1/2 items-center text-center">
                    <button type="submit" className="w-full h-[46px] bg-[#F0B90B] text-center rounded-lg">
                        Continue
                    </button>
                </div>
                <p>For any questions, reach out to support@filmcut.com</p>
            </form>
        </div>
    );
}