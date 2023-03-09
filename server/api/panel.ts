import { renderTrpcPanel } from 'trpc-panel'
import { appRouter } from '../trpc/routers'

export default defineEventHandler(async (event) => {
  if (process.env.NODE_ENV !== 'development') {
    await sendRedirect(event, '/', 403)
  }

  return renderTrpcPanel(appRouter, {
    url: 'http://localhost:3000/api/trpc',
    transformer: 'superjson'
  })
})
