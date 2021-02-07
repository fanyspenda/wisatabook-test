import FormSearch from "../components/formSearch";
import Notification from "../components/notification";

import HeadingContent from "components/headingContent";
import CardList from "components/cardList";
import BigCardList from "components/bigCardList";
import RectCardList from "components/rectCardList";
import DestinationMenu from "components/DestinationMenu";
import Footer from "components/footer";
import ImgBackground from "components/imgBackground";

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
			<ImgBackground />
			<FormSearch />
			<HeadingContent />
			<CardList />
			<BigCardList title="Live anywhere" data={LIVE_EVERYWHERE_DATA} />
			<div className="bg-black">
				<BigCardList
					data={ONLINE_EXPERIENCES}
					isDarkMode
					title="Online experiences"
					description="interactive activities you can do together, led by expert hosts"
				/>
			</div>

			<RectCardList />
			<DestinationMenu />
			<Footer />
		</div>
	);
};

export default LandingPage;
