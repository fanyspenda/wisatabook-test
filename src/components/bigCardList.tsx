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
			className={`pl-4 pt-8 pb-6 flex flex-col ${
				isDarkMode && "bg-black text-white"
			}`}
		>
			<text className="text-xl font-bold">{title}</text>
			<text className="mb-4">{description}</text>
			<div className="overflow-x-auto flex flex-row">
				{data.map((title) => (
					<BigCardItem title={title} />
				))}
			</div>
			{isDarkMode && (
				<button className="p-1 border-gray-100 border-2 w-32 mt-6 rounded-lg">
					Explore all
				</button>
			)}
		</div>
	);
};

export default BigCardList;
