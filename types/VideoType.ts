export interface Video {
	id: number;
	title: string;
	thumbnail: string;
	embedUrl: string;
	duration: string;
}
export interface VideosSwiperProps {
	onIndexChange?: (index: number) => void;
	videos: Video[];
}
