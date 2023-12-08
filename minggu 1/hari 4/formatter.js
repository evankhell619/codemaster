module.exports = {
  moneyFormat: function(amount) {
    return `Rp ${amount.toFixed(2)}`
  },
  dateFormat: function(date) {
    return date.toDateString()
  },
}


