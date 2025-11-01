import { Outlet, Link } from "react-router-dom";
import NavBar from "../components/Nav";

function Layout() {
    return (
        <div >
            <NavBar></NavBar>
            <Outlet />
        </div>
    );
}

export default Layout;
