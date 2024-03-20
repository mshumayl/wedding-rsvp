import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { api } from "@/utils/api";
import { Navbar } from "@/components/navbar";
import { Wishes } from "@/components/wishes";
import CountdownTimer from "@/components/countdown";

export default function Home() {

  const salutationsText = "Dengan penuh kesyukuran, kami menjemput Tan Sri\n/\nPuan Sri\n/\nDato' Seri\n/\nDatin Seri\n/\nDatuk\n/\nDatin Paduka\n/\nDato'\n/\nDatin\n/\nTuan\n/\nPuan\n/\nEncik\n/\nCik"
  const invitationText = "untuk hadir menyerikan majlis perkahwinan putera kami"

  const hc = api.trpcHealthCheck.check.useQuery();

  console.log(hc.data?.greeting);

  return (
    <>
      <Head>
        <title>****** & ******</title>
        <meta name="description" content="Shumayl & ****** | Jemputan Majlis Perkahwinan" />
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:image" content="/opengraph-image-whatsapp.png" />
        <meta property="og:image:width" content="300"/>
        <meta property="og:image:height" content="300"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col w-full bg-gradient-to-tr from-rose-300 via-rose-100 to-orange-50 pt-36">

        {/* Animated blobs */}
        <div className="fixed z-1 top-10 -left-4 w-96 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="fixed z-1 top-60 -right-4 w-96 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="fixed z-1 bottom-40 right-20 w-96 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="fixed z-1 bottom-8 left-20 w-96 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

        {/* First section -- Title */}
        <div className="z-50 flex flex-col w-full items-center mb-96 sm:mb-80 text-center justify-center">
            <Image className="m-0 px-10 p-0" src="./vector-elements/hero-border-top.svg" alt="" width="1100" height="1100">
            </Image>
            <div className="font-nastaliq text-xs sm:text-xl mb-6">بسم الله الرحمن الرحيم</div>
            <div className="font-cormorant text-xl sm:text-xl">Walimatul urus</div>
            <div className="font-allison text-5xl sm:text-9xl">******</div>
            <div className="font-allison text-2xl -my-4 sm:-my-8 sm:text-7xl">&</div>
            <div className="font-allison text-5xl sm:text-9xl">******</div>
            <div className="font-cormorant text-xl">3 Mac 2024</div>
            <Image className="m-0 p-0 mt-4 px-10" src="./vector-elements/hero-border-bottom.svg" alt="" width="1100" height="1100">
            </Image>
        </div>
        
        {/* Second section -- Invitation */}
        <div className="flex w-full items-center mt-16 sm:mt-0 mb-96 sm:mb-80 justify-center">
          {/* <Image className="m-0 p-0" src="./vector-elements/frame-1.svg" alt="" width="1000" height="1000">
          </Image> */}
          <div className="font-cormorant absolute items-center text-lg text-center leading-snug border border-spacing-10 border-rose-300 border-dashed bg-rose-50 rounded-lg h-fit w-5/6 py-10 px-8 shadow-2xl">
            <div className="font-nastaliq text-lg mb-12">السلام عليكم ورحمة الله وبركاته</div>
            <div className="font-black">*******<br/>*******</div>
            <div className="">&</div>
            <div className="font-black mb-4">*******<br/>*******</div>
            <div className="font-cormorant-italic mb-2">{salutationsText}</div>
            <div className="font-cormorant-italic mb-6">{invitationText}</div>
            <div className="font-black">SHUMAYL<br/>*******</div>
            <div className="font-cormorant-italic">serta pasangannya</div>
            <div className="font-black">******<br/>*******</div>
          </div>
        </div>

        {/* Third section -- Details */}
        <div className="flex w-full items-center mt-28 sm:mt-10 mb-96 justify-center pt-32">
          <div className="font-cormorant absolute items-center text-center border border-spacing-10 border-rose-300 border-dashed bg-rose-50 rounded-lg h-fit w-5/6 py-10 px-2 sm:px-8 shadow-2xl">
            <div className="font-allison text-5xl mb-2 font-extralight">Tempat</div>
            <div className="font-cormorant-italic text-lg leading-snug">
              <div>*******</div>
              <div>*******</div>
              <div>*******</div>
              <div>*******</div>
            </div>
            <div className="mt-4 font-allison text-5xl mb-2 font-extralight">Tarikh & Masa</div>
            <div className="font-cormorant-italic text-lg">******* 2024, 11am - 4pm</div>
          </div>
        </div>

        {/* RSVP button  */}
        <div className="flex self-center -mt-36 h-12 w-64">
          <Link href="/rsvp" className="z-40 h-full w-full text-center text-2xl hover:cursor-pointer mx-10 bg-rose-700 text-white px-2 py-1 shadow-lg rounded-lg font-cormorant tracking-wide font-bold transition hover:shadow-md hover:translate-x-0.5 hover:translate-y-0.5">
            <span className="align-middle h-full">
              RSVP
            </span>
          </Link>
        </div>

        {/* Fourth section -- Countdown */}
        <div className="flex w-full items-center mt-12 mb-96 justify-center pt-32">
          <div className="font-cormorant absolute items-center text-center border border-spacing-10 border-rose-300 border-dashed bg-rose-50 rounded-lg h-fit w-5/6 py-10 px-2 sm:px-8 shadow-2xl">
            <div className="font-allison text-5xl mb-2 font-extralight">Kira Detik</div>
            <div className="font-cormorant-italic text-lg leading-snug">
              <CountdownTimer targetDate={new Date("2024-03-03T11:00:00")}/>
            </div>
          </div>
        </div>

        {/* Fifth section - Wishes */}
        <div className="flex w-full items-center mt-0 mb-96 justify-center pt-32">
          <div className="font-cormorant absolute items-center text-center border border-spacing-10 border-rose-300 border-dashed bg-rose-50 rounded-lg h-fit w-5/6 py-10 px-2 sm:px-8 shadow-2xl">
            <div className="font-allison text-5xl font-extralight">Ucapan</div>
            <Wishes/>            
          </div>
        </div>
        <Navbar/>
      </main>
    </>
  );
}
