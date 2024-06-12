const { testServerId } = require("../../../config.json");
const areCommandsDifferent = require("../../utils/areCommandsDifferent");
const getApplicationCommands = require("../../utils/getApplicationCommands");
const getLocalCommands = require("../../utils/getLocalCommands")

module.exports = async (client) => {
    try {
        const localCommands = getLocalCommands()
        const applicationCommands = await getApplicationCommands(client, testServerId)

        for (const localCommand of localCommands) {
            const { name, description, options } = localCommand
            const existingCommand = await applicationCommands.cache.find((cmd) => {
                cmd.name === name
            })
            if (existingCommand) {
                if (localCommand.deleted) {
                    await applicationCommands.delete(existingCommand.id)
                    console.log(`The command "${name}" was deleted succesfully!`);
                    continue
                }


                if (areCommandsDifferent(existingCommand, localCommand)) {
                    await applicationCommands.edit(existingCommand.id, {
                        description,
                        options
                    })
                    console.log(`The command "${name}" was edited succesfully!`);
                }
            } else {
                if (localCommand.deleted) {
                    console.log(`Skipping registering the command ${name} since it's deleted`);
                    continue
                }
                await applicationCommands.create({
                    name,
                    description,
                    options
                })
                console.log(`The command ${name} was created succesfully!`);

            }

        }

    } catch (error) {
        console.log(error);
    }
}