document.addEventListener('deviceready', onDeviceReady, false)

function onDeviceReady() {
    
    
    setTimeout(function(){longRunningTask()}, 5000);
    
    
    
}


function callNativePlugin( returnSuccess ) {
    HelloPlugin.callNativeFunction( nativePluginResultHandler, nativePluginErrorHandler, returnSuccess );
}

function nativePluginResultHandler (result) {
    alert("SUCCESS: \r\n"+result );
}

function nativePluginErrorHandler (error) {
    alert("ERROR: \r\n"+error );
}