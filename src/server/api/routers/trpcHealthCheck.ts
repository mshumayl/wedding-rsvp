import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const trpcHealthCheckRouter = createTRPCRouter({
  check: publicProcedure
    .query(() => {
      return {
        greeting: `tRPC is healthy.`,
      };
    }),
});
