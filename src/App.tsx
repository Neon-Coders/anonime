import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import {
	PageNotFound,
	Register,
	ServerError,
	SharedLayout,
	SingleAnime,
} from "./components";
import { Home, Manga, SearchAnime } from "./pages";

const App: FC = () => {
	return (
		<Suspense fallback={<ServerError />}>
			<main className="px-8 lg:px-[5rem]">
				<Routes>
					<Route path="/" element={<SharedLayout />}>
						<Route index element={<Home />} />
						<Route path="manga" element={<Manga />} />
						<Route path="search" element={<SearchAnime />} />
					</Route>
					<Route path=":animeId" element={<SingleAnime />} />
					<Route path="login" element={<Register />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</main>
		</Suspense>
	);
};

export default App;
