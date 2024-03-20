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
import { Textarea } from "./ui/textarea"
import { api } from "@/utils/api"
import { useToast } from "./ui/use-toast"
import router from "next/router"
import { delay } from "@/lib/utils"

const formSchema = z.object({
    name: z.string().min(2, {
      message: "Nama perlu lebih dari 2 huruf.",
    }),
    phoneNumber: z.string().optional(),
    wishes: z.string().max(240, {
      message: "Had huruf tercapai."
    }).optional()
})

export function RsvpNotAttendingForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phoneNumber: "",
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
        isAttending: false,
        name: values.name,
        phoneNumber: values.phoneNumber,
        wishes: values.wishes,
      })

      if (res !== undefined) {
        toast({
          title: `Terima kasih atas RSVP anda, ${res.name}!`,
          description: `Walaupun tiada rezeki untuk kita bertemu kali ini, kami berharap agar anda doakan kami. 😊`
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