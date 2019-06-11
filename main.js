"use strict";

const electron = require("electron");
const path = require("path");
const url = require("url");

electron.app.on("ready", () => {
	let win = new electron.BrowserWindow({
		webPreferences: {nodeIntegration: true}
	});
	win.loadURL(url.format({
		protocol: "file:",
		pathname: path.join(__dirname, "test.html"),
		slashes: true
	}));
});

electron.app.on("window-all-closed", () => {
	electron.app.quit();
});
