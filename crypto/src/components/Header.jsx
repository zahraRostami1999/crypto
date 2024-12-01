import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Logo from "./Logo";
import LoginRegisterBtn from "./LoginRegisterBtn";
import BasicSelect from "../components/USDSelect";


const Header = () => {
    return (
        <>
            <div className="w-full bg-red-600">
                <div className="mx-10 p-2 flex justify-between items-center">
                    <div className="w-1/2 flex justify-between items-center">
                        <div className="w-1/3"><Logo /></div>
                        <div className="w-2/3"><NavBar /></div>
                    </div>
                    <div className="w-2/12 flex justify-center items-center">
                        <div className="w-full"><LoginRegisterBtn /></div>
                        <div className="w-1/2"><BasicSelect /></div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Header;