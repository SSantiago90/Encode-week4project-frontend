import { useState } from "react";
import { useAccount } from "wagmi";

function TokenSelfDelegate() {
  const [isDelegating, setIsDelegating] = useState(false);
  const [mintResult, setMintResult] = useState("");
  const [transactionHash, setTransactionHash] = useState("");
  const { address } = useAccount();

  const handleDelegate = async () => {
    setIsDelegating(true);
    setMintResult("");
    try {
      const response = await fetch("http://localhost:3001/delegate-tokens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: address,
        }),
      });
      const data = await response.json();
      console.log("Delegating result:", data);
      setMintResult(data.message || "Delegating successful!");
      if (data.transactionHash) {
        setTransactionHash(data.transactionHash);
      }
    } catch (error) {
      console.error("Delegating error:", error);
      setMintResult(`Error Delegating tokens: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setIsDelegating(false);
    }
  };

  return (
    <div className="my-4 card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Delegate Tokens for Voting Power</h2>
        <p className="text-sm opacity-85">
          Submit if you want to delegate your MyToken balance and receive it as Voting Power
        </p>
        <div className="card-actions justify-end">
          <button
            className={`btn btn-primary ${isDelegating ? "loading" : ""}`}
            onClick={handleDelegate}
            disabled={isDelegating}
          >
            {isDelegating ? "Delegating..." : "Delegate Tokens"}
          </button>
        </div>

        {mintResult && <div className="mt-4 text-white">{mintResult}</div>}

        {transactionHash && (
          <div className="mt-4 text-white">
            Transaction Hash:{" "}
            <a href={`https://sepolia.etherscan.io/tx/${transactionHash}`} target="_blank" rel="noopener noreferrer">
              {transactionHash}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
export default TokenSelfDelegate;
