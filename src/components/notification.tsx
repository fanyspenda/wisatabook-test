import { Layout, Typography } from "antd";

const { Text } = Typography;
const Notification: React.FunctionComponent = () => {
	return (
		<div className="w-auto bg-black pt-4 pb-4">
			<text className="text-white underline">
				Get the latest on our COVID-19 response
			</text>
		</div>
	);
};

export default Notification;
