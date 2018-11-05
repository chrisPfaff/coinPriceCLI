const { greenBright, yellowBright, bold } = require("colorette");
const menus = {
  main:
    `
    coinPriceCLI [command] <options>

    type ====> show valid currencies to see type <coinPriceCLI help type>

    version ====> show the version of coinPriceCLI

    help ====> show help menu for a command` + "\n",

  type: `
    coinPriceCLI type <options>

    --currency, -c ...... the currency to use
    `
};

module.exports = args => {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0];

  console.log(menus[subCmd] || bold(yellowBright(menus.main)));
};
