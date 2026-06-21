import { Card } from "@/components/retroui/Card";
import { FeatureCardInterface } from "@/types/CardType";
import Image from "next/image";
import { cn } from "@/lib/utils"; // If you have a cn utility, otherwise create one

export const CardFeatures = ({
	title,
	logo,
	className,
	logoClassName,
}: FeatureCardInterface & {
	className?: string;
	logoClassName?: string;
}) => {
	return (
		<Card className="w-full">
			<div className="flex flex-col items-center justify-center p-6 h-48 gap-4">
				{/* Logo with fallback and loading states */}
				{logo ? (
					<div className="relative w-full h-20 flex items-center justify-center">
						<Image
							src={logo}
							alt=""
							width={120}
							height={80}
							className={cn("object-contain max-h-full w-auto", logoClassName)}
							priority={false}
							loading="lazy"
							sizes="(max-width: 768px) 100px, 120px"
						/>
					</div>
				) : (
					// Fallback icon when no logo is provided
					<div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
						<span className="text-2xl font-bold text-gray-400">
							{title.charAt(0).toUpperCase()}
						</span>
					</div>
				)}

				{/* Brand name with better typography */}
				<h3 className="text-2xl font-semibold text-gray-800 text-center tracking-tight">
					{title}
				</h3>
			</div>
		</Card>
	);
};
