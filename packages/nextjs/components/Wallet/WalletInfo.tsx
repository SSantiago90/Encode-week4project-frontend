import TokenInfo from "../Token/TokenInfo";
import { useAccount } from "wagmi";

function WalletInfo() {
  const { address, isConnecting, isDisconnected, chain } = useAccount();
  if (address)
    return (
      <div className="my-5">
        <h1 className="text-2xl font-semibold opacity-50 pt-3 uppercase text-left">Wallet Info</h1>
        <p>
          Your wallet address is {address} on the {chain?.name} network
        </p>
        <TokenInfo></TokenInfo>
      </div>
    );
  if (isConnecting)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  if (isDisconnected)
    return (
      <div>
        <p>Wallet disconnected. Connect wallet to continue</p>
      </div>
    );
  return (
    <div>
      <p>Connect wallet to continue</p>
    </div>
  );
}

export default WalletInfo;
