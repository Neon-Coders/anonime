import { FC } from "react";
import { TopManga } from "../data";

const Manga: FC = () => {
	return (
		<div className="mt-[3rem]">
			<p className="text-gray-500 text-base pt-3 mb-5 md:text-lg">
				What are you gonna read today?
			</p>

			<main>
				<TopManga />
			</main>
		</div>
	);
};

export default Manga;
