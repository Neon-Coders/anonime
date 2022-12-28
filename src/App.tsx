import { FC } from "react";
import { Home, Manga } from "./pages";
import { Route, Routes } from "react-router-dom";
import { Loader, PageNotFound, SharedLayout } from "./components";
import { Suspense } from "react";

const App: FC = () => {
	return (
		<main className="px-8 lg:px-[5rem]">
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="manga" element={<Manga />} />
				</Route>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</main>
	);
};

export default App;
