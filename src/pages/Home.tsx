import { FC } from "react";
import { TopAnime } from "./index";

const Home: FC = () => {
	return (
		<div className="mt-[3rem]">
			<h2 className="text-2xl text-white font-semibold">Explore</h2>
			<p className="text-gray-500 text-base pt-3 mb-5 md:text-lg">
				What are you gonna watch today
			</p>

			<div>
				<TopAnime />
			</div>
		</div>
	);
};

export default Home;
