import { app, BrowserWindow } from 'electron'

app.whenReady().then(() => {
  new BrowserWindow().loadFile('./dist/view/index.html')
})
