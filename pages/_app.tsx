import "../styles/globals.css";
import "@picocss/pico";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<footer className="container">
				<nav>
					<ul>
						<li>
							<strong>Brand</strong>
						</li>
					</ul>
					<ul>
						<li>
							<Link href="/about">About</Link>
						</li>
						<li>
							<Link href="/info">Info</Link>
						</li>
						<li>
							<Link href="/">Home</Link>
						</li>
					</ul>
				</nav>
			</footer>
			<main className="container">
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default MyApp;
