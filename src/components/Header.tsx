import Link from "next/link";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default async function Header({ lang }: { lang: Locale }) {
  const { nav } = await getDictionary(lang);

  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-x-8">
          <li>
            <Link href={`/${lang}`}>{nav.title1}</Link>
          </li>
          <li>
            <Link href={`/${lang}/about`}>{nav.title2}</Link>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
