import { useEffect, useState } from "react";
import { formatEther, parseEther } from "viem";
import { useAccount } from "wagmi";

export default function Vote() {
  const [proposalIndex, setproposalIndex] = useState("");
  const [voteAmount, setvoteAmount] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [votePower, setVotePower] = useState(0);
  const account = useAccount();

  // Event handler for the VOTE button
  function handleCastVotes() {
    /* request body for endpoint: f
    {
      "address": "string",
      "proposalId": 0,
      "amount": "string"
    }
    */
    // set Pending status to true
    setIsPending(true);

    // request body for the NEST api request (address voting, ID of proposal, and amount of votes to cast)
    const requestBody = {
      address: account.address,
      proposalId: proposalIndex,
      amount: voteAmount,
    };

    console.log("REQUEST JSON BODY", JSON.stringify(requestBody));

    // Sending Request
    fetch("http://localhost:3001/vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      // Once the request is fulfilled, the success State is set to true, and the data is saved on the data State
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setIsSuccess(true);
      })
      // If there is any error, set it on its propper State
      .catch(err => setIsError(err.message))
      // Finally, the pending is changed again to False
      .finally(() => setIsPending(false));
  }

  // Once the component is mounted, we fetch the amount of votes the address has available
  useEffect(() => {
    setIsLoading(false);
    // fetching the Nest API to retrieve voting power for connected account
    const formatAddress = account.address as `0x${string}`;
    fetch(`http://localhost:3001/get-votes?address=${formatAddress}`)
      .then(res => res.json())
      .then(votingPower => {
        const formatedVotes = formatEther(votingPower);
        setVotePower(Number(formatedVotes));
      })
      .catch(err => setIsError(err.message))
      .finally(() => setIsLoading(false));
  }, [account.address]);

  return (
    <div className="my-4 card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Vote for proposal</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="form-control w-full max-w-xs my-4">
              <label className="label">
                <span className="label-text">Proposal Number</span>
              </label>
              <input
                type="text"
                placeholder="0"
                className="input input-bordered w-full max-w-xs"
                value={proposalIndex}
                onChange={e => setproposalIndex(e.target.value)}
              />
            </div>
            <div className="form-control w-full max-w-xs my-4">
              <label className="label">
                <span className="label-text">Amount of votes</span>
                <small>Available vote power: {votePower}</small>
              </label>
              <input
                type="number"
                min={0}
                max={votePower}
                className="input input-bordered w-full max-w-xs"
                value={voteAmount}
                placeholder="1"
                onChange={e => setvoteAmount(e.target.value)}
              />
            </div>
            {isPending ? (
              <p>Transaction pending...</p>
            ) : (
              <button className="btn btn-active btn-neutral" onClick={handleCastVotes}>
                Vote
              </button>
            )}
          </>
        )}
        {isSuccess && <div>Transaction successful!!!</div>}

        {isError && <div>Error voting</div>}
      </div>
    </div>
  );
}
