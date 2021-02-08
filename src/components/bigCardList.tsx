import BigCardItem from "./bigCardItem";

export interface BigCardListProps {
	title: string;
	description?: string;
	isDarkMode?: boolean;
	data: string[];
}

const BigCardList: React.FunctionComponent<BigCardListProps> = ({
	title,
	description,
	isDarkMode,
	data,
}) => {
	return (
		<div
			className={`pt-8 pb-6 flex flex-col md:mx-32 ${
				isDarkMode && "bg-black text-white"
			}`}
		>
			<div className="flex flex-row justify-between items-center ml-4">
				<div className="flex flex-col">
					<text className="text-xl font-bold">{title}</text>
					<text className="mb-4">{description}</text>
				</div>
				{isDarkMode && (
					<button className="border-gray-100 border-2 w-28 mr-5 rounded-lg hidden md:block">
						Explore all
					</button>
				)}
			</div>

			<div className="overflow-x-auto flex flex-row md:justify-between pl-4">
				{data.map((title) => (
					<BigCardItem title={title} />
				))}
			</div>
			{isDarkMode && (
				<button className=" border-gray-100 border-2 w-32 mt-6 rounded-lg md:hidden ml-4">
					Explore all
				</button>
			)}
		</div>
	);
};

export default BigCardList;
