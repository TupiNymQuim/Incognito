interface Thumbnail {
  original: string;
  src: string;
}

export interface WebResult {
  age: string;
  description: string;
  family_frinedly: boolean;
  language: string;
  thumbnail: Thumbnail;
  title: string;
  url: string;
}

export interface ImageResult {
  properties: {
    placeholder: string;
    url: string;
  };
  thumbnail: Thumbnail;
  title: string;
  url: string;
}
