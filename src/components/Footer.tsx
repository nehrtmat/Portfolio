import { useContext } from "react";
import { context } from "../App";


const Footer = () => {
    const { isLight } = useContext(context);

    return (
        <div className="mt-20">
            <p className={`${isLight ? "text-primary-dark" : "text-primary-light"} text-center md:text-right md:mr-10`}>© 2023 - All Rights Reserved</p>
        </div>
    )
}

export default Footer;