//faire "npm install discord.js" et "npm i fs" dans le terminal
//crée un nouveau fichier "warns.json" 
 
//Tout d'abord pour allumer le bot 24/24, installez la PM2 avec "npm install pm2 -g" dans le terminal
//pour allumer le bot 24/24 "pm2 start nomdevotrefichier.js"
//pour redémarer le bot "pm2 restart nomdevotrefichier.js"
//pour le stopper "npm stop nomdufichier.js"
 
const Discord = require("discord.js")
const fs = require('fs')
const bot = new Discord.Client()

let prefix = "$"
 
bot.on('ready', function(){
    console.log("je suis prêt!!!")
    setInterval(function() {
 
        let Statuses = [
      
          "🌐 • Bêta V - 1.0.0.3",
          "2 server // 123 menbres",
          "Bot crée par FaFa | $help 🤍",
        ]
      
        let status = Statuses[Math.floor(Math.random() * Statuses.length)];
        bot.user.setActivity( status , { type : "WATCHING"})}, 3000)
    
      return
        });

bot.login(process.env.TOKEN);