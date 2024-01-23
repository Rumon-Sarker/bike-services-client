import { Helmet } from "react-helmet";
import About from "../About/About";
import Baner from "../Baner/Baner";
import Services from "../Services/Services";
import OuerTem from "../OuerTem/OuerTem";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bike Services</title>
            </Helmet>
            <Baner></Baner>
            <About></About>
            <Services></Services>
            <OuerTem></OuerTem>
        </div>
    );
};

export default Home;