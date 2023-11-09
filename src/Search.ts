import { mixFetch, SetupMixFetchOps } from "@nymproject/mix-fetch-full-fat";

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

export async function fetchBraveApi(url: string): Promise<void> {
  try {
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

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data received:", data);
  } catch (error: any) {
    console.error("Error fetching data:", error.message);
  }
}
