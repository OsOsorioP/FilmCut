"use client"
import { ChevronsUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToUp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="fixed bottom-4 right-4">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="bg-[#262626] text-white p-3 rounded-full shadow-lg"
                >
                    <ChevronsUp className="h-6 w-6" />
                </button>
            )}
        </div>
    );
}
