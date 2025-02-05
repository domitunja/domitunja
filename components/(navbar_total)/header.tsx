import { Navbar_mobile } from "./navbar_mobile/navbar_mobile";
import { Navbar_desktop } from "./nav_desktop/nav_desktop";
import "./header.css";

export function Header() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full h-[13vh] flex justify-center items-center">
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
