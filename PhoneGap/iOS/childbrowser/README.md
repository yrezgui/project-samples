This is a template to have the ChildBrowser in your Cordova application.

It's particularly useful if you want to use third party application to log in your users.

When calling the showWebPage method on window.plugin.childBrowser a new child web page will be spawned within your app (asking for the user credentials of the third party application)

The close() method lets you close the web page once the login is successful.

#Create a new iOS project with PhoneGap

List of useful commands:

Download the PhoneGap repo from http://phonegap.com/download/#

Navigate to phonegap-2.5.0/lib/ios
Execute the create script

$ ./create path structure name
	
structure is something like com.phonegapsamples.childbrowser