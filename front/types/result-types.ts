export type Thumbnail = {
  original: string;
  src: string;
};

export type WebResult = {
  age: string;
  description: string;
  meta_url: {
    favicon: string;
  };
  family_friendly: boolean;
  language: string;
  thumbnail: Thumbnail;
  title: string;
  url: string;
};

export type ImageResult = {
  properties: {
    placeholder: string;
    url: string;
  };
  thumbnail: Thumbnail;
  title: string;
  url: string;
};

export type VideoResult = {
  age: string;
  description: string;
  thumbnail: Thumbnail;
  title: string;
  url: string;
};

export type NewsResult = {
  age: string;
  description: string;
  meta_url: {
    favicon: string;
  };
  thumbnail: Thumbnail;
  title: string;
  url: string;
};
