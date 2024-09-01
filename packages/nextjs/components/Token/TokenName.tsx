import MyTokenABI from "../../abis/MyToken.json";
import { useReadContract } from "wagmi";

function TokenName() {
  const tokenAddress = "0x672098733426BA420EB39B0290e2B2555bb59403";
  const { data, isError, isLoading } = useReadContract({
    address: tokenAddress,
    abi: MyTokenABI.abi,
    functionName: "name",
  });

  const name = typeof data === "string" ? data : 0;

  if (isLoading) return <div>Fetching name…</div>;
  if (isError) return <div>Error fetching name</div>;
  return (
    <>
      <div>Token Address: {tokenAddress}</div>
      <div>Token name: {name}</div>
    </>
  );
}

export default TokenName;
