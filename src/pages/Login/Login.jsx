import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import SocailLogin from "../Shered/SocailLogin/SocailLogin";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const Login = () => {
    const { singIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handaleLogin = data => {

        //1st option /or / 2nd options react-hoks-form;
        // ,,,,,,,,,,,,,,,,,,,,,,,,,,,

        // event.preventDefault()
        // const form = event.target;
        // const email = form.email.value;
        // const password = form.password.value;
        const { email, password } = data;

        singIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Success",
                    showConfirmButton: false,
                    timer: 1000
                });
                navigate(from, { replace: true }, ("/"));


            })
            .catch(error => {

                console.log(error)
            })


    }
    return (

        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Bike Services || Login</title>
            </Helmet>
            <div className="hero-content mt-20 flex-col ">
                <div className="text-center w-full">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                </div>
                <div className="card shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(handaleLogin)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password"  {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                            {errors.password && <span className="text-red-500">password is required</span>}
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                        <SocailLogin></SocailLogin>
                        <p className="mt-5">You haven't an an account pleace.....<Link className="text-md text-green-700" to="/signup">Signup</Link></p>
                    </form>

                </div>
            </div>
        </div>

    );
};

export default Login;