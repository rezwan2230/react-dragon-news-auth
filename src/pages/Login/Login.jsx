import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        console.log(email, password);
        signIn(email, password)
            .then(result => {
                navigate(location?.state ? location.state : '/');
                e.target.reset();
                 console.log(result); 
            })
            .catch(error => { console.error(error); })
    }


    return (
        <div>
            <div className="mt-12">
                <Navbar></Navbar>
            </div>

            <div className="text-center bg-[#F3F3F3] pt-16 pb-20 mx-32 mt-20">
                <h2 className="text-3xl font-semibold">Login your account</h2>

                <form onSubmit={handleLogin} className="md:w-3/4 mx-auto lg:w-4/6">
                    <div className="my-10"><hr /></div>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required name="email" />
                    </div>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required name="password" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="mt-7">
                        <p >Dont’t Have An Account ? <Link to='/register'><span className="text-blue-600 font-semibold">Register</span></Link></p>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;