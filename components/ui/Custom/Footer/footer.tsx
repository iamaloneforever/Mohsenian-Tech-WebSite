"use client";

import { Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="border-t border-white/10 bg-[#001220]">
			<div className="mx-auto max-w-7xl px-6 py-20">
				<div className="grid gap-12 md:grid-cols-4">
					{/* Brand */}
					<div className="space-y-4">
						<h2 className="text-2xl font-bold text-white">
							Portfolio<span className="text-primary">.</span>
						</h2>

						<p className="font-text text-sm text-neutral-400">
							Building modern web experiences with clean design and scalable
							technologies.
						</p>
					</div>

					{/* Navigation */}
					<div>
						<h3 className="mb-5 font-semibold text-white">Navigation</h3>

						<div className="flex flex-col gap-3 text-neutral-400">
							<Link href="#home" className="transition hover:text-primary">
								Home
							</Link>
							<Link href="#features" className="transition hover:text-primary">
								Features
							</Link>
							<Link href="#demo" className="transition hover:text-primary">
								Demo
							</Link>
							<Link href="#faq" className="transition hover:text-primary">
								FAQ
							</Link>
						</div>
					</div>

					{/* Contact */}
					<div>
						<h3 className="mb-5 font-semibold text-white">Contact</h3>

						<div className="space-y-3 text-neutral-400">
							<p>hello@example.com</p>
							<p>Available for freelance work</p>
						</div>
					</div>

					{/* Social */}
					<div>
						<h3 className="mb-5 font-semibold text-white">Socials</h3>

						<div className="flex flex-col gap-4 text-neutral-400">
							<p>hello@example.com</p>
							<p>Available for freelance work</p>
						</div>
					</div>
				</div>
				<div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-neutral-500 md:flex-row">
					<p>© 2026 Portfolio. All rights reserved.</p>

					<p className="flex items-center gap-1">
						Made with <Heart fill="var(--primary)" color="none" /> by Alone
					</p>
				</div>
			</div>
		</footer>
	);
}
