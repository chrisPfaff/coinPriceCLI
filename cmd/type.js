const { green, red } = require("colorette");
const getCurrency = require(".././utils/currencyFetch");
const ora = require("ora");

module.exports = async args => {
  let id;
  switch (args.currency) {
    case "Bitcoin":
      id = 1;
      break;
    case "Litcoin":
      id = 2;
      break;
    case "Bitcoin Cash":
      id = 1831;
      break;
    case "IOTA":
      id = 1720;
      break;
    case "Ripple":
      id = 52;
      break;
    case "Dash":
      id = 131;
      break;
    case "Monero":
      id = 328;
      break;
    case "Cardano":
      id = 2010;
      break;
    case "Stellar":
      id = 512;
      break;
    case "NEO":
      id = 551;
      break;
    case "NEM":
      id = 873;
      break;
    case "Ethereum":
      id = 1027;
      break;
    default:
      id = 1;
      break;
  }

  const loading = ora().start();
  try {
    const currency = await getCurrency(id);

    loading.stop();

    console.log(currency);
  } catch (err) {
    loading.stop();

    console.error(red(err));
  }
};
