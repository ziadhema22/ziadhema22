const express = require("express");
const app = express();




app.listen(() => console.log('Bad Start Go Go'));


app.use('/ping', (req, res) => {
  res.send(new Date());


});

const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, RichEmbed } = require("discord.js");


client.on("ready", () => {


  console.log(` : `);
});
var prefix = "!";/////البريفيكس حقك
var owners = "753321431374495744";//////الايدي حقك




/////Status
client.on("ready", () => {
  console.log(`Logged in as : ${client.user.username}`);
  client.user.setActivity(`b-C Arabian`);
  client.user.setStatus("online");
});

/////Ping

client.on ('message', async (Bad) => {
  if (!Bad.guild || Bad.author.bot) return false;
  if (Bad.content == prefix + 'ping') {
    const msg = await Bad.channel.send ("Ping..");
    msg.delete ();
    Bad.channel.send (`\`\`\`javascript\nDiscord API: ${Math.round (client.ping)} ms\nTime taken: ${msg.createdTimestamp - Bad.createdTimestamp} ms\n\`\`\` `)
  }

})

/////Help
client.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
    let help = new Discord.RichEmbed()
    .setTitle(`Help Menu`)
      .setColor("#1a1818")
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setTimestamp()

       .setDescription(`
      **__Commands__**  
     
      ـــــــــــــــــــــــــ
**Main Cmds**
      ${prefix}sugs
      ${prefix}ping 
      ${prefix}support
      ـــــــــــــــــــــــــ
**BroadCast Cmds**
      ${prefix}bc
      ${prefix}obc
      ${prefix}ebc
      ـــــــــــــــــــــــــ
      By : <@753321431374495744>
[****]() **|** [**Support Server**](https://discord.gg/Ht77f7CPrr) 
      `)
    message.channel.sendEmbed(help);
  }
});


/////Bc
client.on("message", async message => {
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  if (!message.channel.guild) return;
  var args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (command == "bc") {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("**You Sont Have This Permissions : `ADMINISTRATOR`**");
    }
    if (!args) {
      return message.reply("**Write Something To Send**");
    }
    message.channel
      .send(
        `**Are You Sure ? : \`${args}\`**`
      )
      .then(m => {
        m.react("✅").then(() => m.react("❌"));

        let yesFilter = (reaction, user) =>
          reaction.emoji.name == "✅" && user.id == message.author.id;
        let noFiler = (reaction, user) =>
          reaction.emoji.name == "❌" && user.id == message.author.id;


        let yes = m.createReactionCollector(yesFilter);
        let no = m.createReactionCollector(noFiler);

        yes.on("collect", v => {
          m.delete();
          message.channel
            .send(
              `**Dev Channel** <#837685076275757097> 🟢 \`${message.guild.memberCount}\``
            )
            .then(msg => msg.delete(5000000));
            message.guild.members.forEach(m => {
      m.send(`${args}\n ${m}`)
          });
        });

        no.on("collect", v => {
          m.delete();

          message.channel
            .send("**__Broadcast Canceled Dev Channel** <#837685076275757097>__**")
            .then(msg => msg.delete(3000000));
        });
      });
  }
        });

/////EBc

client.on("message", async message => {
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  if (!message.channel.guild) return;
  var args = message.content
    .split(" ")
    .slice(1)
    .join(" ");

  if (command == "ebc") {

    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("**You Sont Have This Permissions : `ADMINISTRATOR`**");
    }
    if (!args) {
      return message.reply("**Write Something To Send**");
    }

    message.channel


      .send(
        `**Are You Sure ? : \`${args}\`**`
      )
      .then(m => {
        m.react("✅").then(() => m.react("❌"));

        let yesFilter = (reaction, user) =>
          reaction.emoji.name == "✅" && user.id == message.author.id;
        let noFiler = (reaction, user) =>

          reaction.emoji.name == "❌" && user.id == message.author.id;


        let yes = m.createReactionCollector(yesFilter);
        let no = m.createReactionCollector(noFiler);


        yes.on("collect", v => {

          m.delete();
          message.channel
            .send(
              `**Dev Channel** <#837685076275757097> 🟢 \`${message.guild.memberCount}\``
            )

            .then(msg => msg.delete(5000000));
          message.guild.members.forEach(member => {

            let bc = new Discord.RichEmbed()
              .setColor("#1a1818")
              .setThumbnail(message.author.avatarURL)
              .setTitle("Dev Channel <#837685076275757097>")
              .addField("__Server__", message.guild.name)
              .addField("__Sender__", 
message.author.username)
              .addField("__Message__", args);

            member.sendEmbed(bc);
          });
        });

        no.on("collect", v => {
          m.delete();
          message.channel
            .send("**__Broadcast Canceled Dev Channel** <#837685076275757097>__**")
            .then(msg => msg.delete(3000000));
        });
      });
  }

/////OBc
  if (command == "obc") {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("**You Sont Have This Permissions : `ADMINISTRATOR`**");
    }
    if (!args) {

      return message.reply("**Write Something To Send**");
    }
    message.channel

      .send(

        `**Are You Sure ? : \`${args}\`**`
      )
      .then(m => {
        m.react("✅").then(() => m.react("❌"));

        let yesFilter = (reaction, user) =>

          reaction.emoji.name == "✅" && user.id == message.author.id;
        let noFiler = (reaction, user) =>
          reaction.emoji.name == "❌" && user.id == message.author.id;

        let yes = m.createReactionCollector(yesFilter);
        let no = m.createReactionCollector(noFiler);

        yes.on("collect", v => {
          m.delete();
          message.channel
            .send(
              `**Done BadBc V3.0 Dev Channel** <#837685076275757097> 🟢 \`${

                message.guild.members.filter(
                  r => r.presence.status !== "offline"
                ).size
              }\``

            )
            .then(msg => msg.delete(5000000));
          message.guild.members
            .filter(r => r.presence.status !== "offline")
            .forEach(member => {
              let bco = new Discord.RichEmbed()
                .setColor("#1a1818")
                .setThumbnail(message.author.avatarURL)
                .setTitle("Dev Channel <#837685076275757097>")
                .addField("__Server__", message.guild.name)
                .addField("__Sender__", message.author.username)
                .addField("__Message__", args);


              member.sendEmbed(bco);
            });
        });

        no.on("collect", v => {
          m.delete();
          message.channel
            .send("**__Broadcast Canceled Dev Channel** <#837685076275757097>__**")
            .then(msg => msg.delete(300000));
        });
      });


  }

});



////Support
client.on("message", msg => {
  if (msg.content === `${prefix}support`) { 


    msg.reply("https://discord.gg/RzywZTyYNj"); 
  }
})

////Sugs
client.on("message", msg => {



  if (msg.content === `${prefix}sugs`) { 
    msg.reply("**Go To My Dev Dm And Say Your Sug. <#837685076275757097>**"); 
  }
})




client.login(process.env.token);