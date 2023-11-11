import React from "react";
import { fetchImage, imageSearch, webSearch } from "./Search";
import "./App.css";

export function TestButton() {
  async function getWeb() {
    try {
      const results = await webSearch("nym");
      for (const result of results) {
        console.log(result.title, ": ", result.url);
      }
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  }
  async function getImage() {
    try {
      const results = await imageSearch("nymtech");
      for (const result of results) {
        try {
          const image = await fetchImage(result.thumbnail.src); //This takes a while, we should request the images in parallel when displaying the results
          console.log(result.title, ": ", image);
        } catch (error: any) {
          console.error("Error fetching image on:", result.properties.url);
        }
      }
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  }
  return (
    <div>
      <button onClick={getWeb}>Search Web</button>
      <button onClick={getImage}>Search Image</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <TestButton />
    </div>
  );
}
