import { FC } from "react";
import { Search } from "../index";
import { TopAnime, RandomAnime } from "../index";

const Home: FC = () => {
	return (
		<div className="mt-[3rem]">
			<h2 className="text-2xl text-white font-semibold">Explore</h2>
			<p className="text-gray-500 text-base pt-3 mb-5 md:text-lg">
				What are you gonna watch today
			</p>

			<span className="lg:hidden">
				<Search />
			</span>

			<div>
				<div>
					<h2 className="text-2xl text-white font-semibold mt-8 mb-5">
						Top Anime
					</h2>
					<TopAnime />
				</div>
				<div>
					<h2 className="text-2xl text-white font-semibold mt-8 mb-5">
						All Anime
					</h2>
					<RandomAnime />
				</div>
			</div>
		</div>
	);
};

export default Home;
