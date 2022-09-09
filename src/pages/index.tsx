import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const buttonStyle = "bg-purple-500 rounded-lg p-2 text-white"

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Planning Poker</title>
        <meta name="description" content="Planning poker voting application for scoping work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <div className="flex">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Pointing<span className="text-purple-300">Poker</span>
        </h1>
        <Image src="/cards.svg" alt="Poker Cards" width={128} height={128} />
        </div>
        <div className="p-8" />
        <div className="w-3/5">
          <p>Welcome to pointing poker (aka planning poker)! Online, virtual and 
            co-located agile teams use this application during their planning/pointing 
            sessions to effectively communicate points for stories.
          </p>
        </div>
        <section>
        <div className="border rounded-lg bg-white p-4">
          <h3 className="text-purple-300 font-medium text-xl">Pointing Session</h3>
          <div className="flex justify-center items-center space-x-4">
          <button className={buttonStyle}>Create Sesh</button>
          <p>..or..</p>
          <form>
          <input className="border p-1 m-1" placeholder="123abc"></input>
          <button className={buttonStyle}>Join Sesh</button>
          </form>
          </div>

        </div>
        </section>
      </main>
    </>
  );
};

export default Home;
