import FormSearch from "../components/formSearch";
import Notification from "../components/notification";
import bgJpg from "../bg.jpg";
import bgWebp from "../bg.webp";
import { Button } from "antd";
import HeadingContent from "components/headingContent";

export interface LandingPageProps {}

const LandingPage: React.FunctionComponent = () => {
	return (
		<div>
			<Notification />
			<picture
				className="absolute w-full"
				style={{ left: "0", zIndex: -1 }}
			>
				<source srcSet={bgWebp} type="image/webp" />
				<source srcSet={bgJpg} type="image/jpeg" />
				<img src={bgJpg} alt="Alt Text!" />
			</picture>

			<FormSearch />
			<HeadingContent />
		</div>
	);
};

export default LandingPage;
