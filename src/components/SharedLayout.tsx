import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./index";

const SharedLayout: FC = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default SharedLayout;
