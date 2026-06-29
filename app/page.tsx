import ScrollAnimatedSvg from "@/components/ui/Background";
import Demo from "@/components/ui/Custom/Demos/Demo";
import { Faq } from "@/components/ui/Custom/FAQ/Faq";
import Features from "@/components/ui/Custom/Features/Features";
import Footer from "@/components/ui/Custom/Footer/footer";
import Hero from "@/components/ui/Custom/Hero/Hero";

export default function Page() {
	return (
		<div className="mt-45 overflow-x-hidden">
			<Hero />
			<Features />
			<Demo />

			<div className="relative">
				<div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
					<ScrollAnimatedSvg />
				</div>

				<Faq />
			</div>
			<Footer />
		</div>
	);
}
