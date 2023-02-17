export default function Home() {
	return (
		<>
			<h1>SENTRY IO DEMO {process.env.NEXT_PUBLIC_ENV}</h1>
			<button
				type="button"
				onClick={() => {
					throw new Error(
						"Sentry Frontend Error on info page " +
							process.env.NEXT_PUBLIC_ENV
					);
				}}
			>
				Throw error
			</button>
		</>
	);
}
