import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import qZinePic1 from '../../../assets/qZone1.png'
import qZinePic2 from '../../../assets/qZone2.png'
import qZinePic3 from '../../../assets/qZone3.png'
import advertisingPic from '../../../assets/bg.png'

const RightSideNav = () => {
    return (
        <div>
            {/* Login With */}
            <div className=" md:px-1 lg:px-3 space-y-3 mb-6">
                <h2 className="text-2xl text-[#403F3F] font-semibold pb-2">Login With</h2>
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
            <div className=" md:px-1 lg:px-3 space-y-3 mb-8">
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
            <div className="bg-[#F3F3F3] p-4 lg:mx-3 rounded">
                <div className="space-y-5">
                <h2 className="text-xl font-semibold">Q-Zone </h2>
                    <img className="mx-auto" src={qZinePic1} alt="" />
                    <img className="mx-auto" src={qZinePic2} alt="" />
                    <img className="mx-auto" src={qZinePic3} alt="" />
                </div>
            </div>

            {/* Advertising */}
            <div className="lg:mx-3 mt-6">
                <img className="w-full" src={advertisingPic} alt="" />
            </div>

        </div>
    );
};

export default RightSideNav;