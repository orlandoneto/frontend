#import "AppDelegate.h"

#if RCT_DEV
#import <React/RCTDevLoadingView.h>
#endif

#import <GoogleMaps/GoogleMaps.h>
#import <RNGoogleSignin/RNGoogleSignin.h>
#import <Firebase.h>
#import <UserNotifications/UserNotifications.h>
#import <RNCPushNotificationIOS.h>

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

#ifdef FB_SONARKIT_ENABLED
#import <FlipperKit/FlipperClient.h>
#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>
#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>
#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>
#import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>
#import <FlipperKitReactPlugin/FlipperKitReactPlugin.h>

#import <MarketingCloudSDK/MarketingCloudSDK.h>
#import <MarketingCloudSDK/MarketingCloudSDKConfigBuilder.h>

static void InitializeFlipper(UIApplication *application) {
  FlipperClient *client = [FlipperClient sharedClient];
  SKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];
  [client addPlugin:[[FlipperKitLayoutPlugin alloc] initWithRootNode:application withDescriptorMapper:layoutDescriptorMapper]];
  [client addPlugin:[[FKUserDefaultsPlugin alloc] initWithSuiteName:nil]];
  [client addPlugin:[FlipperKitReactPlugin new]];
  [client addPlugin:[[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];
  [client start];
}
#endif

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  if ([FIRApp defaultApp] == nil) {
    [FIRApp configure];
  }


#ifdef FB_SONARKIT_ENABLED
  InitializeFlipper(application);
#endif



  MarketingCloudSDKConfigBuilder *mcsdkBuilder = [MarketingCloudSDKConfigBuilder new];
  [mcsdkBuilder sfmc_setApplicationId:@"123117c2-de75-46c2-8ac7-fae8e2ab22b1"];
  [mcsdkBuilder sfmc_setAccessToken:@"802kX2SdZ3d1112gieF5wXPS"];
  [mcsdkBuilder sfmc_setAnalyticsEnabled:@(YES)];
  [mcsdkBuilder sfmc_setMarketingCloudServerUrl:@"https://mc5dpvdc4-brvv2-tc7t2z1g-758.device.marketingcloudapis.com/"];

  NSError *error = nil;
  BOOL success =
  [[MarketingCloudSDK sharedInstance] sfmc_configureWithDictionary:[mcsdkBuilder sfmc_build]
                                                             error:&error];

  if (success == YES) {
    dispatch_async(dispatch_get_main_queue(), ^{
      if (@available(iOS 10, *)) {
        // set the UNUserNotificationCenter delegate - the delegate must be set here in
        // didFinishLaunchingWithOptions
        [UNUserNotificationCenter currentNotificationCenter].delegate = self;
        [[UIApplication sharedApplication] registerForRemoteNotifications];

        [[UNUserNotificationCenter currentNotificationCenter]
         requestAuthorizationWithOptions:UNAuthorizationOptionAlert |
         UNAuthorizationOptionSound |
         UNAuthorizationOptionBadge
         completionHandler:^(BOOL granted, NSError *_Nullable error) {
          if (error == nil) {
            if (granted == YES) {
              dispatch_async(dispatch_get_main_queue(), ^{
              });
            }
          }
        }];
      } else {
#if __IPHONE_OS_VERSION_MIN_REQUIRED < 100000
        UIUserNotificationSettings *settings = [UIUserNotificationSettings
                                                settingsForTypes:UIUserNotificationTypeBadge | UIUserNotificationTypeSound |
                                                UIUserNotificationTypeAlert
                                                categories:nil];
        [[UIApplication sharedApplication] registerUserNotificationSettings:settings];
#endif
        [[UIApplication sharedApplication] registerForRemoteNotifications];
      }
    });
  } else {
    //  MarketingCloudSDK sfmc_configure failed
    os_log_debug(OS_LOG_DEFAULT, "MarketingCloudSDK sfmc_configure failed with error = %@",
                 error);
  }

  // Define UNUserNotificationCenter
  UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
  center.delegate = self;

  [GMSServices provideAPIKey:@"AIzaSyDz60olNyD9QhBDDCtAYVi1EdqYHN2ZM4Y"];

  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
#if RCT_DEV
  [bridge moduleForClass:[RCTDevLoadingView class]];
#endif
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"paguemenosapp"
                                            initialProperties:nil];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];

  return YES;
}

- (void)application:(UIApplication *)application
didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
  [[MarketingCloudSDK sharedInstance] sfmc_setDeviceToken:deviceToken];
  [RNCPushNotificationIOS didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}

- (void)application:(UIApplication *)application
didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
  [RNCPushNotificationIOS didFailToRegisterForRemoteNotificationsWithError:error];
  os_log_debug(OS_LOG_DEFAULT, "didFailToRegisterForRemoteNotificationsWithError = %@", error);
}

// The method will be called on the delegate when the user responded to the notification by opening
// the application, dismissing the notification or choosing a UNNotificationAction. The delegate
// must be set before the application returns from applicationDidFinishLaunching:.

// Obrigatório para evento localNotification
- (void)userNotificationCenter:(UNUserNotificationCenter *)center
didReceiveNotificationResponse:(UNNotificationResponse *)response
         withCompletionHandler:(void (^)(void))completionHandler {
  // tell the MarketingCloudSDK about the notification
  [[MarketingCloudSDK sharedInstance] sfmc_setNotificationRequest:response.notification.request];

  [RNCPushNotificationIOS didReceiveNotificationResponse:response];

  if (completionHandler != nil) {
    completionHandler();
  }
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center
       willPresentNotification:(UNNotification *)notification
         withCompletionHandler:
(void (^)(UNNotificationPresentationOptions options))completionHandler {
  NSLog(@"User Info : %@", notification.request.content.userInfo);
  completionHandler(UNAuthorizationOptionSound | UNAuthorizationOptionAlert |
                    UNAuthorizationOptionBadge);
}

// This method is REQUIRED for correct functionality of the SDK.
// This method will be called on the delegate when the application receives a silent push

- (void)application:(UIApplication *)application
didReceiveRemoteNotification:(NSDictionary *)userInfo
fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler {
  [[MarketingCloudSDK sharedInstance] sfmc_setNotificationUserInfo:userInfo];
  [RNCPushNotificationIOS didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];

  completionHandler(UIBackgroundFetchResultNewData);
}


- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
