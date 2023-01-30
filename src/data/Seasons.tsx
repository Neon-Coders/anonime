import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRef, useState, FC } from "react";
import useSWR, { Fetcher } from "swr";
import { Loader, ServerError } from "../components";
import { BASE_URL } from "../utils";
import { Link } from "react-router-dom";

/**
 * It takes a list of arguments, and returns a promise that resolves to the JSON response of the fetch
 * request.
 * @param {Fetcher[]} args - Fetcher[]
 */
const fetcher = (...args: Fetcher[]) =>
	fetch(...args).then((response) => response.json());

const Seasons: FC = () => {
	/* A hook that is used to fetch data from an API. */
	const { data, isLoading, error } = useSWR(BASE_URL, fetcher, {
		suspense: true,
	});

	const topAnime: [] = data.data;
	const title = "Series";

	if (isLoading) return <Loader />;
	if (error) return <ServerError />;

	/* A function that is called when the user clicks on the left or right arrow. It is used to scroll the
		carousel. */
	const rowRef = useRef<HTMLDivElement>(null);
	const [isMoved, setIsMoved] = useState<boolean>(false);

	const handleClick = (direction: string) => {
		setIsMoved(true);
		if (rowRef.current) {
			const { scrollLeft, clientWidth } = rowRef.current;

			const scrollTo =
				direction === "left"
					? scrollLeft - clientWidth
					: scrollLeft + clientWidth;
			rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
		}
	};

	return (
		<>
			<div className="">
				<div className="group relative md:-ml-2">
					<ChevronLeftIcon
						className={`absolute text-white top-0 bottom-10 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
							!isMoved && "hidden"
						}`}
						onClick={() => handleClick("left")}
					/>
					<h2 className="text-2xl text-white font-semibold mt-8 mb-5">
						{title}
					</h2>

					<div
						className="flex items-center space-x-3.5 overflow-x-scroll scrollbar-hide md:space-x-3.5 md:p-2"
						ref={rowRef}
					>
						{topAnime.map((anime) => {
							return (
								<div
									key={anime.mal_id}
									className="flex flex-col items-center group min-w-[200px] h-[374px]  overflow-hidden"
								>
									<div className="overflow-hidden rounded-xl grid relative">
										<Link to={`/${anime.mal_id}`}>
											<img
												src={anime.images.webp.large_image_url}
												className="object-cover h-[310px] transition duration-200 ease-out md:min-w-[200px] md:hover:scale-105"
												alt=""
											/>
										</Link>
									</div>
									<h6 className="anime_title">{anime.title}</h6>
								</div>
							);
						})}
					</div>

					<ChevronRightIcon
						className="absolute text-white top-0 bottom-10 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
						onClick={() => handleClick("right")}
					/>
				</div>
			</div>
		</>
	);
};

export default Seasons;
