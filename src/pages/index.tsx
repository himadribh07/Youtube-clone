import Image from "next/image";
import { VideoGrid } from "@/components/VideoGrid";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <VideoGrid />
    </div>
  );
}
