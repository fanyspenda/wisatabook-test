import { Divider } from "antd";
import {
	GlobalOutlined,
	DollarOutlined,
	FacebookOutlined,
	TwitterOutlined,
	InstagramOutlined,
} from "@ant-design/icons";

export interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
	return (
		<div className="bg-gray-100 flex flex-row flex-wrap pl-4 pt-6 pr-4 mt-4 md:px-28">
			<div className="flex flex-col w-screen mb-6 md:w-80 md:mr-10">
				<text className="text-base font-bold mb-2">About</text>
				<text className="mb-2">How Airbnb works</text>
				<text className="mb-2">Newsroom</text>
				<text className="mb-2">Investor</text>
				<text className="mb-2">Airbnb Plus</text>
				<text className="mb-2">Airbnb luxe</text>
				<text className="mb-2">HotelTonight</text>
				<text className="mb-2">Airbnb for Work</text>
				<text className="mb-2">Olympics</text>
				<text className="mb-2">Careers</text>
				<div className="md:hidden">
					<Divider
						style={{ border: "2px solid #e8e8e8", marginBottom: 0 }}
					/>
				</div>
			</div>
			<div className="flex flex-col w-screen mb-6 md:w-80 md:mr-10">
				<text className="text-base font-bold mb-2">Community</text>
				<text className="mb-2">Diversity & Belonging</text>
				<text className="mb-2">Accessibility</text>
				<text className="mb-2">Airbnb Associates</text>
				<text className="mb-2">Frontline Stays</text>
				<text className="mb-2">invite friends</text>
				<text className="mb-2">Gift cards</text>
				<text className="mb-2">Airbnb.org</text>
				<div className="md:hidden">
					<Divider
						style={{ border: "2px solid #e8e8e8", marginBottom: 0 }}
					/>
				</div>
			</div>
			<div className="flex flex-col w-screen mb-6 md:w-80 md:mr-10">
				<text className="text-base font-bold mb-2">Host</text>
				<text className="mb-2">Host your home</text>
				<text className="mb-2">Host an Online Experience</text>
				<text className="mb-2">Host an Experience</text>
				<text className="mb-2">Responsible Hosting</text>
				<text className="mb-2">Resource Center</text>
				<text className="mb-2">Community Center</text>
				<div className="md:hidden">
					<Divider
						style={{ border: "2px solid #e8e8e8", marginBottom: 0 }}
					/>
				</div>
			</div>
			<div className="flex flex-col w-screen md:w-40 mb-6">
				<text className="text-base font-bold mb-2">Support</text>
				<text className="mb-2">Our COVID-19 Response</text>
				<text className="mb-2">Help Center</text>
				<text className="mb-2">Cancellation options</text>
				<text className="mb-2">Neighborhood Support</text>
				<text className="mb-2">Trust & Safety</text>
				<div className="md:hidden">
					<Divider
						style={{ border: "2px solid #e8e8e8", marginBottom: 0 }}
					/>
				</div>
			</div>

			<div className="hidden md:block w-screen">
				<Divider
					style={{ border: "2px solid #e8e8e8", marginBottom: 0 }}
				/>
			</div>

			<div className="flex flex-col md:flex-row-reverse md:justify-between md:items-center w-screen mb-6">
				<div className="flex flex-row font-bold">
					<div className="flex items-baseline w-32">
						<GlobalOutlined />
						<text className="ml-2 underline">English (US)</text>
					</div>
					<div className="flex items-baseline w-32">
						<DollarOutlined />
						<text className="ml-2 underline">USD</text>
					</div>
					<div className="hidden md:block w-32">
						<FacebookOutlined className="mx-2 text-xl" />
						<TwitterOutlined className="mx-2 text-xl" />
						<InstagramOutlined className="mx-2 text-xl" />
					</div>
				</div>

				<div className="mt-4 md:flex md:flex-row">
					<text className="mb-2 mr-4">
						© 2021 Airbbb, Inc. All rights reserved
					</text>
					<text className="mb-2 mr-4">&middot;</text>

					<div>
						<text className="mb-2 mr-4">Privacy</text>
						<text className="mb-2 mr-4">&middot;</text>
						<text className="mb-2 mr-4">Terms</text>
						<text className="mb-2 mr-4">&middot;</text>
						<text className="mb-2 mr-4">Sitemap</text>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
