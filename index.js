let Discord = require("discord.js");
let client = new Discord.Client();

let config = require("./config.json");

// Convert delay from seconds to milliseconds.
var delay = config.delay*1000;

var count = 0;

client.on("ready", () => {
  console.log('Spamming initiated.');

  function fuck() {
    count++

    client.channels.get(config.id).send(config.message)
    .then(console.log(`\nSending... [` + count + "]"))
    .catch((err) => {
      console.error(err);
      itfuckedup();
    });
    setTimeout(fuck, delay)
  };

  function itfuckedup() {
    console.log("Failed!")
    count--
  };
  
  fuck();
});

client.login(config.token);
