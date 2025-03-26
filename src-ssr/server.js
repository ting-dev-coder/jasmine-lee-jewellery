import express from 'express'
import compression from 'compression'
import {
  defineSsrCreate,
  defineSsrRenderPreloadTag,
  defineSsrServeStaticContent,
} from '#q-app/wrappers'
//from '@quasar/ssr/wrappers'

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

// 提供預加載標籤
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

// 處理靜態內容
export const serveStaticContent = defineSsrServeStaticContent(({ app, resolve }) => {
  return ({ urlPath = '/', pathToServe = '.' }) => {
    app.use(urlPath, express.static(resolve.public(pathToServe)))
  }
})

export const listen = (app, port) => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
}

// 對於 Vercel 部署，直接導出 create() 作為 handler
export default create()
