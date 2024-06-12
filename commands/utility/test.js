const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder().setName("test").setDescription("Used for testing"),
    async execute(interaction) {
        await interaction.reply("The test is working very well!")
    }
}


