import FormSearch from "../components/formSearch";
import Notification from "../components/notification";
import bgJpg from "../bg.jpg";
import bgWebp from "../bg.webp";
import HeadingContent from "components/headingContent";
import CardItem from "components/cardItem";
import CardList from "components/cardList";
import BigCardItem from "components/bigCardItem";
import BigCardList from "components/bigCardList";

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
			<CardList />
			<BigCardList title="Live anywhere" />
		</div>
	);
};

export default LandingPage;
