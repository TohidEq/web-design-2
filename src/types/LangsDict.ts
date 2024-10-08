type LangsDict = {
  nav: {
    links: string[];
    signup: string;
    connect_wallet: string;
  };
  welcome: {
    title: string;
    sub_title: string;
    text: string;
    btn: string;
    slides: {
      title: string;
      img: string;
      url: string;
    }[];
  };

  popular_heroes: {
    title: string;
    text: string;
    watch_all: string;
    types: string[];
    heroes: Hero[];
  };
  footer: {
    copyright: string;
    links: string[];
  };
};
