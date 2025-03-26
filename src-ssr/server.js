import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import compression from 'compression'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const create = () => {
  const app = express()

  // 压缩
  app.use(compression())

  // 静态文件服务
  app.use(express.static(resolve(__dirname, '../dist/spa')))

  // 处理所有路由
  app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, '../dist/spa/index.html'))
  })

  return app
}

export default create()
