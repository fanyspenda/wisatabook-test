import BigCardItem from "./bigCardItem";

export interface BigCardListProps {
	title: string;
	description?: string;
}

const BigCardList: React.FunctionComponent<BigCardListProps> = ({
	title,
	description,
}) => {
	return (
		<div className="pl-4 mt-8 flex flex-col">
			<text className="text-xl font-bold mb-4">{title}</text>
			<text>{description}</text>
			<div className="overflow-x-auto flex flex-row">
				<BigCardItem title="Entire homes" />
				<BigCardItem title="Cabbins and cottages" />
				<BigCardItem title="Unique stay" />
				<BigCardItem title="Pets welcome" />
			</div>
		</div>
	);
};

export default BigCardList;
