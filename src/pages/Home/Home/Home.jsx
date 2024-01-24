import { Helmet } from "react-helmet";
import About from "../About/About";
import Baner from "../Baner/Baner";
import Services from "../Services/Services";
import OuerTem from "../OuerTem/OuerTem";
import Subscribr from "../Subscribe/Subscribr";


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
            <Subscribr></Subscribr>
        </div>
    );
};

export default Home;