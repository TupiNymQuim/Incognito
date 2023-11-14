interface Thumbnail {
  original: string;
  src: string;
}

export interface WebResult {
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

export interface VideoResult {
  age: string;
  description: string;
  thumbnail: Thumbnail;
  title: string;
  url: string;
}

export interface NewsResult {
  age: string;
  description: string;
  meta_url: {
    favicon: string;
  };
  thumbnail: Thumbnail;
  title: string;
  url: string;
}
