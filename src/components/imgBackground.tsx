import bgJpg from "../bg.jpg";
import bgWebp from "../bg.webp";
import bgHDWebp from "../bgHD.webp";

export interface ImgBackgroundProps {}

const ImgBackground: React.FunctionComponent<ImgBackgroundProps> = () => {
	return (
		<div
			className="absolute md:overflow-hidden md:flex md:items-center md:h-5/6"
			style={{ left: "0", zIndex: -1 }}
		>
			<picture>
				<source
					srcSet={bgHDWebp}
					type="image/webp"
					media="(min-width: 768px)"
				/>
				<source srcSet={bgWebp} type="image/webp" />
				<source srcSet={bgJpg} type="image/jpeg" />
				<img src={bgJpg} className=" md:w-screen" />
			</picture>
		</div>
	);
};

export default ImgBackground;
