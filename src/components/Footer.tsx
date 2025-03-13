import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="dark bg-background text-foreground justify-center items-center">
            <div className="flex items-center justify-center">
                <div className="flex space-x-4">
                    <a href="https://tiktok.com/rustinpeace" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/tiktok.png" alt="TikTok" className="h-16" />
                    </a>
                    <a href="https://youtube.com/rustinpeace" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/youtube.png" alt="YouTube" className="h-16" />
                    </a>
                    <a href="https://discord.gg/rustinpeace" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/discord.png" alt="Discord" className="h-16" />
                    </a>
                </div>

                <img src="/assets/rip-logo.png" alt="Rust in Peace" className="h-16 px-6" />

                <div className="flex space-x-4">
                    <a href="https://twitter.com/rustinpeace" target="_blank" rel="noopener noreferrer">
                        <img src="assets/steam.png" alt="Steam" className="h-16" />
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src="assets/mail.png" alt="Email" className="h-16" />
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src="assets/store.png" alt="Store" className="h-16" />
                    </a>
                </div>
            </div>
        </footer>
    );
}