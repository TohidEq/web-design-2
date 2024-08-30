"use client";
import React, { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { Locale } from "@/i18n.config";

import DotLogo from "@/components/icons/DotLogo";

import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineXMark } from "react-icons/hi2";

import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";

type Props = {
  nav: any;
  lang: Locale;
};

function Navbar({ nav, lang }: Props) {
  /*  NO NEED YET(HOVER IS FINE) *
  const [windowSize, setWindowSize] = useState([0, 0]);
  // update windowSize when window resizes
  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  */

  /* NO NEED YET(HOVER IS FINE)
  const [toggleLang, setToggleLang] = useState(false);
  const toggleLangHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setToggleLang(!toggleLang);
  };
  */

  console.log("lang:", lang);

  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMenuHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="logo">
          <DotLogo classNames="logo-svg" />
        </div>
        <div className="links-desktop">
          <ul className="link-items">
            {nav.links.map((link: string, index: number) => (
              <li className="link-item" key={`key-${index}`}>
                <Link href={"#"}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
        <LocaleSwitcher lang={lang} />
        <div className="menu">
          <Link className="signup" href={"#"}>
            {nav.signup}
          </Link>
          <div className="menu-mobile">
            <button className="menu-btn" onClick={toggleMenuHandler}>
              {toggleMenu ? (
                <HiOutlineXMark className="menu-icon menu-is-open" />
              ) : (
                <RxHamburgerMenu className="menu-icon menu-id-close" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
