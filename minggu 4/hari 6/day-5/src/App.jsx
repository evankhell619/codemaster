import React from "react";
import useSWR from "swr";

const App = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jor-test-api.vercel.app/api/get-temperature",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <div>Current temperature {data.temperature}</div>;
};

export default App;
