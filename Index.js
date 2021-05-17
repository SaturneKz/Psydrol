const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Psydrol Bot Alpha stage v1.1 - Psydrol: Built to Succeed Era. | Online, Undergoing Management. CC License (CC BY-NC-SA 4.0), MIT License. // Last Updated 5.17.2021 at 12:37. | Contact: business.sckyt@gmail.com, Contact me for any ideas or any bugs. - Copyright (c) SaturneKx 2021. All Rights Reserved. ~SaturneKx")
})

app.listen(3000, () => {
  console.log("Project is Ready!")
})

let Discord = require("discord.js")
let client = new Discord.Client()

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "z! | Alpha 1.1 - Psydrol" }, status: "idle" })
})

client.on("message", message => {
if(message.content === "z!status") {
  message.channel.send("Bot is undergoing management. <a:skx_lost:843288650228826142>")  
}
  if(message.content === "z!test text") {
  message.channel.send("Psydrol v1.0: Built to Succeed Era.")  
}
if(message.content === "z!test embed") {
  let embed = new Discord.MessageEmbed()
  .setTitle("Psydrol v1.0 - Alpha")
  .setDescription("Built to Succeed Era.")
  .setColor("Black")
  .setFooter("z!Psydrol")
  .setTimestamp()
  message.channel.send(embed)
}
})

client.login(process.env.token)
