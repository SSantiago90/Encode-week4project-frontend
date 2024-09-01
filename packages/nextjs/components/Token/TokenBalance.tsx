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
    address: "0x672098733426BA420EB39B0290e2B2555bb59403",
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

  const formattedBalance = balance ? formatEther(BigInt(balance)) : "0";

  return (
    <div className="card w-96 bg-primary text-primary-content mt-4">
      <div className="card-body">
        <h2 className="card-title">MyToken Balance</h2>
        Balance: {Number(formattedBalance)}
        <button onClick={() => refetch()} className="btn btn-secondary mt-2">
          Refresh Balance
        </button>
      </div>
    </div>
  );
}

export default TokenBalance;
