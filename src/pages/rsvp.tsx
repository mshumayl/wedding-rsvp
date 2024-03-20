import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { api } from "@/utils/api";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { RsvpAttendingForm } from "@/components/rsvpAttendingForm";
import { RsvpNotAttendingForm } from "@/components/rsvpNotAttendingForm";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/navbar";

export default function Home() {
  
  const [isAttending, setIsAttending] = useState<boolean>(true);


  return (
    <>
      <Head>
        <title>RSVP | Shumayl & ******</title>
        <meta name="description" content="Shumayl & ****** | Jemputan Majlis Perkahwinan" />
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:image" content="/opengraph-image-whatsapp.png" />
        <meta property="og:image:width" content="300"/>
        <meta property="og:image:height" content="300"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col w-full bg-gradient-to-tr from-rose-200 via-rose-100 to-orange-50 pt-36">
        
        {/* Animated blobs */}
        <div className="fixed z-1 top-10 -left-4 w-96 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="fixed z-1 top-60 -right-4 w-96 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="fixed z-1 bottom-40 right-20 w-96 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="fixed z-1 bottom-8 left-20 w-96 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="z-10 -mt-24 mb-10 font-allison text-7xl text-center">RSVP</div>
        <div className="z-10">
            <RadioGroup 
            defaultValue="true" 
            className="space-y-3 mx-4 sm:mx-10 md:mx-48 mb-10"
            onValueChange={() => setIsAttending(prevState => !prevState)}>
              <div>Saya akan...</div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="true" id="attending"/>
                <Label htmlFor="attending">Hadir</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="false" id="notAttending"/>
                <Label htmlFor="notAttending">Tidak hadir</Label>
              </div>
            </RadioGroup>
            {
              (isAttending) ? 
              (<RsvpAttendingForm/>) : 
              (<RsvpNotAttendingForm/>)
            }
        </div>
        <Navbar/>
        <Toaster/>
      </main>
    </>
  );
}
