"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Locale, i18n } from "@/i18n.config";
import { findFlagUrlByIso2Code } from "country-flags-svg";

import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

export default function LocaleSwitcher({ lang }: { lang: Locale }) {
  const flagUrlEnglish = findFlagUrlByIso2Code("US");
  const flagUrlFrench = findFlagUrlByIso2Code("FR");

  const langsFlagsImageUrl = {
    en: flagUrlEnglish,
    fr: flagUrlFrench,
  };

  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    /*
    <ul className="flex gap-x-3">
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className="rounded-md border bg-black px-3 py-2 text-white"
            >
              {locale}
            </Link>
          </li>
        );
      })}
    </ul>
    */
    <div className="locale-switcher">
      <button className="current-lang item">
        <div className="elements">
          <span>{lang}</span>
          <div className="img">
            <Image
              src={langsFlagsImageUrl[lang]}
              width={0}
              height={0}
              alt={`${lang} flag`}
            />
          </div>
          <div className="arrow">
            <IoIosArrowDown className="svg-arrow" />
          </div>
        </div>
      </button>
    </div>
  );
}
