"use client";
import React, { useLayoutEffect, useState } from "react";
import Image from "next/image";

import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineXMark } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

import { findFlagUrlByNationality } from "country-flags-svg";

type Props = {};

function Navbar({}: Props) {
  const [windowSize, setWindowSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const [toggleLang, setToggleLang] = useState(false);
  const toggleLangHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setToggleLang(!toggleLang);
  };

  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMenuHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setToggleMenu(!toggleMenu);
  };

  const flagUrlFrench = findFlagUrlByNationality("French");
  const flagUrlEnglish = findFlagUrlByNationality("American");

  console.log("1111", flagUrlEnglish);

  return (
    <div className="navbar">
      navbar brooo
      <Image src={flagUrlEnglish} width={500} height={500} alt="france" />
    </div>
  );
}

export default Navbar;