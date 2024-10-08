import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Welcome from "@/components/Welcome";
import PopularHeroes from "@/components/PopularHeroes";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { welcome, popular_heroes } = await getDictionary(lang);
  return (
    <div className="Home">
      <Welcome welcome={welcome} />
      <div className="test">
        <PopularHeroes popular_heroes={popular_heroes} />
      </div>
    </div>
  );
}

/**
>>  outline text:
    -webkit-text-stroke: width color;
**/
