import "./Banner.css";
const Banner = ({ handleSubmit, handleInputText }) => {
	return (
		<div className=" relative bg max-w-7xl mx-auto my-10 h-[70vh] bg-pink-200 rounded">
			<div className="relative top-[50%] max-w-5xl mx-auto">
				<form onSubmit={handleSubmit}>
					<label
						htmlFor="default-search"
						className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
					>
						Search
					</label>
					<div className="relative">
						<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							<svg
								className="w-5 h-5 text-gray-500 dark:text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								></path>
							</svg>
						</div>
						<input
							onChange={handleInputText}
							type="text"
							className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Search Phones."
							required
						/>

						<input
							type="submit"
							className="text-white absolute left-[90%] top-[20%] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Banner;
