'use client';

import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
				{/* Logo */}
				<Link href="/" className="flex items-center space-x-3">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="h-8"
						alt="Flowbite Logo"
					/>
					<span className="text-2xl font-semibold text-white">
						Flowbite
					</span>
				</Link>

				{/* Navbar Links */}
				<div className="w-auto">
					<ul className="font-medium flex flex-row space-x-8">
						<li><Link href="/" className="block py-2 px-3 text-white hover:text-gray-400">Home</Link></li>
						<li><Link href="/stats" className="block py-2 px-3 text-white hover:text-gray-400">Stats</Link></li>
						<li><Link href="/donate" className="block py-2 px-3 text-white hover:text-gray-400">Donate</Link></li>
						<li><Link href="/servers" className="block py-2 px-3 text-white hover:text-gray-400">Servers</Link></li>
						<li><Link href="/rules" className="block py-2 px-3 text-white hover:text-gray-400">Rules</Link></li>
						<li><Link href="/discord" className="block py-2 px-3 text-white hover:text-gray-400">Discord</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
