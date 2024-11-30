import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Logo from "./Logo";
import LoginRegisterBtn from "./LoginRegisterBtn";

const Header = () => {
    return (
        <>
            <div className="w-full bg-red-600">
                <div className="mx-10 p-2 flex justify-between">
                    <div className="w-1/2 flex justify-between">
                        <div className="w-1/3">
                            <Logo />
                        </div>
                        <div className="w-2/3">
                            <NavBar />
                        </div>
                    </div>
                    <div className="w-1/6">
                        <LoginRegisterBtn />
                    </div>
                </div>

            </div>
        </>
    );
}

export default Header;