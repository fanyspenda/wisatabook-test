import { Form, Layout, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export interface FormSearchProps {}

const FormSearch: React.FunctionComponent = () => {
	return (
		<Layout
			className="bg-transparent pt-5 px-3"
			style={{ background: "transparent" }}
		>
			<Form>
				<Form.Item>
					<Input
						placeholder="Where are you going?"
						prefix={<SearchOutlined />}
					/>
				</Form.Item>
			</Form>
		</Layout>
	);
};

export default FormSearch;
