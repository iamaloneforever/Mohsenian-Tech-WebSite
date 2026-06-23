"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/pagination";
import { Pause, Play } from "lucide-react";
import { motion } from "motion/react";
import { useState, useMemo } from "react";
import { VideosSwiperProps } from "@/types/VideoType";

export default function VideosSwiper({
	onIndexChange,
	videos,
}: VideosSwiperProps) {
	const isDesktop = useMediaQuery({ minWidth: 1022 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1021 });
	const [activeIndex, setActiveIndex] = useState(0);

	const config = useMemo(() => {
		if (isDesktop) {
			return {
				slidesPerView: 2,
				direction: "vertical" as const,
				spaceBetween: 25,
			};
		} else if (isTablet) {
			return {
				slidesPerView: 2,
				direction: "vertical" as const,
				spaceBetween: 20,
			};
		} else {
			return {
				slidesPerView: 1,
				direction: "horizontal" as const,
				spaceBetween: 20,
			};
		}
	}, [isDesktop, isTablet]);

	const handleSlideClick = (index: number) => {
		setActiveIndex(index);
		onIndexChange?.(index);
	};

	return (
		<div className="h-full w-full">
			<Swiper
				key={`${config.slidesPerView}-${config.direction}`}
				modules={[Pagination, Autoplay]}
				direction={config.direction}
				spaceBetween={config.spaceBetween}
				slidesPerView={config.slidesPerView}
				pagination={{ clickable: true }}
				autoplay={{
					delay: 10000,
					disableOnInteraction: true,
				}}
				loop={true}
				className="h-full w-full !pb-10 md:!pr-10 md:!pb-2"
			>
				{videos.map((video, index) => (
					<SwiperSlide key={video.id}>
						<div
							onClick={() => handleSlideClick(index)}
							className="group relative h-full w-full cursor-pointer overflow-hidden rounded-lg border-2 border-primary shadow-lg transition-all duration-500 hover:translate-1 hover:shadow-sm"
						>
							<img
								src={video.thumbnail}
								alt={video.title}
								className="h-full w-full object-cover"
								loading="lazy"
							/>
							<div className="absolute right-0 bottom-0 left-0 flex items-center justify-between bg-white/30 p-3">
								<span className="text-sm font-medium text-white drop-shadow-md">
									{video.title}
								</span>
								<span className="rounded-full bg-primary px-2 py-1 text-white">
									{video.duration}
								</span>
							</div>
							<motion.div
								whileHover={{ scale: 1.1, rotate: 360 }}
								whileTap={{ scale: 0.9 }}
								className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
							>
								<div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/40">
									{activeIndex === index ? (
										<Pause className="h-7 w-7 fill-primary text-primary drop-shadow-lg" />
									) : (
										<Play className="h-7 w-7 fill-primary text-primary drop-shadow-lg" />
									)}
								</div>
							</motion.div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
