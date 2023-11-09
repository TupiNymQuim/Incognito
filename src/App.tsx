import React from "react";
import { fetchBraveApi } from "./Search";
import "./App.css";

export function TestButton() {
  async function get() {
    fetchBraveApi(
      "https://api.search.brave.com/res/v1/web/search?q=nym&count=1&result_filter=web",
    );
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
