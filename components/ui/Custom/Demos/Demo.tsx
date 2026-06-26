"use client";
import { Card } from "@/components/retroui/Card";
import VideosSwiper from "./VideosSwiper";
import { useState } from "react";
import { Video } from "@/types/VideoType";
import { motion } from "motion/react";

const videos: Video[] = [
	{
		id: 0,
		title: "آموزش React",
		thumbnail:
			"https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=640&h=360&fit=crop",
		embedUrl:
			"https://www.aparat.com/video/video/embed/videohash/gcolb9m/vt/frame",
		duration: "۱۲:۳۴", // اضافه شد
	},
	{
		id: 1,
		title: "آموزش Next.js",
		thumbnail:
			"https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=640&h=360&fit=crop",
		embedUrl:
			"https://www.aparat.com/video/video/embed/videohash/example2/vt/frame",
		duration: "۰۸:۲۰",
	},
	{
		id: 2,
		title: "آموزش Tailwind",
		thumbnail:
			"https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=640&h=360&fit=crop",
		embedUrl:
			"https://www.aparat.com/video/video/embed/videohash/example3/vt/frame",
		duration: "۱۵:۴۵",
	},
	{
		id: 3,
		title: "آموزش TypeScript",
		thumbnail:
			"https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=640&h=360&fit=crop",
		embedUrl:
			"https://www.aparat.com/video/video/embed/videohash/example4/vt/frame",
		duration: "۰۹:۱۵",
	},
	{
		id: 4,
		title: "آموزش GraphQL",
		thumbnail:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=360&fit=crop",
		embedUrl:
			"https://www.aparat.com/video/video/embed/videohash/example5/vt/frame",
		duration: "۱۱:۲۲",
	},
];

export default function Demo() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const currentVideo = videos[currentIndex];

	return (
		<motion.div
			initial={{ opacity: 0, x: 100 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ delay: 1, duration: 1 }}
			className="flex h-screen items-center justify-center p-2"
		>
			<Card className="w-full lg:w-5/6">
				<Card.Header className="text-2xl font-bold">My Demos</Card.Header>
				<Card.Content>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div className="flex flex-col justify-center">
							<div
								className="relative w-full overflow-hidden rounded-lg border-4 border-primary shadow-md"
								style={{ paddingTop: "56.25%" }}
							>
								<iframe
									key={currentVideo.id}
									src={currentVideo.embedUrl}
									className="absolute top-0 left-0 h-full w-full"
									allowFullScreen
									loading="lazy"
									title={currentVideo.title}
								></iframe>
							</div>
							<div className="mt-2 flex items-center justify-between">
								<p className="text-sm font-medium">{currentVideo.title}</p>
								<span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
									{currentVideo.duration}
								</span>
							</div>
						</div>

						{/* سوایپر ویدیوها */}
						<div className="flex h-[250px] flex-col items-center justify-center gap-2 rounded-lg md:h-[50vh]">
							<VideosSwiper onIndexChange={setCurrentIndex} videos={videos} />
						</div>
					</div>
				</Card.Content>
			</Card>
		</motion.div>
	);
}
