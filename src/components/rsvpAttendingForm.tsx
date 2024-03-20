/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Textarea } from "./ui/textarea"

import { api } from '@/utils/api';
import { useToast } from "./ui/use-toast"
import { delay } from "@/lib/utils"
import router from "next/router"

const formSchema = z.object({
    name: z.string().min(2, {
      message: "Nama perlu lebih dari 2 huruf.",
    }),
    phoneNumber: z.string().optional(),
    attendeesCt: z.string(),
    slot: z.string().min(1,{
      message: "Sila pilih slot anda"
    }),
    wishes: z.string().max(240, {
      message: "Had huruf tercapai."
    }).optional()
})

export function RsvpAttendingForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phoneNumber: "",
            attendeesCt: "1",
            slot: "",
            wishes: ""
        },
    })

    const submitResponseApi = api.rsvp.storeResponse.useMutation()
    
    const { toast } = useToast();

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const res = await submitResponseApi.mutateAsync({
          isAttending: true,
          name: values.name,
          phoneNumber: values.phoneNumber,
          attendanceCt: Number(values.attendeesCt),
          timeSlot: values.slot,
          wishes: values.wishes,
        });

        if (res !== undefined) {
          toast({
            title: `Terima kasih atas RSVP anda, ${res.name}!`,
            description: `Kami telah menyimpan ${res.attendanceCt} slot untuk anda bagi sesi ${getSlotDisplayName(res.timeSlot!)}. Kehadiran anda amat kami hargai! ✨`
          })
        } else {
          toast({
            variant: "destructive",
            description: "Maaf, RSVP tidak berjaya. Sila cuba lagi. 🙇"
          })
        }

      await delay(4000);
      await router.replace("/");
    }

    let availableSlots: {
      name: string;
      displayName: string;
      remainingQty: number;
    }[]

    const getSlotsApi = api.rsvp.getAvailableSlots.useQuery()
    
    availableSlots = [
      { name: "firstSlot", displayName: "11.30am - 1.00pm", remainingQty: 350 },
      { name: "secondSlot", displayName: "1.00pm - 2.30pm", remainingQty: 350 },
      { name: "thirdSlot", displayName: "2.30pm - 4.00pm", remainingQty: 350 },
    ]

    if (getSlotsApi.data !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      availableSlots = getSlotsApi.data
    }

    function getSlotDisplayName(name: string): string | undefined {
      const slot = availableSlots.find(slot => slot.name === name);
      return slot ? slot.displayName : undefined;
    }
    

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-4 sm:mx-10 md:mx-48 mb-64">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama*</FormLabel>
                <FormControl>
                  <Input placeholder="Contoh: Ali Abu" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombor telefon</FormLabel>
                <FormControl>
                  <Input placeholder="Contoh: 0123456789" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="attendeesCt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bilangan kehadiran*</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={`${field.value}`}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="1" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                      {Array.from({ length: 10 }, (_, idx) => {
                        const val = `${idx + 1}`
                        return (
                          <SelectItem key={idx} value={val}>{val}</SelectItem>
                        )
                      })}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="slot"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slot waktu*</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {(Object.values(availableSlots)).map((slot, idx) => {
                        return (
                          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                          <SelectItem key={idx} value={slot.name}>{slot.displayName}</SelectItem>
                        )
                    })}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="wishes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ucapan (jika ada)</FormLabel>
                <FormControl>
                  <Textarea placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
}