import { Button } from "antd";

export interface HeadingContentProps {}

const HeadingContent: React.FunctionComponent = () => {
	return (
		<div className="pl-4 pt-2">
			<text className="text-7xl font-bold text-white">Go</text>
			<br />
			<text className="text-7xl font-bold text-white">Near</text>
			<br />
			<button className="mt-2 font-semibold rounded-md py-1 px-4 bg-gray-100">
				Explore nearby stays
			</button>
		</div>
	);
};

export default HeadingContent;
