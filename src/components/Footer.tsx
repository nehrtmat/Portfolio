import { useContext } from "react";
import { context } from "../App";


const Footer = () => {
    const { isLight } = useContext(context);

    return (
        <div className="mt-20">
            <p className={`${isLight ? "text-black" : "text-white"} text-center md:text-right md:mr-10`}>© 2026 Matthew Nehrt</p>
        </div>
    )
}

export default Footer;