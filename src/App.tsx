import React from "react";
import { videoSearch, webSearch } from "./Search";
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
  async function getVideo() {
    try {
      const results = await videoSearch("nym");
      for (const result of results) {
        console.log(result.title, ": ", result.url);
      }
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  }
  return (
    <div>
      <button onClick={getWeb}>Search Web</button>
      <button onClick={getVideo}>Search Video</button>
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
