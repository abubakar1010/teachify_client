import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar.jsx";
import Footer from "../shared/Footer/Footer.jsx";
import { CssBaseline } from "@mui/material";

const Layout = () => {
    return (
        <div>
            <CssBaseline />
            <NavBar></NavBar>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;