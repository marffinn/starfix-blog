import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { readFileSync } from 'fs'

function adminPanel(): Plugin {
  const adminHtml = () => readFileSync(path.resolve(__dirname, 'public/admin/index.html'))
  return {
    name: 'admin-panel',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0]
        if (url === '/starfix-blog/admin' || url === '/admin') {
          res.statusCode = 302
          res.setHeader('Location', `${url}/`)
          res.end()
          return
        }
        if (url === '/starfix-blog/admin/' || url === '/admin/') {
          res.statusCode = 200
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(adminHtml())
          return
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), adminPanel()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/starfix-blog/',
})