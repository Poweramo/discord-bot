const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder().setName("user").setDescription("Provides information about the user"),
    async execute(interaction) {
        interaction.reply(interaction.user.username)
    }
}