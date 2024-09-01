import TestNestAPI from "./TestNestAPI";
import WalletInfo from "./Wallet/WalletInfo";

function PageBody() {
  return (
    <>
      <p className="text-center text-lg">Here we are!</p>
      <TestNestAPI />
      <br />
      <hr />
      <br />
      <WalletInfo />
      {/* <RandomWord></RandomWord> */}
    </>
  );
}

export default PageBody;
