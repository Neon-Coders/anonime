import { FC } from "react";

const Loader: FC = () => {
	return (
		<div className="flex justify-center items-center h-full mt-[20rem]">
			<div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin dark:border-gray-400"></div>
		</div>
	);
};

export default Loader;
