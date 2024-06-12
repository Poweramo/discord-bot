const path = require("path")
const getAllFiles = require("../utils/getAllFiles")

module.exports = (client) => {
    const eventFolders = getAllFiles(path.join(__dirname, "..", "events"), true)
    eventFolders.forEach(eventFolder => {
        const eventFiles = getAllFiles(eventFolder)
        eventFiles.sort((a, b) => a > b)
        const eventName = eventFolder.replace(path.join(__dirname, "..", "events\\"), "")
        client.on(eventName, async (arg) => {
            for (const eventFile of eventFiles) {
                const eventFunction = require(eventFile)
                await eventFunction(client, arg)
            }
        })
    });

}