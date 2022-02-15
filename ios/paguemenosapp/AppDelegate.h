#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
#import <UserNotifications/UNUserNotificationCenter.h>
#import <MarketingCloudSDK/MarketingCloudSDK.h>
#import <MarketingCloudSDK/MarketingCloudSDKConfigBuilder.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate, UNUserNotificationCenterDelegate>

@property(nonatomic, strong) UIWindow *window;

@end
