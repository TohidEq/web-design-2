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

  trailer_video: {
    url: string;
    thumbnail: string;
    title: {
      left: string;
      right: string;
    };
  };
  footer: {
    copyright: string;
    links: string[];
  };
};
