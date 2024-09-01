import MintPage from "../Token/MintPage";
import VotesPage from "../Votes/VotesPage";
import TokenBalance from "./TokenBalance";
import TokenName from "./TokenName";
import { useAccount } from "wagmi";

function TokenInfo() {
  const { address, isConnecting, isDisconnected } = useAccount();
  if (address)
    return (
      <div className="my-5 ">
        <h1 className="text-2xl font-semibold opacity-50 pt-3 uppercase text-left">Contract Info</h1>
        <TokenName></TokenName>
        <TokenBalance address={address as `0x${string}`}></TokenBalance>
        <MintPage></MintPage>
        <VotesPage></VotesPage>
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

// function TokenInfo(params: { address: `0x${string}` }) {
//   return (
//     <div className="card w-96 bg-primary text-primary-content mt-4">
//       <div className="card-body">
//         <h2 className="card-title">Testing useReadContract wagmi hook</h2>
//         <TokenName></TokenName>
//         <TokenBalance address={params.address}></TokenBalance>
//       </div>
//     </div>
//   );
// }

export default TokenInfo;
