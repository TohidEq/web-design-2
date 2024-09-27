import React from "react";
import Link from "next/link";

import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";

type Props = {
  footer: LangsDict["footer"];
};
function Footer({ footer }: Props) {
  const iconLinks = [
    <>
      <BsTwitterX />
    </>,
    <>
      <FaTelegramPlane />
    </>,
    <>
      <FaDiscord />
    </>,
    <>
      <PiInstagramLogoFill />
    </>,
    <>
      <FaYoutube />
    </>,
  ];
  return (
    <div className="footer">
      <div className="footer-links">
        <ul className="text-links">
          {footer.links.map((linkText, index) => (
            <li key={index}>
              <Link className="link" href={"#"}>
                {linkText}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="icon-links">
          {iconLinks.map((icon, index) => (
            <li key={index}>
              <Link href={"#"} className="icon-link link">
                {icon} a
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-copyright">
        <p className="copyright">{footer.copyright}</p>
      </div>
    </div>
  );
}

export default Footer;
