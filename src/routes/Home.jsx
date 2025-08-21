import "../styles/home.css";
import homeImage from "../assets/home.jpg";
import qualityOne from "../assets/quality-one.svg";
import qualityTwo from "../assets/quality-two.svg";
import qualityThree from "../assets/quality-three.svg";
import Reviews from "../components/Reviews";

function Home() {
	return (
		<div className="home">
			<div className="section-one">
				<div className="section-left">
					<div className="tagline">
						<h2>Performance.</h2>
						<h2>Quality.</h2>
						<h2>Value.</h2>
					</div>

					<div>
						<p>Each PC is hand-assembled with love and built for you.</p>
						<p>
							Every component selected ensures the most optimal performance at
							the best price point.
						</p>
					</div>

					<button>SHOP NOW</button>
				</div>
				<div className="section-right">
					<img src={homeImage} alt="Desktop Setup" />
				</div>
			</div>

			<div className="section-two">
				<h1>WHY CHOOSE US?</h1>
				<div className="cards-container">
					<div className="qualities-card">
						<img src={qualityOne} alt="Hand Crafted" />
						<h2>HAND CRAFTED</h2>
						<p>
							Each system's parts are carefully chosen and assembled to provide
							maximum value, picked and built by a team of professional gamers
							who use these very own PCs.
						</p>
					</div>

					<div className="qualities-card">
						<img src={qualityTwo} alt="Quality Assured" />
						<h2>QUALITY ASSURED</h2>
						<p>
							Every PC is thoroughly inspected and tested through vigorous
							benchmarks for quality control before they are carefully packaged
							off to you.
						</p>
					</div>

					<div className="qualities-card">
						<img src={qualityThree} alt="Lifetime Warranty" />
						<h2>LIFETIME WARRANTY</h2>
						<p>
							All of our computers have unlimited lifetime warranty. If any
							issues arise, simply give us a call and our team will fully
							restore the PC.
						</p>
					</div>
				</div>
			</div>

			<div className="section-three">
				<h1>Testimonials</h1>
				<div className="divider"></div>
				<Reviews />
			</div>
		</div>
	);
}

export default Home;
