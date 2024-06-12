const { ApplicationCommandOptionType, PermissionsBitField } = require("discord.js");

module.exports = {
    name: "ban",
    description: "Bans a member",
    // devOnly : boolean,
    // testOnly: boolean,
    options: [
        {
            name: "user-target",
            description: "The user to ban",
            type: ApplicationCommandOptionType.Mentionable,
            required: true
        },
        {
            name: "reason",
            description: "Why do you want to ban this user?",
            type: ApplicationCommandOptionType.String
        }
    ],
    permissionsRequired: [PermissionsBitField.Flags.BanMembers],
    execute: (client, interaction) => {
        interaction.reply("The ban feature isn't working yet!")
    }
}