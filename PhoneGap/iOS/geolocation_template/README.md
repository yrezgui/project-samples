This is PhoneGap template to bootstrap your application with geolocation capabilities.

We use the navigator.geolocation.getCurrentPosition in the cordova UIWebView and when the app is in the background, we use a Plugin to invoke a thread in the background natively.

In the config.xml add the reference to the plugin

<code><plugin name="BackgroundMode" value="BackgroundMode" /></code>

Then launch you can invoke it with the Cordova.exec function with the following paramteres : success handler, error handler, identifier, action, array of parameters
