const { green } = require("colorette");

module.exports = args => {
  console.log(args.currency);
  console.log(green("Bitcoin is legit yo"));
};
