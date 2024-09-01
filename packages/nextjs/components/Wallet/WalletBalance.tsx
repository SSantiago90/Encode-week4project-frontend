import { useBalance } from "wagmi";

function WalletBalance(params: { address: `0x${string}` }) {
  const { data, isError, isLoading } = useBalance({
    address: params.address,
  });

  if (isLoading) return <div>Fetching balance…</div>;
  if (isError) return <div>Error fetching balance</div>;
  return (
    <p>
      Your wallet balance is: {data?.formatted} {data?.symbol}
    </p>
  );
}

export default WalletBalance;
