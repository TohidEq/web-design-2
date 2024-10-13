import React from "react";
import ImagesInOne from "@/components/subscription/ImagesInOne";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";

type Props = {
  subscription: LangsDict["subscription"];
};

function Subscription({ subscription: sub }: Props) {
  return (
    <div className="subscription">
      <div className="subs-texts">
        <p className="subtitle">{sub.subtitle}</p>
        <h4 className="title">{sub.title}</h4>
        <Link href={"#"} className="sub-btn">
          {sub.subsrcibe} <BsTwitterX className="btn-icon" />
        </Link>
      </div>

      <div className="subs-images">
        <ImagesInOne images={sub.images} />
      </div>
    </div>
  );
}

export default Subscription;
