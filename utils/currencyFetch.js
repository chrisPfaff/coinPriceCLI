const axios = require("axios");

module.exports = async id => {
  const results = await axios
    .get(`https://api.coinmarketcap.com/v2/ticker/${id}/?structure=array`)
    .then(value => {
      //wonkey api need to refactor
      return value.data.data[0];
    })
    .catch(err => {
      return err;
    });
  return results;
};
