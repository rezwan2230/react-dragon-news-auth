import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)


    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, photo, email, password);

        createUser(email, password)
        .then(result=>{console.log(result);})
        .catch(error=>{console.error(error);})
    }


    return (
        <div>
            <div className="mt-12">
                <Navbar></Navbar>
            </div>

            <div className="text-center bg-[#F3F3F3] pt-16  pb-20 mx-32 mt-16">
                <h2 className="text-3xl font-semibold">Register your account</h2>

                <form onSubmit={handleRegister} className="md:w-3/4 mx-auto lg:w-4/6">
                    <div className="my-10"><hr /></div>

                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" className="input input-bordered" required name="name" />
                    </div>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Enter photo URL" className="input input-bordered" required name="photo" />
                    </div>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter email address" className="input input-bordered" required name="email" />
                    </div>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required name="password" />
                    </div>

                    <div className="flex gap-3 mt-7">
                        <input type="checkbox" name="" id="" />
                        <p>Accept Term & Conditions</p>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <div className="mt-7">
                        <p >Already Have An Account ? <Link to='/login'><span className="text-blue-600 font-semibold">Login</span></Link></p>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Register;