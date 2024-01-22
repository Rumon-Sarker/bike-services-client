import { Outlet } from "react-router-dom";
import Navbr from "../pages/Shered/Navbar/Navbr";
import Footer from "../pages/Shered/Footer/Footer";
const Main = () => {
    return (
        <>
            <Navbr></Navbr>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;