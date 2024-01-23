import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import SocailLogin from "../Shered/SocailLogin/SocailLogin";
import Swal from "sweetalert2";


const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handaleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Success",
                    showConfirmButton: false,
                    timer: 1000
                });
                console.log(user)
            })
            .catch(error => console.log(error));

        navigate(from, { replace: true });

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content mt-20 flex-col ">
                <div className="text-center w-full">
                    <h1 className="text-3xl font-bold">SignUp now!</h1>
                </div>
                <div className="card shadow-2xl bg-base-100">
                    <form onSubmit={handaleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="SignUp" />
                        </div>
                        <SocailLogin></SocailLogin>
                        <p className="mt-5">already you have an account pleace.....<Link className="text-md text-green-700" to="/login">Login~</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;