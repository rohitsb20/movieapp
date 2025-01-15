import React from "react";
import Card from "./Card";

interface ResultProps {
  results: Array<{
    id: string;
    // Add other properties of result object here
  }>;
}

export default function Result({ results }: ResultProps) {
  return (
    <div
      className="sm:grid sm:grid-cols-2 lg:grid-cols-3
     xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4"
    >
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
