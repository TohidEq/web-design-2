import SlideShowImages from "@/components/SlideShowImages";
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
      <div className="fire-particles">
        <div className="fire-particles-container">
          <div className="left">
            <div
              className="img img-fade-2 mobile-hide"
              style={{
                backgroundImage: `url(/images/welcome/fire-particles-1.png)`,
              }}
            ></div>
            <div
              className="img"
              style={{
                backgroundImage: `url(/images/welcome/fire-particles-1.png)`,
              }}
            ></div>
          </div>
          <div className="right">
            <div
              className="img img-fade-1 img-reversed mobile-hide"
              style={{
                backgroundImage: `url(/images/welcome/fire-particles-1.png)`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="welcome-container">
        <div className="welcome-content">
          <h2 className="title">{welcome.title}</h2>
          <span className="sub-title">{welcome.sub_title}</span>
          <p className="text">{welcome.text}</p>

          <Link href={"#"} className="btn">
            {welcome.btn}
          </Link>
        </div>
      </div>
      <div className="welcome-slides">
        <SlideShowImages items={welcome.slides} dots={false} arrows={true} />
      </div>
    </main>
  );
}

/**
>>  outline text:
    -webkit-text-stroke: width color;
**/
