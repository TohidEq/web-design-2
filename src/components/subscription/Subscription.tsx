import React from "react";
import ImagesInOne from "@/components/subscription/ImagesInOne";

type Props = {
  subscription: LangsDict["subscription"];
};

function Subscription({ subscription: sub }: Props) {
  return (
    <div>
      {sub.title}

      <div className="bg-gray-900/50">
        <ImagesInOne images={sub.images} />
      </div>
    </div>
  );
}

export default Subscription;
