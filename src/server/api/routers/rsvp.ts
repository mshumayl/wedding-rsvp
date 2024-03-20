/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const rsvpRouter = createTRPCRouter({
  getAllWishes: publicProcedure
    .query(({ ctx }) => {
      return ctx.db.rsvpResponse.findMany({
        where: {
          wishes: {
            not: null
          }
        },
        orderBy: {
          id: "desc"
        },
        select: {
          name: true,
          wishes: true,
          createdAt: true
        }
      })
    }),
  
  getAvailableSlots: publicProcedure
    .query(({ ctx }) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      return ctx.db.slots.findMany({
        where: {
          remainingQty: {
            gt: 0
          }
        },
        orderBy: {
          id: "asc"
        },
        select: {
          name: true,
          displayName: true,
          remainingQty: true
        }
      })
    }),

  storeResponse: publicProcedure
    .input(z.object({
      isAttending: z.boolean(),
      name: z
      .string()
      .min(2, { message: "Error at ORM: Name too short." }),
      phoneNumber: z
      .string()
      .min(10, { message: "Error at ORM: Phone number too short." })
      .max(12, { message: "Error at ORM: Phone number too long." })
      .optional(),
      attendanceCt: z
      .number()
      .optional(),
      timeSlot: z
      .string()
      .optional(),
      wishes: z
      .string()
      .optional()
    }))
    .mutation(async ({ ctx, input }) => {
      // Deduct available slots here - need a slots table

      if (input.attendanceCt && input.timeSlot) {
        // 1. Check remaining slots
        const slots = await ctx.db.slots.findFirst({
          where: {
            name: input.timeSlot
          },
          select: {
            id: true,
            remainingQty: true
          }
        })

        // 2. If enough slots, deduct with attendanceCt. If not enough slots, return error.
        // if (!slots || slots.remainingQty < input.attendanceCt) {
        //   throw new Error("Insufficient slots");
        // }

        const newRemainingQty = slots!.remainingQty - input.attendanceCt;

        await ctx.db.slots.update({
          where: {
            id: slots!.id
          },
          data: {
            remainingQty: newRemainingQty
          }
        })
      }

      let wishes = null;

      if (input.wishes) {
        wishes = input.wishes
      }
      
      //Make db call here
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      return ctx.db.rsvpResponse.create({
        data: {
          isAttending: input.isAttending,
          name: input.name,
          phoneNumber: input.phoneNumber,
          attendanceCt: input.attendanceCt,
          timeSlot: input.timeSlot,
          wishes: wishes,
        }
      })

    }),

});
