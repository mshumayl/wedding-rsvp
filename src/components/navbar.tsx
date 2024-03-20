import { MapPin, CalendarDays, Phone } from "lucide-react"
import Image from "next/image";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Link from "next/link";

export function Navbar() {

    return (
        <div className="z-50 flex flex-row fixed bottom-0 w-full bg-stone-50 justify-evenly drop-shadow">
          {/* Maps */}
          <Drawer>
            <DrawerTrigger asChild>
              <div className="flex w-full justify-center hover:cursor-pointer hover:bg-rose-50 border-r">
                <MapPin className="stroke-1 m-2 stroke-rose-600"/>
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="font-allison text-6xl">Peta</DrawerTitle>
                <DrawerDescription className="font-cormorant">Peta ke Dewan Orkid, Wisma PKPS.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                {/* Insert links and infos here */}
                <div className="flex flex-col space-y-2">
                  <div className="text-stone-400 bg-white rounded-lg items-center align-center justify-evenly h-20 py-4 self-center flex flex-row w-full hover:cursor-pointer hover:border hover:border-dashed hover:border-rose-200">
                    <Image src="./vector-elements/Google_Maps_Logo_2020.svg" alt="" width="30" height="30" className=""></Image>
                    <Link href="https://maps.app.goo.gl/4JfuNiJuHL4NZoNE8" className="text-end w-2/3 font-cormorant text-lg tracking-wider font-medium" rel="noopener noreferrer" target="_blank">Google Maps</Link>
                  </div>
                  <div className="text-stone-400 bg-white rounded-lg items-center align-center justify-evenly h-20 py-4 self-center flex flex-row w-full hover:cursor-pointer hover:border hover:border-dashed hover:border-rose-200">
                    <Image src="./vector-elements/Waze-icon-2020.svg" alt="" width="30" height="30" className=""></Image>
                    <Link href="https://ul.waze.com/ul?place=ChIJmw13RIBSzDERVOKxYK6ADcA&ll=3.07307390%2C101.52284000&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" className="text-end w-2/3 font-cormorant text-lg tracking-wider font-medium" rel="noopener noreferrer" target="_blank">Waze</Link>
                  </div>
                </div>
                <DrawerClose>
                {/* Insert close here */}
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          {/* Calendar */}
          <Drawer>
            <DrawerTrigger asChild>
              <div className="flex w-full justify-center hover:cursor-pointer hover:bg-rose-50 border-r">
                <CalendarDays className="stroke-1 m-2 stroke-rose-600"/>
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="font-allison text-6xl">Tarikh</DrawerTitle>
                <DrawerDescription className="font-cormorant">Jadual untuk aplikasi kalendar.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                {/* Insert links and infos here */}
                <div className="flex flex-col space-y-2">
                  <div className="text-stone-400 bg-white rounded-lg items-center align-center justify-evenly h-20 py-4 self-center flex flex-row w-full hover:cursor-pointer hover:border hover:border-dashed hover:border-rose-200">
                    <Image src="./vector-elements/Google_Calendar_icon_2020.svg" alt="" width="30" height="30" className=""></Image>
                    <Link href="https://www.google.com/calendar/render?action=TEMPLATE&text=Shumayl+%26+******+%7C+Majlis+Perkahwinan&details=Walimatul+Urus+Shumayl+%26+******+di+Shah+Alam.&location=https%3A%2F%2Fmaps.app.goo.gl%2F4JfuNiJuHL4NZoNE8&dates=20240303T030000Z%2F20240303T080000Z" className="text-end w-2/3 font-cormorant text-lg tracking-wider font-medium" rel="noopener noreferrer" target="_blank">Google Calendar</Link>
                  </div>
                </div>
                <DrawerClose>
                {/* Insert close here */}
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          {/* Contac */}
          <Drawer>
            <DrawerTrigger asChild>
              <div className="flex w-full justify-center hover:cursor-pointer hover:bg-rose-50">
                <Phone className="stroke-1 m-2 stroke-rose-600"/>            
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="font-allison text-6xl">Hubungi</DrawerTitle>
                <DrawerDescription className="font-cormorant">Sila hubungi kami untuk sebarang pertanyaan.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                {/* Insert links and infos here */}
                <div className="flex flex-col space-y-2">
                  <div className="text-stone-400 bg-white rounded-lg items-center align-center justify-evenly h-20 py-4 self-center flex flex-row w-full hover:cursor-pointer hover:border hover:border-dashed hover:border-rose-200">
                    <Image src="./vector-elements/WhatsApp.svg" alt="" width="30" height="30" className=""></Image>
                    <div className="flex flex-col w-2/3 items-end">
                      <Link href="https://wa.me/" className="text-end font-cormorant text-lg tracking-wider font-medium" rel="noopener noreferrer" target="_blank">****** ******</Link>
                      <div className="font-cormorant-italic text-sm">Adik Pengantin Lelaki</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="text-stone-400 bg-white rounded-lg items-center align-center justify-evenly h-20 py-4 self-center flex flex-row w-full hover:cursor-pointer hover:border hover:border-dashed hover:border-rose-200">
                    <Image src="./vector-elements/WhatsApp.svg" alt="" width="30" height="30" className=""></Image>
                    <div className="flex flex-col w-2/3 items-end">
                      <Link href="https://wa.me/" className="text-end w-2/3 font-cormorant text-lg tracking-wider font-medium" rel="noopener noreferrer" target="_blank">****** ******</Link>
                      <div className="font-cormorant-italic text-sm">Abang Pengantin Lelaki</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="text-stone-400 bg-white rounded-lg items-center align-center justify-evenly h-20 py-4 self-center flex flex-row w-full hover:cursor-pointer hover:border hover:border-dashed hover:border-rose-200">
                    <Image src="./vector-elements/WhatsApp.svg" alt="" width="30" height="30" className=""></Image>
                    <div className="flex flex-col w-2/3 items-end">
                      <Link href="https://wa.me/" className="text-end font-cormorant text-lg tracking-wider font-medium" rel="noopener noreferrer" target="_blank">****** ******</Link>
                      <div className="font-cormorant-italic text-sm">Kakak Pengantin Lelaki</div>
                    </div>
                  </div>
                </div>
                <DrawerClose>
                {/* Insert close here */}
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          

        </div>
    )
}