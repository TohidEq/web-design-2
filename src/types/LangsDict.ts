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

  heroes: {
    watch_more: string;
    watch_less: string;
    cards: {
      title: string;
      description: string;
      img: string;
    }[];
    more_detailed: string;
    slides: {
      title: string;
      subtitile: string;
      description: string;
      img: string;
      img_bg: string;
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

  subscription: {
    subtitle: string;
    title: string;
    subsrcibe: string;
    images: string[];
  };

  footer: {
    copyright: string;
    links: string[];
  };
};
