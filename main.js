const { app, BrowserWindow } = require("electron");
const { exec } = require("child_process");

function createWindow() {
  let win = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: { nodeIntegration: false }
  });

  win.loadURL("http://localhost:3000");
}

// RUN BACKEND AUTOMATICALLY
exec("CloudSecurityBackend.exe", (err, stdout) => {
  console.log(stdout);
});

app.whenReady().then(createWindow);
