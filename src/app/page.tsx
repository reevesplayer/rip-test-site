'use client';

import { HeroUIProvider } from "@heroui/react";
import { Server } from "http";
import Link from "next/link";
import ButtonWithIcons from "@/components/Buttons";
import { Card, CardBody, CardHeader, CardFooter, Image, Button, Spacer } from "@heroui/react";
import { Mondays, Fridays} from "@/components/ServerStatus";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <HeroUIProvider>
            <>
                {/* Add padding to prevent overlap with fixed navbar */}
                <div className="dark text-foreground bg-background pt-20"> 
                    {/* Full-Width Header Image with Overlay Text */}
                    <div className="relative w-full h-[500px]">
                        <img 
                            src="/assets/rustdefault.png" 
                            alt="Rust in Peace" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

                        {/* Overlay Text */}
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-8">
                            <h1 className="text-4xl font-bold">Rust in Peace</h1>
                            <p className="mt-4 text-lg">The Best of Modded Rust</p>
                            <div className="flex items-center justify-center mt-4 space-x-4">
                                <Button color="default" className="px-6">SERVERS</Button>
                                <Button 
                                    as="a"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://discord.gg/rustinpeace" 
                                    color="default" 
                                    className="px-6"
                                >
                                    DISCORD
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto w-full px-6">
					<h1 className="font-bold text-9xl">CURRENT SERVERS</h1>
					<p className="text-default-500 mb-6">Placeholder</p>

					{/* Grid Layout for Cards */}
					<div className="flex min-h-screen items-center justify-center p-6">
						<div className="flex flex-row items-center">
							<Mondays />
							<Spacer x={4} />
							<Fridays />
						</div>
					</div>
				</div>

            </>
        </HeroUIProvider>
    );
}