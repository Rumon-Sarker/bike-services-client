import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";



const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();
    const handaleDelete = (id) => {
        const procces = confirm("Are you sure");
        if (procces) {
            console.log("yes", id)
            fetch(`http://localhost:5000/booking/${id}`, {
                method: "DELETE",

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Delete Succes")
                        const remaning = bookings.filter(booking => booking._id !== id);
                        setBookings(remaning);
                    }
                })
        }
    }
    const handaleUpdateBokking = (id) => {
        const procces = confirm("Are you sure");
        if (procces) {
            console.log("yes", id)
            fetch(`http://localhost:5000/booking/${id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: "confirm" })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert("Update Succes")
                        const remaning = bookings.filter(booking => booking._id !== id);
                        const update = bookings.find(booking => booking._id === id);
                        update.status = "confirm";
                        const neqBokking = [update, ...remaning];
                        setBookings(neqBokking);
                    }
                })
        }
    }


    const url = `http://localhost:5000/booking?email=${user?.email}`;
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem("jwt-token-secret")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBookings(data)
                }
                else {
                    navigate('/login')
                }


            })
    }, [url])
    return (
        <div className="mt-12">
            <h1 className="text-center text-3xl my-12 font-bold">Bookings: {bookings.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="font-bold text-black">
                                <th>#</th>
                                <th>Img</th>
                                <th>Service Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking, index) =>
                            (<tr key={index}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask rounded w-28 h-22">
                                                <img src={booking.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{booking.serviceTitle}</td>
                                <td>{booking.email}</td>
                                <td>{booking.date}</td>
                                <td>{booking.status === "confirm" ? <span className="text-green-700 font-bold">Confirmed</span> : <button onClick={() => handaleUpdateBokking(booking._id)} className="btn">Pleace Confirm</button>}</td>


                                <td><button onClick={() => handaleDelete(booking._id)} className="btn btn-error">Delete</button></td>

                            </tr>)
                            )}


                        </tbody>


                    </table>
                </div>
            </div>

        </div>
    );
};

export default Bookings;