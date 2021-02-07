import { useState } from "react";
import CardItem from "./cardItem";

const itemData = [
	{
		name: "Malang",
		duration: "4 hours",
	},
	{
		name: "Surabaya",
		duration: "3 hours",
	},
	{
		name: "Jember",
		duration: "1 hours",
	},
	{
		name: "Sidoharjo",
		duration: "3 hours",
	},
	{
		name: "Jember",
		duration: "1 hours",
	},
	{
		name: "Sidoharjo",
		duration: "3 hours",
	},
	{
		name: "Jember",
		duration: "1 hours",
	},
	{
		name: "Sidoharjo",
		duration: "3 hours",
	},
];
const CardList: React.FunctionComponent = () => {
	const [destinations, setDestinations] = useState(itemData);
	return (
		<div className="flex px-4 flex-col items-center overflow-x-auto max-h-56 flex-wrap mt-56">
			{destinations.map(({ name, duration }) => {
				return <CardItem destination={name} duration={duration} />;
			})}
		</div>
	);
};

export default CardList;
