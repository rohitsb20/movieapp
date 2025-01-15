import Result from "@/components/Result";

// Type for params
interface SearchPageProps {
  params: {
    searchTerm: string;
  };
}

export default async function SearchPage({ params }: SearchPageProps) {
  const searchTerm = params.searchTerm;

  // Fetch data from API
const res = await fetch(
  `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
);

  const data = await res.json();
  const results = data.results;
  console.log(results);
  

  return (
    <div>
      {/* Check if there are no results */}
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {/* Render results if they exist */}
      {results && results.length > 0 && <Result results={results} />}
    </div>
  );
}
