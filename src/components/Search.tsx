/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { FC, useState } from "react";

const Search: FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [inputValue, setInputValue] = useState<string>("");

	const handleSubmit = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setInputValue(e.preventDefault());
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					className="font-medium py-2 px-6 rounded-full bg-gray-700 text-white outline-none border-none w-full lg:w-auto"
					type="text"
					placeholder="Search anime or manga"
				/>
			</form>
		</>
	);
};

export default Search;
