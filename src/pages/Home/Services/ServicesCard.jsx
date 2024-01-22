import { Link } from "react-router-dom";

const ServicesCard = ({ item }) => {
    const { _id, img, title, price } = item;
    return (
        <div className="card card-compact  bg-gray-200 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-orange-800 font-bold">Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`checkout/${_id}`}> <button className="btn bg-gray-400 font-bold">Booking ~~{">"}</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;