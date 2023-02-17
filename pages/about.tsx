export default function About() {
	const clickMe = () => {
		var x: any;
		x.test = 1;
	};

	return (
		<>
			<h1>SENTRY IO DEMO {process.env.NEXT_PUBLIC_ENV}</h1>
			<button type="button" onClick={clickMe}>
				Throw error
			</button>
		</>
	);
}
