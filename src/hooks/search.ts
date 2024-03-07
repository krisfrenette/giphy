import { useState } from "react";
import { fetchImages } from "../service";

export function useSearch() {
  const [query, setQuery] = useState<string>("");

  function onQueryChange(query: string) {
    setQuery(query);
  }

  async function search() {
    // Should be doing validation here
    const data = await fetchImages(query);
    return data;
  }

  return { query, onQueryChange, search };
}
