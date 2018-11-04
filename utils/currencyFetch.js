const axios = require("axios");

module.exports = async id => {
  const results = await axios({
    method: "get",
    url: `https://api.coinmarketcap.com/v2/ticker/${id}/?structure=array`,
    params: {
      format: "json"
    }
  });
  return results;
};
