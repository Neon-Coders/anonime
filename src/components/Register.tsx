import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { FcGoogle } from "react-icons/fc";
import { SiTwitter } from "react-icons/si";

const Register: FC = () => {
	const googleProvider = new GoogleAuthProvider();
	const navigate = useNavigate();
	const GoogleLogin = async () => {
		try {
			const result = await signInWithPopup(auth, googleProvider);
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className="h-full w-full py-16 px-4">
			<div className="flex flex-col items-center justify-center">
				<div className="dark:bg-[#3c4853] shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
					<p
						tabIndex={0}
						role="heading"
						aria-label="Login to your account"
						className="text-2xl font-extrabold leading-6 text-gray-100"
					>
						Login to your account
					</p>

					<button
						onClick={GoogleLogin}
						aria-label="Continue with google"
						role="button"
						className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-100 py-3.5 px-4 border rounded-lg border-gray-100 flex items-center w-full mt-10"
					>
						<FcGoogle className="text-2xl" />
						<p className="text-base font-medium ml-4 text-gray-100">
							Continue with Google
						</p>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Register;
