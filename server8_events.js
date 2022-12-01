var events = require('events');
var tempAlarm = new events.EventEmitter();

//Create an event handler:
var highTemp = function () {
  console.log('High Temp Alarm');
}
var lowTemp = function () {
  console.log('Low Temp Alarm');
}
//Assign the event handler to an event:
tempAlarm.on('highTemp', highTemp);
tempAlarm.on('lowTemp', lowTemp);

//Fire the 'scream' event:
tempAlarm.emit('lowTemp');

