import express from 'express'
import compression from 'compression'
import {
  defineSsrCreate,
  defineSsrListen,
  defineSsrRenderPreloadTag,
  defineSsrServeStaticContent,
} from '#q-app/wrappers'

// 建立 SSR 應用
export const create = defineSsrCreate(() => {
  const app = express()

  // 移除 Express 預設標頭，提升安全性
  app.disable('x-powered-by')

  if (process.env.PROD) {
    app.use(compression())
  }

  return app
})

// 為開發模式導出 listen，但在 Vercel 部署中不會被用到
export const listen = defineSsrListen(({ app, port }) => {
  return app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
})

// 提供預加載標籤（此處提供簡單實現，根據需要可擴展）
export const renderPreloadTag = defineSsrRenderPreloadTag((file) => {
  // 根據檔案類型返回適當的標籤
  if (file.endsWith('.js')) {
    return `<link rel="modulepreload" href="${file}" crossorigin>`
  }
  if (file.endsWith('.css')) {
    return `<link rel="stylesheet" href="${file}" crossorigin>`
  }
  return ''
})

// 處理靜態內容，這裡簡單使用 Express 的 static 中介軟體
export const serveStaticContent = defineSsrServeStaticContent(({ app, resolve }) => {
  return ({ urlPath = '/', pathToServe = '.' }) => {
    app.use(urlPath, express.static(resolve.public(pathToServe)))
  }
})

// 對於 Vercel 部署，直接導出 create() 作為 handler
export default create()
