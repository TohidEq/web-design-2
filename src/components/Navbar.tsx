"use client";
import React, { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { Locale } from "@/i18n.config";

import DotLogo from "@/components/icons/DotLogo";

import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineXMark } from "react-icons/hi2";

import {
  FaTwitter,
  FaTelegramPlane,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

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

  console.log("lang:", lang);

  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMenuHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className={`navbar  ${toggleMenu ? "mobile-menu-on" : ""}`}>
      <div className={`nav-container`}>
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

            <div className="menu-mobile-items">
              <ul className="links">
                {nav.links.map((link: string, index: number) => (
                  <li className="link-item" key={`key-${index}`}>
                    <Link href={"#"}>{link}</Link>
                  </li>
                ))}
              </ul>

              <Link href={"#"} className="special-link">
                {nav.signup}
              </Link>

              <ul className="links-iconic">
                <li className="link-item">
                  <Link href={"#"}>
                    {" "}
                    <FaTwitter />
                  </Link>
                </li>

                <li className="link-item">
                  <Link href={"#"}>
                    {" "}
                    <FaTelegramPlane />
                  </Link>
                </li>

                <li className="link-item">
                  <Link href={"#"}>
                    {" "}
                    <FaDiscord />
                  </Link>
                </li>

                <li className="link-item">
                  <Link href={"#"}>
                    {" "}
                    <PiInstagramLogoFill />
                  </Link>
                </li>

                <li className="link-item">
                  <Link href={"#"}>
                    {" "}
                    <FaYoutube />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
