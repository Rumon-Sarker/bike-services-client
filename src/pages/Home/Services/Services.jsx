import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://test-nine-flame-81.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className="text-orange-500 text-center my-12 text-4xl font-bold">Our Services</h1>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
                {services.map((item) => <ServicesCard

                    key={item._id}
                    item={item}
                >

                </ServicesCard>)}
            </div>

        </div>
    );
};

export default Services;