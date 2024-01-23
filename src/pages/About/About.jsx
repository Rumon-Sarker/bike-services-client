import { Link } from "react-router-dom";
import about from "../../assets/About/about.jpg"


const About = () => {
    return (

        <>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content  gap-12 flex-col lg:flex-row">
                    <div className="lg:max-w-1/2">
                        <img src={about} className="rounded-lg shadow-2xl " />
                    </div>
                    <div className="lg:max-w-1/2 ">
                        <h1 className="text-2xl text-orange-700 font-bold mb-5">About Us</h1>
                        <h1 className="text-5xl font-bold">Bike Service Provider</h1>
                        <p className="py-6">Consectetur adipisicing elit. Modi accusantium enim nam placeat dolorum minus ut molestias ullam maiores iure ex quis, laborum et blanditiis ipsum consequatur tempora facilis aut sit, amet consectetur adipisicing elit. minus ut molestias ullam maiores iure ex quis, laborum et blanditiis ipsum consequatur tempora facilis aut.</p>
                        <p className="py-6">Adipisicing elit. Modi accusantium enim nam molestias ullam maiores iure ex quis, laborum et blanditiis ipsum consequatur tempora facilis aut sit, amet consectetur adipisicing elit. Modi accusantium enim nam placeat dolorum minus ut molestias ullam maiores iure ex quis, laborum et blanditiis ipsum consequatur tempora facilis aut.</p>
                        <Link to={"/"}><button className="btn uppercase btn-primary">More {"--->"}</button></Link>
                    </div>
                </div>
            </div>

        </>

    );
};

export default About;