type LangsDict = {
  nav: {
    links: string[];
    signup: string;
    connect_wallet: string;
  };
  welcome: {
    title: string;
    "sub-title": string;
    text: string;
    btn: string;
    slides: {
      title: string;
      img: string;
      url: string;
    }[];
  };
  footer: {
    copyright: string;
    links: string[];
  };
};
