import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";

type Props = {
  welcome: LangsDict["welcome"];
};

export default async function Welcome({ welcome }: Props) {
  return (
    <main
      className="welcome"
      style={{ backgroundImage: `url(/images/welcome/welcome-bg.png)` }}
    >
      <div className="welcome-container">
        <div className="welcome-content">
          <h2 className="title">{welcome.title}</h2>
          <span className="sub-title">{welcome["sub-title"]}</span>
          <p className="text">{welcome.text}</p>

          <Link href={"#"} className="btn">
            {welcome.btn}
          </Link>
        </div>
      </div>
      <div className="welcome-slides">slides here</div>
    </main>
  );
}

/**
>>  outline text:
    -webkit-text-stroke: width color;
**/
