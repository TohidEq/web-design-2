import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Welcome from "@/components/Welcome";
import PopularHeroes from "@/components/PopularHeroes";
import VideoPlayer from "@/components/videoPlayer/VideoPlayer";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { welcome, popular_heroes } = await getDictionary(lang);
  return (
    <div className="Home">
      <Welcome welcome={welcome} />
      <PopularHeroes popular_heroes={popular_heroes} />
      <VideoPlayer
        videoUrl="/videos/Dota2.mp4"
        thumbnailUrl="/images/dota2_video_preview.png"
        title="Test"
      />
    </div>
  );
}

/**
>>  outline text:
    -webkit-text-stroke: width color;
**/
