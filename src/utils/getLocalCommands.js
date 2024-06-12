const path = require("path")
const getAllFiles = require("./getAllFiles")

module.exports = (exceptions = []) => {
    let localCommandsName = []
    let commandCategories = getAllFiles(path.join(__dirname, "..", "commands"), true)
    commandCategories.forEach(commandCategory => {
        const commandFiles = getAllFiles(commandCategory)

        for (const commandFile of commandFiles) {

            const commandObject = require(commandFile)

            if (exceptions.includes(commandObject.name)) {
                continue;
            }

            localCommandsName.push(commandObject)
        }




    });
    return localCommandsName
}