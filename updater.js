const { autoUpdater } = require("electron-updater")

// const log = require('electron-log');
// log.info('Hello, log');

// log.transports.file.getFile();

// // Configure log debugging
autoUpdater.logger = require("electron-log")
autoUpdater.logger.transports.file.level = "info"
// autoUpdater.transports.file.getFile()

module.exports = () => {

    // Check for updates
    // console.log('Checking for updates');
    autoUpdater.checkForUpdates()

}