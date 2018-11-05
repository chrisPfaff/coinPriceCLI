const { green, red, yellow } = require("colorette");
const getCurrency = require(".././utils/currencyFetch");
const ora = require("ora");

module.exports = async args => {
  let id;
  switch (args.currency) {
    case "Bitcoin":
      id = 1;
      break;
    case "Litecoin":
      id = 2;
      break;
    case "BitcoinCash":
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

    let name = currency.name;
    let rank = currency.rank;
    let price = currency.quotes.USD.price;
    let changeSinceYesterday = currency.quotes.USD.percent_change_24h;
    let changeSinceLastWeek = currency.quotes.USD.percent_change_7d;

    console.log("Currency =====> " + green(name));
    console.log("Rank =====> " + green(rank));
    console.log("Current Price In USD =====> " + green(price));
    console.log(
      "Percent Change Since Yesterday =====> " + yellow(changeSinceYesterday)
    );
    console.log(
      "Percent Change Since Last Week =====> " + yellow(changeSinceLastWeek)
    );
  } catch (err) {
    loading.stop();

    console.error(red(err));
  }
};
