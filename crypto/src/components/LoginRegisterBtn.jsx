import { Link } from "react-router-dom";

const LoginRegisterBtn = () => {
    return (
        <>
            <div className="w-full flex justify-around">
                <button className="bg-orange-500"><Link to="/register">Register</Link></button>
                <button className="bg-gray-600"><Link to="/login">Login</Link></button>
            </div>
        </>
    );
}

export default LoginRegisterBtn;