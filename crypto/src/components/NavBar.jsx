import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <div className="w-full">
                <ul className="flex justify-between">
                    <Link to="/">Home</Link>
                    <Link to="/crypto-list">Crypto List</Link>
                    <Link to="/news">News</Link>
                    <Link to="/about">About</Link>
                </ul>
            </div>
        </>
    );
}

export default NavBar;