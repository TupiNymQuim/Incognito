import { mixFetch, SetupMixFetchOps } from "@nymproject/mix-fetch-full-fat";
import { NewsResult, WebResult } from "./result-types";

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
        "X-Subscription-Token": process.env.REACT_APP_API_KEY,
      },
    },
    mixFetchOptions,
  );
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  data = await response.json();
  return data;
}

export async function webSearch(query: string): Promise<Array<WebResult>> {
  const url =
    "https://api.search.brave.com/res/v1/web/search?q=" +
    query +
    "&count=5&result_filter=web";
  const response = await fetchBraveApi(url);
  const results: Array<WebResult> = response["web"]["results"];
  return results;
}

export async function newsSearch(query: string): Promise<Array<NewsResult>> {
  const url =
    "https://api.search.brave.com/res/v1/news/search?q=" +
    query +
    "&count=5&spellcheck=false";
  const response = await fetchBraveApi(url);
  const results: Array<NewsResult> = response["results"];
  return results;
}
