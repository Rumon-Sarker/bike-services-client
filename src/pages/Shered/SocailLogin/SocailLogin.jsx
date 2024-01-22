import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocailLogin = () => {
    const { socailLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handaleSocailLogin = () => {
        socailLogin()
            .then(result => {
                navigate('/')
                console.log(result)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div>
                <button onClick={handaleSocailLogin} className="btn btn-block bg-slate-200 text-red-600 font-bold">Google</button>
            </div>
        </div>
    );
};

export default SocailLogin;