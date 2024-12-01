import { Link } from "react-router-dom";
import UserIcon from "../assets/user.png"

const LoginRegisterBtn = () => {
    return (
        <>
            <div className="w-1/5 flex justify-around">
                <Link to="/register"><img src={UserIcon} alt="Register" /></Link>
            </div>
        </>
    );
}

export default LoginRegisterBtn;