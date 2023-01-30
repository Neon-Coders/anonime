import { FC } from "react";
import useSWR, { Fetcher } from "swr";
import { MANGA_BASE_URL } from "../utils";
import { Loader, ServerError } from "../components";

const fetcher = (...args: Fetcher[]) =>
	fetch(...args).then((response) => response.json());

const TopManga: FC = () => {
	const { data, isLoading, error } = useSWR(MANGA_BASE_URL, fetcher, {
		suspense: true,
	});

	const mangas = data.data;
	if (isLoading) return <Loader />;
	if (error) return <ServerError />;

	return (
		<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-5">
			{mangas.map((manga) => {
				return (
					<div
						key={manga.mal_id}
						className="flex flex-col items-center group h-[374px] overflow-hidden"
					>
						<div className="overflow-hidden rounded-xl grid relative cursor-pointer">
							<img
								src={manga.images.webp.large_image_url}
								className="object-cover w-full h-[310px] group-hover:scale-105 transition-all duration-300"
								alt=""
							/>
						</div>
						<h5 className="anime_title">{manga.title}</h5>
					</div>
				);
			})}
		</div>
	);
};

export default TopManga;
