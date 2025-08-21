import "../styles/Reviews.css";
import { useState, useEffect } from "react";

const reviews = [
	{
		id: 1,
		name: "Mary",
		review:
			"My PC arrived a few days earlier than expected, and I was updated every step of the way!",
	},
	{
		id: 2,
		name: "John",
		review:
			"The build quality is amazing, and the performance exceeded my expectations.",
	},
	{
		id: 3,
		name: "Alice",
		review:
			"Customer service was very helpful and answered all my questions very quickly.",
	},
	{
		id: 4,
		name: "Bob",
		review: "Super fast delivery, highly recommend this brand!",
	},
	{
		id: 5,
		name: "Sophia",
		review:
			"I love my new PC! It runs all my games smoothly and looks fantastic.",
	},
];

function Reviews() {
	const [current, setCurrent] = useState(0);
	const [fade, setFade] = useState(true);

	const nextReview = () => {
		setFade(false);
		setTimeout(() => {
			setCurrent((prev) => (prev + 1) % reviews.length);
			setFade(true);
		}, 50);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			nextReview();
		}, 12500);

		return () => clearInterval(interval);
	}, [current]);

	const { name, review } = reviews[current];

	return (
		<div className="reviews">
			<div className={`review-content ${fade ? "fade" : ""}`}>
				<h2>{name}</h2>
				<h3>★ ★ ★ ★ ★</h3>
				<i>{review}</i>
			</div>

			<div className="review-dots">
				{reviews.map((review, idx) => (
					<span
						key={review.id}
						className={`dot ${idx === current ? "active" : ""}`}
						onClick={() => {
							if (idx !== current) {
								setFade(false);
								setTimeout(() => {
									setCurrent(idx);
									setFade(true);
								}, 50);
							}
						}}
					></span>
				))}
			</div>
		</div>
	);
}

export default Reviews;
