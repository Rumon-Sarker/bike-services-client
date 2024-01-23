import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import SocailLogin from "../Shered/SocailLogin/SocailLogin";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";


const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const from = location.state?.from?.pathname || "/";

    const handaleSignUp = (data) => {
        const { email, password } = data;

        //1st option /or / 2nd options react-hoks-form;
        // ,,,,,,,,,,,,,,,,,,,,,,,,,,,

        // event.preventDefault()
        // const form = event.target;
        // const name = form.name.value;
        // const email = form.email.value;
        // const password = form.password.value;
        // console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
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



    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Bike Services || SignUp</title>
            </Helmet>
            <div className="hero-content mt-20 flex-col ">
                <div className="text-center w-full">
                    <h1 className="text-3xl font-bold">SignUp now!</h1>
                </div>
                <div className="card shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(handaleSignUp)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text"{...register("name", { required: true })} name="name" placeholder="User Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-500">Name is required</span>}
                        </div>
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
                            <input type="password" name="password" {...register("password", { required: true, minLength: 6 })} placeholder="password" className="input input-bordered" required />
                            {errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600">Minimum 6 is Cheractar</span>}
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