import { FC } from "react";

const Loader: FC = () => {
	return (
		<div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-gray-400"></div>
	);
};

export default Loader;
