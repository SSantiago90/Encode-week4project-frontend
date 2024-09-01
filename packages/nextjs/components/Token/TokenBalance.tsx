import MyTokenABI from "../../abis/MyToken.json";
import { formatEther } from "viem";
import { useReadContract } from "wagmi";

function TokenBalance({ address }: { address: `0x${string}` }) {
  const {
    data: balance,
    isError,
    isLoading,
    refetch,
  } = useReadContract({
    address: "0x8111D0C4eA700fb39c9cC43Ee03DB7F015DdF829",
    abi: MyTokenABI.abi,
    functionName: "balanceOf",
    args: [address],
  });

  console.log({
    data: balance,
    isError,
    isLoading,
    refetch,
  });

  if (isLoading) return <div>Fetching balance…</div>;
  if (isError) return <div>Error fetching balance</div>;

  const formattedBalance = balance && typeof balance === "bigint" ? formatEther(balance) : "0";

  return (
    <div className="my-5 card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">MyToken Balance</h2>
        Balance: {Number(formattedBalance)}
        <button onClick={() => refetch()} className="btn btn-primary">
          Refresh Balance
        </button>
      </div>
    </div>
  );
}

export default TokenBalance;
