/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { FC } from "react";
import useSWR, { Fetcher } from "swr";
import { BASE_URL } from "../utils";
import { Link, useParams } from "react-router-dom";

const fetcher = (...args: Fetcher[]) =>
	fetch(...args).then((response) => response.json());

const SingleAnime: FC = () => {
	const { data } = useSWR(BASE_URL, fetcher, {
		suspense: true,
	});
	const { animeId } = useParams();

	const rawData = data.data;
	const anime = rawData.find((anime) => anime.mal_id === animeId);

	return (
		<div className="flex items-center flex-col mt-[18rem]">
			<div className="max-w-md text-center">
				<p className="text-3xl text-white">
					Looks like our services are currently offline
				</p>
				<p className="mt-4 mb-8 dark:text-gray-400">
					But don't worry, you can find plenty of other things on our homepage.
				</p>
				<Link
					rel="noopener noreferrer"
					to="/"
					className="px-8 py-3 font-semibold rounded dark:bg-gray-600 text-white"
				>
					Back to homepage
				</Link>
			</div>
		</div>
	);
};

export default SingleAnime;
