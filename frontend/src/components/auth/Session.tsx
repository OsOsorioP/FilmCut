"use client";
import { signOut, useSession } from "next-auth/react";
import logoSession from "../../../public/Frame.png"
import logoSessionOk from "../../../public/FrameYellow.png"
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

export default function Session() {
    const { openModal } = useModal();
    const { data: session, status } = useSession();

    if (status === "loading") {
        return ""
    }

    if (session) {
        return (
            <>
                <div className="flex flex-row justify-center">
                    <p className="hidden md:block font-[600] text-[14px] leading-[14px] align-middle text-[#F6F6F6] p-[16px]">{session.user?.email}</p>
                    <button
                        onClick={() => signOut()}
                        className="cursor-pointer right-5 "
                    >
                        <Image src={logoSessionOk} alt="avatar" />
                    </button>
                </div>
            </>
        );
    }

    return (
        <>
            <button
                onClick={openModal}
                className="cursor-pointer right-5 "
            >
                <Image src={logoSession} alt="avatar" />
            </button>
        </>
    );
}
