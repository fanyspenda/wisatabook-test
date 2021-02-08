import { Divider, Modal } from "antd";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export interface SearchModalProps {
	searchKey?: string;
	isVisible: boolean;
	handleCancel: Dispatch<SetStateAction<boolean>>;
}

const DESTINATION_DATA = [
	{
		destination: "Monas",
		city: "jakarta",
	},
	{
		destination: "Borobudur",
		city: "yogyakarta",
	},
	{
		destination: "Kuta Beach",
		city: "Bali",
	},
	{
		destination: "Mojolengko",
		city: "Mojolengko",
	},
	{
		destination: "Mojolangu",
		city: "Mojolangu",
	},
];

const SearchModal: React.FunctionComponent<SearchModalProps> = ({
	searchKey,
	isVisible,
	handleCancel,
}) => {
	const [destinations, setDestinations] = useState(DESTINATION_DATA);

	useEffect(() => {
		const copyDestinations = [...destinations];
		const newDestinations = copyDestinations.filter((values) =>
			values.destination.startsWith(searchKey || "")
		);
		setDestinations(newDestinations);
	}, [searchKey]);
	return (
		<div>
			<Modal
				title={`anda mencari '${searchKey}'`}
				visible={isVisible}
				footer={null}
				onCancel={() => handleCancel(false)}
			>
				<div className="mt-4">
					{destinations.map(({ city, destination }) => (
						<div className="flex flex-col border-gray-200 border-2 p-2 rounded-2xl mb-4">
							<text className="font-semibold">{destination}</text>
							<text>{city}</text>
						</div>
					))}
				</div>
			</Modal>
		</div>
	);
};

export default SearchModal;
