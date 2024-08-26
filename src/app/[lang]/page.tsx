import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { nav } = await getDictionary(lang);
  return <main className="">{nav.title1}</main>;
}
