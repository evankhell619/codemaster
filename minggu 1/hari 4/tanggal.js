const { log } = require('console')
const {format, addDays, addBusinessDays} = require("date-fns")

const today = new Date ()
const tomorrow = addDays (today,1)
const tomorroww = addBusinessDays (today,-1)

const formattedToday = format(today, 'dd/MM/yyyy')
const formattedTomorrow = format(tomorrow, 'dd/MM/yyyy')
const formattedTomorroww = format(tomorroww, 'dd/MM/yyyy')

console.log(`hari ini ${formattedToday}`);
console.log(`besok ini ${formattedTomorrow}`);
console.log(`kemarin ini ${formattedTomorroww}`);