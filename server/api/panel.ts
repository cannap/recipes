import { renderTrpcPanel } from 'trpc-panel'
import { appRouter } from '../trpc/routers'

export default defineEventHandler(async (_event) => {
  if (process.env.NODE_ENV !== 'development') {
    await sendRedirect(_event, '/', 403)
  }

  return renderTrpcPanel(appRouter, {
    url: 'http://localhost:3000/api/trpc',
    transformer: 'superjson'
  })
})
