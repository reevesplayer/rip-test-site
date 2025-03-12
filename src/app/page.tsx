'use client';

import { HeroUIProvider } from "@heroui/react";
import Link from "next/link";

export default function Home() {
	return (
		<HeroUIProvider>
			<>
				{/* Full-Width Header Image */}
				<div className="relative w-full h-[500px]">
					<img 
						src="/assets/rustdefault.png" 
						alt="Rust in Peace" 
						className="w-full h-full object-cover"
					/>
				</div>

				{/* Main Content */}
				<div className="max-w-screen-xl mx-auto p-8 bg-black text-white">
					<h1 className="text-4xl font-bold">Welcome to Rust in Peace</h1>
					<p className="mt-4 text-lg">
						Experience the best Rust servers with top-tier performance.
					</p>
				</div>
			</>
		</HeroUIProvider>
	);
}
