import { trpcHealthCheckRouter } from './routers/trpcHealthCheck';
import { rsvpRouter } from "@/server/api/routers/rsvp";
import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  rsvp: rsvpRouter,
  trpcHealthCheck: trpcHealthCheckRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
