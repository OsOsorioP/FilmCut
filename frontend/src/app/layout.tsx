import type { Metadata } from "next";
import "./globals.css";
import SessionAuthProvider from "@/context/SessionAuthProvider";
import Header from "@/components/ui/Header";
import CustomModal from "@/components/forms/CustomModal";
import { ModalProvider } from "@/context/ModalContext";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "FilmCut",
  description: "App for movies trailer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` bg-[#757575] antialiased`}
      >

        <SessionAuthProvider>

          <ModalProvider>
            <Header />
            {children}
            <CustomModal />
          </ModalProvider>

        </SessionAuthProvider>

      </body>
    </html>
  );
}
