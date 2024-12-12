"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import logoSession from "../../../public/Frame.png"
import logoSessionOk from "../../../public/FrameYellow.png"
import CustomModal from '../sessionForm/CustomModal';
import Image from "next/image";
import { useState } from "react";

export default function Session() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data: session, status } = useSession();

    const openModal = () => {
        setIsModalOpen(true);
      };

      const closeModal = () => {
        setIsModalOpen(false);
      };

    if (status === "loading") {
        return "";
    }

    if (session) {
        return (
            <>
                {session.user?.email} <br />
                <button
                    onClick={() => signOut()}
                    className="cursor-pointer fixed right-5 "
                >
                    <Image src={logoSessionOk} alt="avatar" />
                </button>
            </>
        );
    }

    

    return (
        <>
            <button
                onClick={() =>  openModal()}
                className="cursor-pointer fixed right-5 "
            >
                <Image src={logoSession} alt="avatar" />
            </button>
            <CustomModal show={isModalOpen} onClose={closeModal} />
        </>
    );
}
