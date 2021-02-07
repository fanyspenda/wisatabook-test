import RectCardItem from "./rectCardItem";

export interface RectCardListProps {}

const dataItems = [
	"Host your home",
	"Host an Online Experience",
	"Host an Experience",
];

const RectCardList: React.FunctionComponent<RectCardListProps> = () => {
	return (
		<div className="flex flex-col mt-8 md:mx-24">
			<text className="text-xl font-bold pl-4 mb-4">
				Join Millions of hosts on Airbbb
			</text>
			<div className="flex flex-row overflow-x-auto">
				{dataItems.map((title) => (
					<RectCardItem title={title} />
				))}
			</div>
		</div>
	);
};

export default RectCardList;
