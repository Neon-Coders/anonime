import { FC } from "react";
import { Search } from "./index";

const SearchAnime: FC = () => {
	return (
		<div className="mt-[3rem]">
			<p className="text-gray-500 text-base pt-3 mb-5 md:text-lg">
				What are you gonna watch today
			</p>

			<div>
				<Search />
			</div>
		</div>
	);
};

export default SearchAnime;
