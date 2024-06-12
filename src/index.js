require("dotenv").config();
const {
	Client,
	Events,
	GatewayIntentBits,
} = require("discord.js");
const { token } = require("../config.json")
const prefix = ".";
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
	],
});


client.once(Events.ClientReady, (c) => {
	console.log(`${c.user.tag} is ready!`);
})



client.login(token);
