"use client";
import { Card } from "@/components/retroui/Card";
import { Badge } from "@/components/retroui/Badge";
import Image from "next/image";
import { BriefcaseBusiness, Clock, Wrench } from "lucide-react";
import { motion, Variants } from "motion/react";

const CardVARIANT: Variants = {
	initial: {
		scale: 1,
		rotate: 0,
	},
	hover: {
		scale: 1.05,
		rotate: 5,
		transition: { duration: 1, type: "spring", damping: 15, stiffness: 100 },
	},
};

export default function CardHero() {
	return (
		<div className="flex min-h-screen items-center justify-center p-4">
			<motion.div variants={CardVARIANT} whileHover={"hover"}>
				<Card className="w-full max-w-md">
					<Card.Header className="space-y-4">
						<Card.Title>About Me</Card.Title>

						<div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
							<Image
								src="/CardPhoto.jpg"
								alt="Company SEO's Profile picture"
								fill
								className="object-cover"
							/>
						</div>

						<div className="flex flex-col items-start gap-4 border-t-2 py-4">
							<div className="flex items-center gap-2">
								<div className="relative h-10 w-10 flex-shrink-0">
									<Image
										src="/Avatar.jpg"
										alt="Company SEO's Profile picture"
										fill
										className="rounded-full border-2 border-primary object-cover shadow-sm"
									/>
								</div>
								<h1>Company Name </h1>
								<Badge variant={"solid"}>
									Always Online{" "}
									<motion.span
										className="mx-2 h-2 w-2 rounded-full bg-green-400"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{
											duration: 2,
											repeat: Infinity,
											repeatType: "reverse",
										}}
									></motion.span>
								</Badge>
							</div>
							<p>@TechCompany</p>
							<p className="font-text text-sm leading-relaxed text-gray-700">
								I can not find what to write here.. so imagine I wrote some good
								stuff.
							</p>
							{/* Badge‌ها با Grid */}
							<div className="grid grid-cols-2 gap-2 pt-2 md:grid-cols-3">
								<Badge
									variant="outline"
									className="flex items-center justify-center gap-1.5"
								>
									<BriefcaseBusiness className="h-3.5 w-3.5" />
									128 Work
								</Badge>
								<Badge
									variant="outline"
									className="flex items-center justify-center gap-1.5"
								>
									<Wrench className="h-3.5 w-3.5" />
									28 Brands
								</Badge>
								<Badge
									variant="outline"
									className="flex items-center justify-center gap-1.5"
								>
									<Clock className="h-3.5 w-3.5" />
									1000+ hours
								</Badge>
							</div>{" "}
						</div>
					</Card.Header>
				</Card>
			</motion.div>
		</div>
	);
}
