"use client";

import type { NextPage } from "next";
import PageBody from "~~/components/PageBody";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Team 1 HW4 Voting Dapp</span>
          </h1>
          <PageBody></PageBody>
        </div>
      </div>
    </>
  );
};

export default Home;
