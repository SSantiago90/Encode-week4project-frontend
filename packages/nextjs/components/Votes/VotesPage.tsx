import TokenSelfDelegate from "./TokenSelfDelegate";
import Vote from "./Vote";

export default function VotesPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold opacity-50 pt-3 uppercase text-center">Votes & Delegation</h1>
      <TokenSelfDelegate />
      <Vote />
      {/* <CastVoteComponent> */}
    </>
  );
}
