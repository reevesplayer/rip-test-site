import Image from "next/image";

export default function Home() {
	return (
		<>
			{/* Hero Section with Full-Width Image */}
			<div className="relative w-full h-96">
				<Image 
					src="/your-image.jpg" // Replace with your image path
					alt="Landing Page Header"
					layout="fill"
					objectFit="cover"
					priority
				/>
			</div>

			{/* Main Content */}
			<div className="max-w-screen-xl mx-auto p-8 text-white">
				<h1 className="text-4xl font-bold">Welcome to Rust in Peace</h1>
				<p className="mt-4 text-lg">
					Experience the best Rust servers with top-tier performance.
				</p>
			</div>
		</>
	);
}
