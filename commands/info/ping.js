module.exports = {
	name: 'ping',
	description: "Check bot's ping.",
	cooldown: 3000,
	userPerms: [],
	botPerms: [],
	run: async (client, Message, args) => {
		const ar = args.replaceAll(`,`, ` `)
		Message.channel.send(`${ar}`)
		Message.delete()
	}
};