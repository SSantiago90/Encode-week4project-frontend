import MyTokenABI from "../../abis/MyToken.json";
import { useReadContract } from "wagmi";

function TokenName() {
  const tokenAddress = "0x8111D0C4eA700fb39c9cC43Ee03DB7F015DdF829";
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
      <p>Contract Address: {tokenAddress}</p>
      <p>Contract Token Name: {name}</p>
    </>
  );
}

export default TokenName;
