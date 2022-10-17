import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};
export default Navbar;