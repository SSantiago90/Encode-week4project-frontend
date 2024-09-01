import { useEffect, useState } from "react";

export default function TestNestAPI() {
  const [apiResponse, setApiResponse] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // change endpoint to match your nestJS API deployment URL
  const API_ENDPOINT = "http://localhost:3001/hello";

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        setApiResponse(data.result);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1 className="text-2xl font-semibold opacity-50 pt-3 uppercase text-left">Backend API Connection Status:</h1>
      {isLoading ? <p>Loading . . . </p> : <p>{apiResponse}</p>}
    </>
  );
}
