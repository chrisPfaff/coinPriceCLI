const minimist = require("minimist");
const { red, blue, yellow } = require("colorette");
module.exports = () => {
  const args = minimist(process.argv.slice(2));

  let cmd = args._[0] || "help";

  if (args.version || args.v) {
    cmd = "version";
  }

  if (args.help || args.h) {
    cmd = "help";
  }

  console.log(
    yellow("\n" + "💵 💵 💵 Welcome to the coinPriceCLI 💵 💵 💵" + "\n")
  );

  switch (cmd) {
    case "type":
      require("./cmd/type")(args);
      break;

    case "version":
      require("./cmd/version")(args);
      break;

    case "help":
      require("./cmd/help")(args);
      break;

    default:
      console.error(red(`"${cmd}" is not a valid command!`));
      break;
  }
};
