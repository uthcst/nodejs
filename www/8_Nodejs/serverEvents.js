const events = require('events');
const tempAlarm = new events.EventEmitter();

//Create an event handler:
const highTemp = function () {
  console.log('High Temp Alarm');
}
const lowTemp = function () {
  console.log('Low Temp Alarm');
}
//Assign the event handler to an event:
tempAlarm.on('highTemp', highTemp);
tempAlarm.on('lowTemp', lowTemp);

//Fire the 'scream' event:
tempAlarm.emit('lowTemp');

