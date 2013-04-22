var Utils =
{
startBackgroundMode: function()
	{
		Cordova.exec(null, null, "BackgroundMode", "start", new Array());
	},
    
stopBackgroundMode: function()
	{
		Cordova.exec(null, null, "BackgroundMode", "end", new Array());
	}
};

function longRunningTask() {
	Utils.startBackgroundMode();
    
    function test() {
        
        
        // onSuccess Callback
        //   This method accepts a `Position` object, which contains
        //   the current GPS coordinates
        //
        var onSuccess = function(position) {
            console.log('Latitude: '          + position.coords.latitude          + '\n' +
                  'Longitude: '         + position.coords.longitude         + '\n' +
                  'Altitude: '          + position.coords.altitude          + '\n' +
                  'Accuracy: '          + position.coords.accuracy          + '\n' +
                  'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                  'Heading: '           + position.coords.heading           + '\n' +
                  'Speed: '             + position.coords.speed             + '\n' +
                  'Timestamp: '         + position.timestamp                + '\n');
        };
        
        // onError Callback receives a PositionError object
        //
        function onError(error) {
            console.log('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }
        
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        
        setTimeout(test, 5000)
    
    }
    
    test()
    
    
}

