import React, { useState } from "react";
import useFetchSuggestions from "../../hooks/useFetchSuggestions";
import "../../style/App.css";

interface InputBarProps {
  url: string;
  onSelect: (suggestion: { ID: string; NOME: string }) => void;
  placeholder: string;
  onChange: (value: string) => void; // Nova prop para capturar o valor
}

const InputBar: React.FC<InputBarProps> = ({
  url,
  onSelect,
  placeholder,
  onChange,
}) => {
  const [query, setQuery] = useState("");
  const suggestions = useFetchSuggestions(url, query);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSelectSuggestion = (suggestion: { ID: string; NOME: string }) => {
    setQuery(suggestion.NOME);
    setShowSuggestions(false);
    onSelect(suggestion);
    onChange(suggestion.NOME); // Atualiza o valor no componente pai
  };

  return (
    <div className="input-wrapper" style={{ position: "relative" }}>
      <input
        className="search-bar"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onChange(e.target.value); // Atualiza o valor enquanto digita
        }}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        placeholder={placeholder}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul
          className="suggestions-list"
          style={{ position: "absolute", top: "100%", left: 0, width: "100%" }}
        >
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.ID}
              onClick={() => handleSelectSuggestion(suggestion)}
            >
              {suggestion.NOME}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputBar;
