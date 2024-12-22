import type { Metadata } from "next";
import "./globals.css";
import SessionAuthProvider from "@/context/SessionAuthProvider";
import Header from "@/components/ui/Header";
import CustomModal from "@/components/forms/CustomModal";
import { ModalProvider } from "@/context/ModalContext";
import { ReactNode, Suspense } from "react";
import { LoaderPinwheel } from "lucide-react";

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
        className={` bg-[#757575] antialiased overflow-x-hidden no-scrollbar`}
      >

        <Suspense fallback={<div className="fixed top-0 left-0"><LoaderPinwheel/></div>}>
          <SessionAuthProvider>
            <ModalProvider>
              <Header />
              {children}
              <CustomModal />
            </ModalProvider>
          </SessionAuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
