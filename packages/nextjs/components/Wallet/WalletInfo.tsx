import MintPage from "../Token/MintPage";
import TokenInfo from "../Token/TokenInfo";
import VotesPage from "../Votes/VotesPage";
import WalletAction from "./WalletAction";
import WalletBalance from "./WalletBalance";
import { useAccount } from "wagmi";

function WalletInfo() {
  const { address, isConnecting, isDisconnected, chain } = useAccount();
  if (address)
    return (
      <div className="my-5 ">
        <h1 className="text-2xl font-semibold opacity-50 pt-3 uppercase text-center">Wallet Info</h1>

        <p>Your account address is {address}</p>
        <p>Connected to the network {chain?.name}</p>
        <WalletAction></WalletAction>
        <WalletBalance address={address as `0x${string}`}></WalletBalance>
        <TokenInfo address={address as `0x${string}`}></TokenInfo>
        <br />
        <hr />
        <br />
        <MintPage />
        <br />
        <hr />
        <br />
        <VotesPage />
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
