import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Welcome from "@/components/Welcome";
import PopularHeroes from "@/components/PopularHeroes";
import VideoPlayer from "@/components/videoPlayer/VideoPlayer";
import Subscription from "@/components/subscription/Subscription";
import HeroesCards from "@/components/heroes/HeroesCards";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const langDict = await getDictionary(lang);
  return (
    <div className="Home">
      <Welcome welcome={langDict.welcome} />
      <HeroesCards
        herosCards={langDict.heroes.cards}
        watchMore={langDict.heroes.watch_more}
        watchLess={langDict.heroes.watch_less}
      />
      <PopularHeroes popular_heroes={langDict.popular_heroes} />
      <VideoPlayer trailerVideo={langDict.trailer_video} />
      <Subscription subscription={langDict.subscription} />
    </div>
  );
}

/**
>>  outline text:
    -webkit-text-stroke: width color;
**/
