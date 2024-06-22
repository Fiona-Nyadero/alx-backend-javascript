const Utils = require('./utils.js');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const all = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${all}`);
}

module.exports = sendPaymentRequestToApi;