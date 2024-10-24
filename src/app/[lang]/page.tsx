import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Welcome from "@/components/Welcome";
import PopularHeroes from "@/components/PopularHeroes";
import VideoPlayer from "@/components/videoPlayer/VideoPlayer";
import Subscription from "@/components/subscription/Subscription";
import HeroesCards from "@/components/heroes/HeroesCards";
import HeroesSlideShow from "@/components/heroes/HeroesSlideShow";

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
      <div className="bg-red-500 w-5 h-full"></div>
      <HeroesSlideShow
        slides={langDict.heroes.slides}
        moreDetailed={langDict.heroes.more_detailed}
      />
      <div className="bg-red-500 w-5 h-full"></div>

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
