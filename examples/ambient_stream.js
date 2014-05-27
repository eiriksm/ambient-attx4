// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This example demonstrates the two methods for
getting the ambient module's ambient data. 
*********************************************/

var tessel = require('tessel');
var ambient = require('../').use(tessel.port('A')); // Replace '../' with 'ambient-attx4' in your own code

ambient.on('ready', function () {
 // Two ways to get the stream of data coming in. . .

 	setInterval(function () {
	 	ambient.getLightBuffer(function(err, data) {
	 		console.log('Light data, buffer method: ' + data);
	 	});
 	}, 2000); //Set interval to whatever you want to get the 10 most recent readings.


	ambient.on('light', function (lightData) {
		console.log('Light data, stream method: ' + lightData);
	});
  
});

ambient.on('error', function (err) {
  console.log(err)
});
