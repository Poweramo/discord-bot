module.exports = {
    name: "ping",
    description: "Shows the ping of the bot",
    // devOnly: boolean,
    // testOnly: boolean,
    // options: [Object],
    // deleted: true
    execute: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping}`)
    }
}