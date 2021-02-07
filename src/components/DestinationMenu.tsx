import { Menu } from "antd";
import { useEffect, useState } from "react";
import { MenuInfo } from "rc-menu/lib/interface";

export interface DestinationMenuProps {}

const ART_CULTURE_DATA = [
	{
		destination: "New York",
		city: "New York",
	},
	{
		destination: "Atlanta",
		city: "Georgia",
	},
	{
		destination: "Phoenix",
		city: "Arizona",
	},
	{
		destination: "Miami",
		city: "Florida",
	},
	{
		destination: "San Diego",
		city: "California",
	},
	{
		destination: "Los Santos",
		city: "New York",
	},
];

const OUTDOOR_DATA = [
	{
		destination: "Big Bear Lake",
		city: "California",
	},
	{
		destination: "Lake Powell",
		city: "United States",
	},
	{
		destination: "Lake Tahoe",
		city: "United States",
	},
	{
		destination: "Hot Springs",
		city: "Arkansas",
	},
	{
		destination: "lake George",
		city: "New York",
	},
	{
		destination: "Gatlinburg",
		city: "Tennessee",
	},
	{
		destination: "Pigeon Forge",
		city: "Tennessee",
	},
	{
		destination: "Big Bear Lake",
		city: "California",
	},
	{
		destination: "Lake Powell",
		city: "United States",
	},
	{
		destination: "Pigeon Forge",
		city: "Tennessee",
	},
	{
		destination: "Big Bear Lake",
		city: "California",
	},
	{
		destination: "Lake Powell",
		city: "United States",
	},
	{
		destination: "Gatlinburg",
		city: "Tennessee",
	},
	{
		destination: "Pigeon Forge",
		city: "Tennessee",
	},
	{
		destination: "Big Bear Lake",
		city: "California",
	},
	{
		destination: "Lake Powell",
		city: "United States",
	},
	{
		destination: "Pigeon Forge",
		city: "Tennessee",
	},
	{
		destination: "Big Bear Lake",
		city: "California",
	},
	{
		destination: "Lake Powell",
		city: "United States",
	},
];

const CABIN_DATA = [
	{
		destination: "Gatlinburg",
		city: "Tennessee",
	},
	{
		destination: "Pigeon Forge",
		city: "Tennessee",
	},
	{
		destination: "Broken Bow",
		city: "Oklahoma",
	},
	{
		destination: "Helen",
		city: "Georgia",
	},
	{
		destination: "Boone",
		city: "North California",
	},
	{
		destination: "Angel Fire",
		city: "New Mexico",
	},
	{
		destination: "Cherokee",
		city: "North California",
	},
];

const BEACH_DATA = [
	{
		destination: "Gatlinburg",
		city: "Tennessee",
	},
	{
		destination: "Pigeon Forge",
		city: "Tennessee",
	},
	{
		destination: "Big Bear Lake",
		city: "California",
	},
	{
		destination: "Lake Powell",
		city: "United States",
	},
	{
		destination: "Pigeon Forge",
		city: "Tennessee",
	},
	{
		destination: "Big Bear Lake",
		city: "California",
	},
	{
		destination: "Lake Powell",
		city: "United States",
	},
];

const POPULAR_DATA = [
	{
		destination: "New York",
		city: "New York",
	},
	{
		destination: "Atlanta",
		city: "Georgia",
	},
	{
		destination: "Phoenix",
		city: "Arizona",
	},
	{
		destination: "Gatlinburg",
		city: "Tennessee",
	},
	{
		destination: "Pigeon Forge",
		city: "Tennessee",
	},
	{
		destination: "Big Bear Lake",
		city: "California",
	},
	{
		destination: "Lake Powell",
		city: "United States",
	},
	{
		destination: "Pigeon Forge",
		city: "Tennessee",
	},
	{
		destination: "Big Bear Lake",
		city: "California",
	},
	{
		destination: "Lake Powell",
		city: "United States",
	},
];

const DestinationMenu: React.FunctionComponent = () => {
	const [destinations, setDestinations] = useState(ART_CULTURE_DATA);
	const [activeMenu, setActiveMenu] = useState("art");

	const handleMenuChange = (e: MenuInfo) => {
		setActiveMenu(e.key.toString());
	};

	useEffect(() => {
		if (activeMenu === "art") setDestinations(ART_CULTURE_DATA);
		else if (activeMenu === "outdoor") setDestinations(OUTDOOR_DATA);
		else if (activeMenu === "cabin") setDestinations(CABIN_DATA);
		else if (activeMenu === "beach") setDestinations(BEACH_DATA);
		else setDestinations(POPULAR_DATA);
	}, [activeMenu]);

	return (
		<div className="mt-10 ml-4 md:mx-28">
			<text className="text-xl font-bold">
				Inspiration for future gateways
			</text>
			<Menu
				onClick={handleMenuChange}
				selectedKeys={[activeMenu]}
				mode="horizontal"
			>
				<Menu.Item key="art">Destinations for art & culture</Menu.Item>
				<Menu.Item key="outdoor">
					Destinations for outdoor adventure
				</Menu.Item>
				<Menu.Item key="cabin">Mountain Cabin</Menu.Item>
				<Menu.Item key="beach">Beach destinations</Menu.Item>
				<Menu.Item key="popular">Popular destinations</Menu.Item>
			</Menu>
			<div className="flex flex-row flex-wrap text-base mt-4">
				{destinations.map(({ destination, city }) => (
					<div className="flex flex-col w-44 mb-6 md:w-80 md:mr-10">
						<text>{destination}</text>
						<text className="text-gray-400">{city}</text>
					</div>
				))}
			</div>
		</div>
	);
};

export default DestinationMenu;
