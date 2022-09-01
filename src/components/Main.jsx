import { useState, useEffect } from "react";
import { fetchAllCountries } from "../api";
import FilteredCountries from "./FilteredCountries";

function Main() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const results = await fetchAllCountries();
        if (results && results.length !== 0) {
          setCountries(results);
        } else {
          setCountries([]);
        }
      } catch (error) {
        setError("Failed to fetch countries");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (error)
    return (
      <div data-testid="error" className="my-[100px] text-center">
        {error}
      </div>
    );

  if (isLoading)
    return <div className="my-[100px] text-center">Loading...</div>;

  return (
    <div className="mx-5 pt-[100px]">
      <div className="svg">
        <svg width="100%" height="100vh">
          <text x="20%" y="55%">
            预发布环境
          </text>
        </svg>
      </div>
      <FilteredCountries countries={countries} />
    </div>
  );
}

export default Main;
