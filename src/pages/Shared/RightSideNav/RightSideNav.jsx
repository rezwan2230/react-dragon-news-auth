import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const RightSideNav = () => {
    return (
        <div>
            {/* Login With */}
            <div className=" md:px-1 lg:px-3 space-y-3 mb-6">
                <h2 className="text-2xl">Login With</h2>
                <button className="btn w-full btn-outline flex">
                    <FcGoogle className="text-2xl"></FcGoogle>
                    Login with Google
                </button>
                <button className="btn w-full btn-outline flex">
                    <BsGithub className="text-2xl"></BsGithub>
                    Login with GitHub
                </button>
            </div>

            {/* Find Us On */}
            <div className=" md:px-1 lg:px-3 space-y-3 mb-6">
                <h2 className="text-2xl">Find Us On</h2>

                <div className="border rounded-md border-black divide-y divide-slate-400">
                    <a className="flex gap-3 items-center p-3 " href="">
                        <FaFacebook className="text-2xl"></FaFacebook>
                        Facebook
                    </a>
                    <a className="flex gap-3 items-center p-3 " href="">
                        <BsTwitter className="text-2xl"></BsTwitter>
                        Twitter
                    </a>
                    <a className="flex gap-3 items-center p-3 " href="">
                        <AiFillInstagram className="text-2xl"></AiFillInstagram>
                        Instagram
                    </a>
                </div>
            </div>

            {/* Q Zone */}
            <div className="bg-[#F3F3F3]">
                <p>dfg</p>

            </div>

        </div>
    );
};

export default RightSideNav;