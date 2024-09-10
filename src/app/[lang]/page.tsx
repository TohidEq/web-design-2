import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Welcome from "./Welcome";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { welcome } = await getDictionary(lang);
  return (
    <div className="Home">
      <Welcome welcome={welcome} />
    </div>
  );
}

/**
>>  outline text:
    -webkit-text-stroke: width color;
**/
