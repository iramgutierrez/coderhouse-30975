const moment = require("moment");

moment.locale("es")

function isALongTime(yourBirthDay, format) {
  return moment(yourBirthDay, format).fromNow();
}

console.log(isALongTime("21/02/2001", "DD/MM/YYYY"));