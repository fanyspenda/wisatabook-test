import FormSearch from "../components/formSearch";
import Notification from "../components/notification";
import bgJpg from "../bg.jpg";
import bgWebp from "../bg.webp";
import HeadingContent from "components/headingContent";
import CardList from "components/cardList";
import BigCardList from "components/bigCardList";
import RectCardItem from "components/rectCardItem";
import RectCardList from "components/rectCardList";

const LIVE_EVERYWHERE_DATA = [
	"Entire Homes",
	"Cabbins and Cottages",
	"Unique stay",
	"Pets welcome",
];

const ONLINE_EXPERIENCES = [
	"Make handmade pizza with Italian Grandmas",
	"Practice mindful eating through zen philosophy",
	"Get to know Argentina's famous Yerba Mate",
	"Meditate to music with a parisian concert pianist",
];

const LandingPage: React.FunctionComponent = () => {
	return (
		<div>
			<Notification />
			<img
				src={bgJpg}
				className="absolute w-full"
				style={{ left: "0", zIndex: -1 }}
			/>

			<FormSearch />
			<HeadingContent />
			<CardList />
			<BigCardList title="Live anywhere" data={LIVE_EVERYWHERE_DATA} />
			<BigCardList
				data={ONLINE_EXPERIENCES}
				isDarkMode
				title="Online experiences"
				description="interactive activities you can do together, led by expert hosts"
			/>
			<RectCardList />
		</div>
	);
};

export default LandingPage;
