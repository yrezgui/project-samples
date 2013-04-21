var Utils =
{
startBackgroundMode: function()
	{
		Cordova.exec(null, null, "BackgroundMode", "start");
	},
    
stopBackgroundMode: function()
	{
		Cordova.exec(null, null, "BackgroundMode", "end");
	}
};

function longRunningTask()
{
	Utils.startBackgroundMode();
    
    
    
	Utils.stopBackgroundMode();
}

