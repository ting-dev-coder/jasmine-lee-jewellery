import express from 'express'
import compression from 'compression'
import {
  defineSsrCreate,
  defineSsrServeStaticContent,
  defineSsrRenderPreloadTag,
} from '#q-app/wrappers'

export const create = defineSsrCreate(() => {
  const app = express()

  // 移除 Express 預設標頭，提升安全性
  app.disable('x-powered-by')

  if (process.env.PROD) {
    app.use(compression())
  }

  return app
})

// 🚀 Vercel 會自動偵測這個 handler，無需 `app.listen()`
export default create()
