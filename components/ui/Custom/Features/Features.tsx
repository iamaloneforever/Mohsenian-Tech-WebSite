// app/page.tsx
import { Background } from "@/components/ui/Custom/Features/Background";
import { SwiperFeatures } from "./SwiperFeatures";

export default function Features() {
	return (
		<div className="flex h-screen w-full items-end">
			<div className="relative h-[50vh] w-full border-y-2">
				<Background />
				<SwiperFeatures />
			</div>
		</div>
	);
}
