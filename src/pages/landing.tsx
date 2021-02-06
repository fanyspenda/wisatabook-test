import FormSearch from "../components/formSearch";
import Notification from "../components/notification";
import bgJpg from "../bg.jpg";
import bgWebp from "../bg.webp";

export interface LandingPageProps {}

const LandingPage: React.FunctionComponent = () => {
	return (
		<div className="relative">
			<Notification />
			<picture className="absolute w-screen" style={{ left: "0" }}>
				<source srcSet={bgWebp} type="image/webp" />
				<source srcSet={bgJpg} type="image/jpeg" />
				<img src={bgJpg} alt="Alt Text!" />
			</picture>
			<FormSearch />
		</div>
	);
};

export default LandingPage;
