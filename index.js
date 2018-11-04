const minimist = require("minimist");
const { red, blue, yellow } = require("colorette");
module.exports = () => {
  const args = minimist(process.argv.slice(2));
  const cmd = args._[0];

  console.log(yellow("Welcome to the coinPriceCLI"));

  switch (cmd) {
    case "Bitcoin":
      require("./cmd/Bitcoin")(args);
      break;
    default:
      console.error(red(`"${cmd}" is not a valid command!`));
      break;
  }
};
