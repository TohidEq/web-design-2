"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Locale, i18n } from "@/i18n.config";
import { findFlagUrlByIso2Code } from "country-flags-svg";

import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";

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

  const [toggleLang, setToggleLang] = useState(false);
  const toggleLangHandler = () => {
    setToggleLang(!toggleLang);
  };

  return (
    <div className="locale-switcher">
      <div
        className={`current-lang item ${toggleLang && "show"}`}
        onClick={toggleLangHandler}
      >
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
        <div className="other-langs">
          {i18n.locales.map((locale) => {
            if (locale !== lang)
              return (
                <Link key={locale} href={redirectedPathName(locale)}>
                  <div className="elements">
                    <span>{locale}</span>
                    <div className="img">
                      <Image
                        src={langsFlagsImageUrl[locale]}
                        width={0}
                        height={0}
                        alt={`${locale} flag`}
                      />
                    </div>
                  </div>
                </Link>
              );
          })}
        </div>
      </div>
    </div>
  );
}
