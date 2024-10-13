import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Welcome from "@/components/Welcome";
import PopularHeroes from "@/components/PopularHeroes";
import VideoPlayer from "@/components/videoPlayer/VideoPlayer";
import Subscription from "@/components/subscription/Subscription";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { welcome, popular_heroes, trailer_video, subscription } =
    await getDictionary(lang);
  return (
    <div className="Home">
      <Welcome welcome={welcome} />
      <PopularHeroes popular_heroes={popular_heroes} />
      <VideoPlayer trailerVideo={trailer_video} />
      <Subscription subscription={subscription} />
    </div>
  );
}

/**
>>  outline text:
    -webkit-text-stroke: width color;
**/
