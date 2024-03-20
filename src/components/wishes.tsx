/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { calculateRelativeTime, toSentenceCase, toTitleCase } from "@/lib/utils";
import { api } from "@/utils/api"

export function Wishes() {

  const queryWishes = api.rsvp.getAllWishes.useQuery();

  let wishes = queryWishes.data;

  if (!wishes) {
    wishes = [
      { 
        name: "",
        wishes: "",
        createdAt: new Date(),
      }
    ]
  }

  console.log(wishes);

  return (
    <div className="z-50 flex flex-col w-full pt-4 h-96">
      <ScrollArea className="flex flex-col text-start w-full h-full rounded-md">
        {wishes.map((w, idx) => (
          <div key={idx} className="">
            <div className="font-bold tracking-tighter">
              {toTitleCase(w.name)}
            </div>
            <div className="font-extralight font-cormorant-italic text-sm">
              {calculateRelativeTime(w.createdAt)}
            </div>
            <div className="font-light tracking-wide leading-tight">
              {toSentenceCase(w.wishes!)}
            </div>
            <div className="my-2">
            <Separator/>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}