import { Form, Layout, Input, Menu, Avatar } from "antd";
import {
	SearchOutlined,
	GlobalOutlined,
	UserOutlined,
} from "@ant-design/icons";

export interface FormSearchProps {}

const { Header } = Layout;

const FormSearch: React.FunctionComponent = () => {
	return (
		<Layout
			className="bg-transparent mt-8 md:mt-0"
			style={{ background: "transparent" }}
		>
			<div className="hidden md:flex flex-row justify-around items-center bg-gradient-to-b from-gray-600 to-transparent mt-0 py-5">
				<text className="text-white font-bold text-lg">
					Airbbb Logo
				</text>
				<div className="text-white text-base">
					<text className="mx-4">Place to stay</text>
					<text className="mx-4">Experiences</text>
					<text className="mx-4">Online Experiences</text>
				</div>
				<div className="text-white text-base flex flex-row items-center">
					<text className="mx-4">language</text>
					<GlobalOutlined className="mx-4" />
					<Avatar icon={<UserOutlined />} className="mx-4" />
				</div>
			</div>
			<div className="px-3 md:px-96">
				<Form>
					<Form.Item>
						<Input
							style={{
								borderRadius: "15px",
								padding: "10px",
							}}
							placeholder="Where are you going?"
							prefix={<SearchOutlined />}
						/>
					</Form.Item>
				</Form>
			</div>
		</Layout>
	);
};

export default FormSearch;
