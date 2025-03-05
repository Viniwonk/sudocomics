import { useState, useEffect } from "react";

interface Suggestion {
  ID: string;
  NOME: string;
}

const useFetchSuggestions = (url: string, query: string) => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query) {
        try {
          const response = await fetch(`${url}?nome=${query}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          if (!response.ok) {
            throw new Error("Erro ao buscar sugestões");
          }
          const data: Suggestion[] = await response.json();
          setSuggestions(data);
        } catch (error) {
          console.error("Erro ao buscar sugestões:", error);
          setSuggestions([]);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [url, query]);

  return suggestions;
};

export default useFetchSuggestions;
