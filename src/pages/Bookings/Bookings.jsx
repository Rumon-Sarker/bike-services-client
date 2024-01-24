import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";



const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();
    const handaleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://test-nine-flame-81.vercel.app/booking/${id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaning = bookings.filter(booking => booking._id !== id);
                            setBookings(remaning);
                        }
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }
    const handaleUpdateBokking = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://test-nine-flame-81.vercel.app/booking/${id}`, {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ status: "confirm" })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Confirm Seucces",
                                showConfirmButton: false,
                                timer: 500
                            });
                            const remaning = bookings.filter(booking => booking._id !== id);
                            const update = bookings.find(booking => booking._id === id);
                            update.status = "confirm";
                            const neqBokking = [update, ...remaning];
                            setBookings(neqBokking);
                        }
                    })
            }
        });
    }


    const url = `https://test-nine-flame-81.vercel.app/booking?email=${user?.email}`;
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
            <Helmet>
                <title>Bike Services || Booking</title>
            </Helmet>
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