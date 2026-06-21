// app/page.tsx
import { Background } from "@/components/ui/Custom/Features/Background";
import { SwiperFeatures } from "./SwiperFeatures";

export default function Features() {
  return (
    <div className="w-full  flex items-center h-screen">
      <div className="h-[50vh] border-y-2 relative w-full">
        <Background />
        <SwiperFeatures />
      </div>
    </div>
  );
}
