import TokenMinter from "./TokenMinter";
import TokenMinterToAddress from "./TokenMinterToAddress";

export default function MintPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold opacity-50 pt-3 uppercase text-center">Mint Tokens</h1>
      <TokenMinter />
      <TokenMinterToAddress />
    </>
  );
}
