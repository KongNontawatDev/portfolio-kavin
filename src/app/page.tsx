import About from "./components/About";
import Banner from "./components/Banner";
import EntrepreneurJourney from "./components/EntrepreneurJourney";
import Footer from "./components/Footer";
import Internship from "./components/Internship";
import Marquee from "./components/Marquee";
import MyJourney from "./components/MyJourney";
import Skill from "./components/Skill";
import Volunteer from "./components/Volunteer";

export default function Home() {
	
	return (
		<div className="bg-white">
			<Banner/>
			<About/>
			<EntrepreneurJourney/>
			{/* <Education/> */}
			{/* <Transcript/> */}
			<MyJourney/>
			<Skill/>
			<Marquee/>
			<Internship/>
			<Volunteer/>
			<Footer/>
		</div>
	);
}
