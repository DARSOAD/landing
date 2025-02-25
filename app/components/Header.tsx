import Link from "next/link";
import Logo from "@/public/images/logo.svg"; // Importa el SVG
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <header className="fixed top-2 w-full bg-transparent z-50">
            <div className="mx-auto py-2 flex justify-between px-6 lg:px-20">
                <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                    <Logo
                        style={{ width: "100% !important", height: "100% !important" }}
                        className="max-w-full max-h-full w-full h-full object-contain" 
                        />
                </div>                    
                <div className="pt-4">
                    <FaRegUserCircle className="w-6 h-6"/>
                </div>
            </div>
        </header>
    );
};

export default Header;
