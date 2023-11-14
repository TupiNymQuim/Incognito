import { mixFetch, SetupMixFetchOps } from "@nymproject/mix-fetch-full-fat";
import {
  ImageResult,
  NewsResult,
  WebResult,
  VideoResult,
} from "../types/result-types";

const extra = {
  hiddenGateways: [
    {
      owner: "n1phyudpgd98can5gqzywpumv7h47lkqfl458c8z",
      host: "gw1.notrustverify.ch",
      explicitIp: "172.105.93.66",
      identityKey: "EBT8jTD8o4tKng2NXrrcrzVhJiBnKpT1bJy5CMeArt2w",
      sphinxKey: "3Q9pBR2RZ2xd6WJJPXPxpQniqvdtpv4fUTSFGL4vhqJJ",
    },
  ],
};

const mixFetchOptions: SetupMixFetchOps = {
  preferredGateway: "EBT8jTD8o4tKng2NXrrcrzVhJiBnKpT1bJy5CMeArt2w",
  preferredNetworkRequester:
    "BNypKaGiGY8GNRN4gpV95GcaVS8n7CrHuoZNgQ2ezqv2.ACpaixzuaSzuMajVQj6aR7cbpbvp676tm21MiLbX1gni@678qVUJ21uwxZBhp3r56z7GRf6gMh3NYDHruTegPtgMf",
  mixFetchOverride: {
    requestTimeoutMs: 60_000,
  },
  forceTls: true,
  extra,
};

async function fetchBraveApi(url: string): Promise<any> {
  let data: object;
  const response = await mixFetch(
    url,
    {
      method: "GET",
      mode: "unsafe-ignore-cors",
      headers: {
        "X-Subscription-Token": "BSAyQkGjx_2bcoVhYIqiAWyX7QTtqa_",
      },
    },
    mixFetchOptions
  );
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  data = await response.json();
  return data;
}

export async function webSearch(
  query: string,
  page: number
): Promise<Array<WebResult>> {
  const url =
    "https://api.search.brave.com/res/v1/web/search?q=" +
    query +
    "&offset=" +
    page +
    "&count=10" + //Changes the number of results in the page
    "&result_filter=web&spellcheck=false&safesearch=off";
  const response = await fetchBraveApi(url);
  const results: Array<WebResult> = response["web"]["results"];
  return results;
}

export async function newsSearch(
  query: string,
  page: number
): Promise<Array<NewsResult>> {
  const url =
    "https://api.search.brave.com/res/v1/news/search?q=" +
    query +
    "&offset=" +
    page +
    "&count=10" + //Changes the number of results in the page
    "&spellcheck=false&safesearch=off";
  const response = await fetchBraveApi(url);
  const results: Array<NewsResult> = response["results"];
  return results;
}

export async function videoSearch(
  query: string,
  page: number
): Promise<Array<VideoResult>> {
  const url =
    "https://api.search.brave.com/res/v1/videos/search?q=" +
    query +
    "&offset=" +
    page +
    "&count=5" + //Changes the number of results in the page
    "&result_filter=videos&spellcheck=false";
  const response = await fetchBraveApi(url);
  const results: Array<WebResult> = response["results"];
  return results;
}

export async function imageSearch(
  query: string,
  page: number
): Promise<Array<ImageResult>> {
  const url =
    "https://api.search.brave.com/res/v1/images/search?q=" +
    query +
    "&offset=" +
    page +
    "&count=5" + //Changes the number of results in the page
    "&spellcheck=false&safesearch=off";
  const response = await fetchBraveApi(url);
  const results: Array<ImageResult> = response["results"];
  console.log("RESULT BRAVE: ", response);
  return results;
}

export async function fetchImage(url: string): Promise<string> {
  const response = await mixFetch(
    url,
    {
      mode: "unsafe-ignore-cors",
    },
    mixFetchOptions
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const blob = await response.blob();
  const dataUrl = await new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.readAsDataURL(blob);
  });
  return dataUrl;
}
