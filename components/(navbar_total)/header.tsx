"use client"
import { Navbar_mobile } from "./navbar_mobile/navbar_mobile";
import { Navbar_desktop } from "./nav_desktop/nav_desktop";
import "./header.css";
import { useEffect, useState } from "react";

export function Header() {
    const [verm, setVerm] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setVerm(true);
            } else {
                setVerm(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Limpieza del event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Se ejecuta solo una vez al montar el componente

    return (
        <header className={`${verm ? "bg-black" : "bg-transparent"} fixed top-0 left-0 z-50 w-full h-[13vh] flex justify-center items-center transition-colors duration-300`}>
            <nav className="fade-in-up w-[77%] h-full flex justify-between flex-row items-center">
                <div className="w-[30%] flex items-center justify-start h-full">
                    <img 
                        src="/logo.png" 
                        alt="logo"  
                        className="h-auto max-w-[120px] sm:max-w-[150px] md:max-w-[130px] object-contain"
                    />
                </div>

                {/* Navbar Desktop */}
                <div className="hidden lg:flex h-full w-[70%]">
                    <Navbar_desktop />
                </div>

                {/* Navbar Mobile */}
                <div className="flex lg:hidden">
                    <Navbar_mobile />
                </div>
            </nav>
        </header>
    );
}
