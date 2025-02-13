import About from "./components/About";
import Banner from "./components/Banner";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Internship from "./components/Internship";
import MyJourney from "./components/MyJourney";
import Skill from "./components/Skill";
import Transcript from "./components/Transcript";
import Volunteer from "./components/Volunteer";

export default function Home() {
	
	return (
		<div className="bg-white">
			<Banner/>
			<About/>
			<Education/>
			<Transcript/>
			<Skill/>
			<MyJourney/>
			<Internship/>
			<Volunteer/>
			<Footer/>
		</div>
	);
}
