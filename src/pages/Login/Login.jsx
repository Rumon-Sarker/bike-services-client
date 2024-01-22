import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import SocailLogin from "../Shered/SocailLogin/SocailLogin";


const Login = () => {
    const { singIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handaleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        singIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)

                navigate(from, { replace: true });


            })
            .catch(error => {

                console.log(error)
            })


    }
    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content mt-20 flex-col ">
                <div className="text-center w-full">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                </div>
                <div className="card shadow-2xl bg-base-100">
                    <form onSubmit={handaleLogin} className="card-body">
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