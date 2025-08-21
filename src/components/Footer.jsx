import "../styles/Footer.css";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";

function Footer() {
	return (
		<div className="footer">
			<div className="container">
				<div>
					<h2>(123) 456-7890</h2>
					<h2>support@gmail.com</h2>
				</div>
				<div>
					<div className="symbols">
						<a
							href="https://www.facebook.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={facebook} alt="Facebook" />
						</a>
						<a
							href="https://www.x.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={twitter} alt="X / Twitter" />
						</a>
						<a
							href="https://www.instagram.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={instagram} alt="Instagram" />
						</a>
						<a
							href="https://www.youtube.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={youtube} alt="YouTube" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
