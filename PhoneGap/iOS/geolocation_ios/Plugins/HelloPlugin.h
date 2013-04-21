//
//  HelloPlugin.h
//  geolocation_ios
//
//  Created by James Nocentini on 21/04/2013.
//
//

#import <Cordova/CDV.h>

@interface HelloPlugin : CDVPlugin

- (void) nativeFunction:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

@end
