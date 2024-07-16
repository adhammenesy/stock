const { ApplicationCommandType } = require('discord.js');
const db = require(`pro.db`)

module.exports = {
	name: 'ping',
	description: "Check bot's ping.",
	type: ApplicationCommandType.ChatInput,
	cooldown: 3000,
	run: async (client, interaction) => {
		interaction.reply({ content: `🏓 Pong! Latency: **${Math.round(client.ws.ping)} ms**` })
	}
};