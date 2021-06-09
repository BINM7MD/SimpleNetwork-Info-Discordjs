const Discord = require("discord.js");
const Client = new Discord.Client();
const superagent = require("superagent");
const request = require('request');
const prefix = "-";
Client.on('ready', ()=>{
    Client.user.setActivity('You :)', { type: 'WATCHING'}).catch(console.error);
})
Client.on('message', message=>{
    if(message.content.startsWith(prefix + "help")) {
        var color = "#130033";       
        let ipEmbed = new Discord.MessageEmbed()
        .setColor(color)
        .setAuthor("Шестигранник - Hex-Rays#1444")
        .setTitle("Help Menu")
        .addField("ip", "• Shows IP Info",  true) 
        .addField("rdns", "• Reverse DNS",  true) 
        .addField("nping", "• Simple Ping",  true) 
        .addField("tcpnmap", "• TCP Nmap Host",  true) 
        .addField("udpnmap", "• UDP Nmap Host",  true) 
        .setFooter(`Author Id: ${message.author.id}`, message.author.displayAvatarURL);
        message.channel.send(ipEmbed)
    }
})
Client.on('message', async message => {
    if(message.content.startsWith(prefix + "ip")) {
      var color = "#130033";
      let messageArray = message.content.split(" ");
      let args = messageArray.slice(1);
      let query = args.join(" ");
      let ip = await superagent
      
      .get(`http://ip-api.com/json/${query}?fields=33292287`);
      let ipEmbed = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor("Шестигранник - Hex-Rays#1444")
      .setTitle("IP Info")
      .addField("query", "•" + ip.body.query, true) 
      .addField("status", "•" + ip.body.status, true)
      .addField("continent", "•" + ip.body.continent, true)
      .addField("continentCode", "•" + ip.body.continentCode, true)
      .addField("country", "•" + ip.body.country, true)
      .addField("countryCode", "•" + ip.body.countryCode, true)
      .addField("region", "•" + ip.body.region, true)
      .addField("regionName", "•" + ip.body.regionName, true)
      .addField("city", "•" + ip.body.city, true)
      .addField("district", "•" + ip.body.district, true)
      .addField("zip", "•" + ip.body.zip, true)
      .addField("lat", "•" + ip.body.lat, true)
      .addField("lon", "•" + ip.body.lon, true)          
      .addField("timezone", "•" + ip.body.timezone, true)     
      .addField("currency", "•" + ip.body.currency, true)     
      .addField("isp", "•" + ip.body.isp, true)          
      .addField("org", "•" + ip.body.org, true)          
      .addField("as", "•" + ip.body.as, true) 
      .addField("asname", "•" + ip.body.asname, true)       
      .addField("reverse", "•" + ip.body.reverse, true)      
      .addField("mobile", "•" + ip.body.proxy, true)        
      .addField("hosting", "•" + ip.body.hosting, true)     
      .setFooter(`Author Id: ${message.author.id}`, message.author.displayAvatarURL);
      message.channel.send(ipEmbed)
    }
    Client.on('message', async message => {
        if(message.content.startsWith(prefix + "rdns")) {
            request(`https://api.hackertarget.com/reversedns/?q=${query}`, function (error, response, body) {
                var color = "#130033";
          let messageArray = message.content.split(" ");
          let args = messageArray.slice(1);
          let query = args.join(" ");
          let ipEmbed = new Discord.MessageEmbed()
          .setColor(color)
          .setAuthor("Шестигранник - Hex-Rays#1444")
          .setTitle("Reverse DNS")
          .addField("> RDNS", " > •" + body, true) 
          .setFooter(`Author Id: ${message.author.id}`, message.author.displayAvatarURL);
          message.channel.send(ipEmbed)
            });
          
        }
    });
    Client.on('message', async message => {
        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1);
        let query = args.join(" ");
        if(message.content.startsWith(prefix + "nping")) {
            request(`https://api.hackertarget.com/nping/?q=${query}`, function (error, response, body) {
                var color = "#130033";
          let messageArray = message.content.split(" ");
          let args = messageArray.slice(1);
          let query = args.join(" ");
          let ipEmbed = new Discord.MessageEmbed()
          .setColor(color)
          .setAuthor("Шестигранник - Hex-Rays#1444")
          .setTitle("NPING")
          .addField("NPING", "•" + body, true) 
          .setFooter(`Author Id: ${message.author.id}`, message.author.displayAvatarURL);
          message.channel.send(ipEmbed)
            });
          
        }
    });
    Client.on('message', async message => {
        
        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1);
        let query = args.join(" ");
        if(message.content.startsWith(prefix + "tcpnmap")) {
            request(`https://api.hackertarget.com/nmap/?q=${query}`, function (error, response, body) {
                var color = "#130033";
          let messageArray = message.content.split(" ");
          let args = messageArray.slice(1);
          let query = args.join(" ");
          let ipEmbed = new Discord.MessageEmbed()
          .setColor(color)
          .setAuthor("Шестигранник - Hex-Rays#1444")
          .setTitle("TCP Ports")
          .addField("> Result", "•" + body, true) 
          .setFooter(`Author Id: ${message.author.id}`, message.author.displayAvatarURL);
          message.channel.send(ipEmbed)
            });
          
        }
    });
    Client.on('message', async message => {
        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1);
        let query = args.join(" ");
        if(message.content.startsWith(prefix + "udpnmap")) {
            request(`https://api.hackertarget.com/nmap/?q=${query}`, function (error, response, body) {
                var color = "#130033";
          let messageArray = message.content.split(" ");
          let args = messageArray.slice(1);
          let query = args.join(" ");
          let ipEmbed = new Discord.MessageEmbed()
          .setColor(color)
          .setAuthor("Шестигранник - Hex-Rays#1444")
          .setTitle("UDP Ports")
          .addField("> Result", "•" + body, true) 
          .setFooter(`Author Id: ${message.author.id}`, message.author.displayAvatarURL);
          message.channel.send(ipEmbed)
            });
          
        }
    });
})
Client.login("")
