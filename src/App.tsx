import { FC } from "react";
import { Home, Manga, SearchAnime } from "./pages";
import { Route, Routes } from "react-router-dom";
import { PageNotFound, Register, SharedLayout } from "./components";

const App: FC = () => {
	return (
		<main className="px-8 lg:px-[5rem]">
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="manga" element={<Manga />} />
					<Route path="search" element={<SearchAnime />} />
				</Route>
				<Route path="login" element={<Register />} />
				<Route path="signup" element={<Register />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</main>
	);
};

export default App;
