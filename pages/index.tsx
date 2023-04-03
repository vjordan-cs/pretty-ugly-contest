import Head from "next/head";
import Image from "next/image";
import { ChevronDoubleDownIcon } from "@heroicons/react/solid";
import PopMenu from "../components/PopMenu.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind Animation Exploration</title>
        <meta
          name="description"
          content="A project exploring animation and blend modes using TailwindCSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-white">
          <div className="fixed  top-0 min-h-screen w-full backdrop-blur-3xl mix-blend-normal text-9xl flex items-center justify-center">
            <h1 className="tracking-wide animate-breathe xl:text-[700px] md:text-[500px] text-[200px] blur-xs opacity-5">
              breathe
            </h1>
          </div>
          {/* initial test */}
          {/* <div className="bg-gradient-to-b from-amber-50 to-red-400 h-1/2 flex items-center justify-center mix-blend-difference"></div> */}
          <div className="relative w-full min-w-screen">
            <div className="fixed top-20 -left-4 w-96 h-96 bg-[#ff9dc5] rounded-full mix-blend-difference filter blur-xl opacity-60 animate-blob"></div>
            <div className="fixed top-20 -right-4 w-96 h-96 bg-[#e099ff] rounded-full mix-blend-difference filter blur-xl opacity-60 animate-glob"></div>
            <div className="fixed top-40 left-40 w-40 h-40 bg-[#ffa299] rounded-full mix-blend-difference filter blur-xl opacity-60 animate-fall"></div>
            <div className="fixed -top-80 -left-4 w-96 h-96 bg-[#0f692d] rounded-full mix-blend-difference filter blur-xl opacity-60 animate-blob "></div>
            <div className="fixed -top-96 -right-4 w-96 h-96 bg-[#eeff99] rounded-full mix-blend-difference filter blur-xl opacity-60 animate-glob animation-delay-4000"></div>
            <div className="fixed -top-96 left-40 w-20 h-20 bg-[#99ffe9] rounded-full mix-blend-difference filter blur-xl opacity-60 animate-plob"></div>
            <div className="fixed -top-96 -right-30 w-96 h-96 bg-[#ffffff] rounded-full mix-blend-difference filter blur-xl opacity-60 animate-fall animation-delay-4000"></div>
            <div className="fixed -top-96 right-40 w-96 h-96 bg-[#ffffff] rounded-full mix-blend-difference filter blur-xl opacity-60 animate-ball"></div>
            <div className="fixed -top-80 right-0 w-96 h-96 bg-[#0f692d] rounded-full mix-blend-difference filter blur-xl opacity-100 animate-fall"></div>
          </div>
          {/* stripes */}
          {/* <div className="">
            <div className="bg-red-300 h-10 mix-blend-difference"></div>
            <div className="bg-white h-2 mix-blend-difference"></div>
            <div className="bg-red-400 h-10 mix-blend-difference"></div>
            <div className="bg-white h-2 mix-blend-difference"></div>
            <div className="bg-red-500 h-10 mix-blend-difference"></div>
            <div className="bg-white h-2 mix-blend-difference"></div>
            <div className="bg-red-600 h-10 mix-blend-difference"></div>
            <div className="bg-white h-2 mix-blend-difference"></div>
            <div className="bg-red-700 h-10 mix-blend-difference"></div>
            <div className="bg-white h-2 mix-blend-difference"></div>
            <div className="bg-red-800 h-10 mix-blend-difference"></div>
            <div className="bg-white h-2 mix-blend-difference"></div>
            <div className="bg-red-900 h-10 mix-blend-difference"></div>
            <div className="bg-white h-2 mix-blend-difference"></div>
            <div className="bg-lime-900 h-10 mix-blend-difference"></div>
            <div className="bg-white h-2 mix-blend-difference"></div>
            <div className="bg-lime-800 h-10 mix-blend-difference"></div>
            <div className="bg-white h-2 mix-blend-difference"></div>
            <div className="bg-lime-700 h-10 mix-blend-difference"></div>
            <div className="bg-white h-2 mix-blend-difference"></div>
            <div className="bg-lime-600 h-10 mix-blend-difference"></div>
            <div className="bg-white h-2 mix-blend-difference"></div>
            <div className="bg-lime-500 h-10 mix-blend-difference"></div>
            <div className="bg-white h-2 mix-blend-difference"></div>
            <div className="bg-lime-400 h-10 mix-blend-difference"></div>
            <div className="bg-white h-2 mix-blend-difference"></div>
            <div className="bg-lime-300 h-10 mix-blend-difference"></div>
          </div> */}
          {/* stripe to gradient */}
          <div className="h-80 bg-gradient-to-b from-lime-300 to-[#FBF8CC] mix-blend-difference"></div>

          {/* gradient block */}
          <div className="">
            <div className="min-h-screen bg-gradient-to-b from-[#FBF8CC] via-[#FDE4CF] to-[#FFCFD2] mix-blend-difference"></div>
            <div className="min-h-screen bg-gradient-to-b from-[#FFCFD2] via-[#F1C0E8] to-[#CFBAF0] mix-blend-difference"></div>
            <div className="min-h-screen bg-gradient-to-b from-[#CFBAF0] via-[#a74375] to-[#691312] mix-blend-difference"></div>
            <div className="min-h-screen bg-gradient-to-b from-[#691312] via-[#5D0933] to-[#291938] mix-blend-difference"></div>
            <div className="min-h-screen bg-gradient-to-b from-[#291938] via-[#042D3A] to-[#12403C] mix-blend-difference"></div>
            <div className="min-h-screen bg-gradient-to-b from-[#12403C] via-[#475200] to-[#664D00] mix-blend-difference"></div>
          </div>
          {/* Begin action bar */}
          <div className="">
            <div className="absolute left-10 top-10">
              <PopMenu />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
