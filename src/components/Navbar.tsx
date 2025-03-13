'use client';

import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="fixed top-0 left-0 w-full bg-black/80 shadow-md z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8' }}>
			<div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
				{/* Logo */}
				<Link href="/" className="flex items-center space-x-3">
					<img
						src="/assets/rip-logo.png"
						className="h-10"
						alt="Rust In Peace Logo"
					/>
					<span className="text-2xl font-semibold text-white px-2">
						RUST IN PEACE
					</span>
				</Link>

				{/* Navbar Links */}
				<div className="w-auto">
					<ul className="font-medium flex flex-row space-x-8">
						<li><Link href="/" className="block py-2 px-3 text-white hover:text-gray-400">HOME</Link></li>
						<li><Link href="/servers" className="block py-2 px-3 text-white hover:text-gray-400">SERVERS</Link></li>
						<li><Link href="/stats" className="block py-2 px-3 text-white hover:text-gray-400">STATS</Link></li>
						<li><Link href="/rules" className="block py-2 px-3 text-white hover:text-gray-400">RULES</Link></li>
						<li><Link href="https://store.rustinpeace.co/" className="block py-2 px-3 text-white hover:text-gray-400">DONATE</Link></li>
						<li><Link href="https://discord.com/invite/rustinpeace" className="block py-2 px-3 text-white hover:text-gray-400">DISCORD</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
