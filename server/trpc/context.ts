import { getServerSession } from '#auth'
import { inferAsyncReturnType } from '@trpc/server'
import type { H3Event } from 'h3'

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(_event: H3Event) {
  const session = await getServerSession(_event)
  /**
   * Add any trpc-request context here. E.g., you could add `prisma` like this (if you've added it via sidebase):
   * ```ts
   * return { prisma: _event.context.prisma }
   * ```
   */
  return { prisma: _event.context.prisma, session }
}

export type Context = inferAsyncReturnType<typeof createContext>
