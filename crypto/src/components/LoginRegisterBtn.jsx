import { Link } from "react-router-dom";
import UserIcon from "../assets/user.png"

const LoginRegisterBtn = () => {
    return (
        <>
            <div className="w-full flex justify-around">
                <Link to="/register">👤</Link>
            </div>
        </>
    );
}

export default LoginRegisterBtn;