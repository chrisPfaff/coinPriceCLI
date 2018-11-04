const { green, red } = require("colorette");
const getCurrency = require(".././utils/currencyFetch");
const ora = require("ora");

module.exports = async args => {
  const loading = ora().start();
  try {
    const id = args.currency;
    const currency = await getCurrency(id);

    loading.stop();

    console.log(currency);
  } catch (err) {
    loading.stop();

    console.error(red(err));
  }
};
