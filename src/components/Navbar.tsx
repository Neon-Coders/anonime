/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<nav className="inset-x-0 w-full z-20">
			<div className="mt-8">
				<div className="flex justify-between items-center">
					<div className="relative z-30">
						<Link
							to="/"
							className="text-white font-bold text-3xl tracking-wider"
						>
							Anonime
						</Link>
					</div>

					{!isOpen && (
						<div className="flex items-center justify-end relative">
							<input
								type="checkbox"
								name="hamburger"
								id="hamburger"
								className="peer hidden"
							/>
							<label
								htmlFor="hamburger"
								className="peer-checked:hamburger block relative z-30 p-6 -mr-6 cursor-pointer lg:hidden"
							>
								<div
									aria-hidden="true"
									className="bg-white mb-2 h-[2px] w-6"
								></div>
								<div
									aria-hidden="true"
									className="bg-white mt-2 h-[2px] w-6"
								></div>
							</label>
							<div className="peer-checked:translate-x-0 items-center fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-gray-900/80 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border-r border-r-gray-800 transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0 z-20">
								<div className="flex flex-col h-full lg:items-center lg:flex-row ml-0 lg:ml-8">
									<ul className="px-6 pt-32 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
										<li>
											<Link
												to="/manga"
												className="text-gray-500 hover:text-gray-100 transition-all duration-200 ease-out cursor-pointer"
											>
												Manga
											</Link>
										</li>

										<li>
											<Link
												to="/search"
												className="text-gray-500 hover:text-gray-100 transition-all duration-200 ease-out cursor-pointer"
											>
												Search Anime
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					)}

					{/* TODO: Auth */}
					<div className="hidden ml-auto lg:flex">
						<div className="flex cursor-pointer">
							{isLoggedIn ? (
								<img
									alt=""
									className="w-10 h-10 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-offset-gray-800 transition duration-200 ease-out md:hover:scale-105"
									src="https://i.ibb.co/M5YtTdP/profile-pic.png"
								/>
							) : (
								<div className="sm:flex sm:gap-4">
									<Link
										to="/login"
										className="text-gray-500 hover:text-gray-100 transition-all duration-200 ease-out cursor-pointer"
									>
										Login
									</Link>

									<div className="hidden sm:flex">
										<Link
											to="/signup"
											className="text-gray-500 hover:text-gray-100 transition-all duration-200 ease-out cursor-pointer"
										>
											Sign Up
										</Link>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
