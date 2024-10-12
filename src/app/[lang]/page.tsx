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
  const { welcome, popular_heroes, trailer_video } = await getDictionary(lang);
  return (
    <div className="Home">
      <Welcome welcome={welcome} />
      <PopularHeroes popular_heroes={popular_heroes} />
      <VideoPlayer trailerVideo={trailer_video} />
    </div>
  );
}

/**
>>  outline text:
    -webkit-text-stroke: width color;
**/
