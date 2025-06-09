import {Menu} from "lucide-react";
import { useState } from "react";
import Navbar from "./Navbar";



const Header = () => {
    const [navOpen, setNavOpen] = useState(false);


    return (
        <header className = "fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinz-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center">
                <h1>
                    <a href= "/" className="logo">
                        <img src="/roblox-icon.png" width={40} height={40} alt="Dim Pesic" />
                    </a>
                </h1>
                <div className="relative justify-self-center">
                    <button className="menu-btn" onClick={() => setNavOpen((prev) => !prev)}>
                        <Menu/>
                    </button>
                    <Navbar navOpen={navOpen}/>
                </div>
                <a href="#contact" 
                className="btn btn-secondary max-md:hidden"> Contact Me</a>

            </div>
        </header>
    )
}

export default Header