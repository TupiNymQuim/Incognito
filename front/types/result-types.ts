export type Thumbnail = {
  original: string;
  src: string;
}

export type WebResult = {
  age: string;
  description: string;
  family_frinedly: boolean;
  language: string;
  thumbnail: Thumbnail;
  title: string;
  url: string;
}

export type ImageResult = {
  properties: {
    placeholder: string;
    url: string;
  };
  thumbnail: Thumbnail;
  title: string;
  url: string;
}

export type VideoResult = {
  age: string;
  description: string;
  thumbnail: Thumbnail;
  title: string;
  url: string;
}

export type NewsResult = {
  age: string;
  description: string;
  thumbnail: Thumbnail;
  title: string;
  url: string;
}
