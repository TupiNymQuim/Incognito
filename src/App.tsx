import React from "react";
import { webSearch } from "./Search";
import "./App.css";
import { WebResult } from "./result-types";

export function TestButton() {
  async function get() {
    try {
      const results = await webSearch("nym");
      for (const result of results) {
        console.log(result.title, ": ", result.url);
      }
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  }
  return <button onClick={get}>Search</button>;
}

export default function App() {
  return (
    <div>
      <TestButton />
    </div>
  );
}
