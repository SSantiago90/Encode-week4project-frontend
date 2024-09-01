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
      <h1 className="text-2xl font-semibold opacity-50 pt-3 uppercase text-center">Test Backend Connection</h1>
      <div className="card w-96 bg-primary text-primary-content mt-4">
        <div className="card-body">
          <h2 className="card-title">Testing NEST Api</h2>
          {isLoading ? <p>Loading . . . </p> : <p>API Response: {apiResponse}</p>}
        </div>
      </div>
    </>
  );
}
