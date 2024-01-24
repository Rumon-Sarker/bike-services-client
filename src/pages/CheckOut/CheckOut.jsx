import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {

    const { user } = useContext(AuthContext)
    console.log("hhhh", user)
    const bokkingData = useLoaderData();
    const { _id, title, img, price } = bokkingData;;

    const handaleOrder = async (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const bookings = {
            customerNane: name,
            email,
            img,
            price: price,
            serviceId: _id,
            serviceTitle: title,
            date,
        }

        fetch("https://test-nine-flame-81.vercel.app/booking", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Booking Success",
                        showConfirmButton: false,
                        timer: 500
                    });
                }
            })

    }


    return (
        <div>
            <h1 className="text-3xl  text-center">Booking: <span className="font-bold text-green-800">{title}</span> </h1>

            <form onSubmit={handaleOrder} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Amount</span>
                        </label>
                        <input type="text" name="amount" defaultValue={"$" + price} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary" value="Booking" />
                </div>
            </form>

        </div>

    );
};

export default CheckOut;