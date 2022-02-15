package br.com.paguemenos.anjodaguarda;

import android.app.Application;
import android.content.Context;
import android.util.Log;

import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import org.reactnative.camera.RNCameraPackage;
import org.reactnative.camera.RNCameraPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.github.reactnativecommunity.location.RNLocationPackage;
import com.github.reactnativecommunity.location.RNLocationPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.reactcommunity.rndatetimepicker.RNDateTimePickerPackage;
//import com.reactnativecommunity.geolocation.GeolocationPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import com.salesforce.marketingcloud.MarketingCloudConfig;
import com.salesforce.marketingcloud.MarketingCloudSdk;
import com.salesforce.marketingcloud.notifications.NotificationCustomizationOptions;

import java.lang.reflect.InvocationTargetException;
import java.util.List;

   public class MainApplication extends Application implements ReactApplication {

     private final ReactNativeHost mReactNativeHost =
         new ReactNativeHost(this) {
           @Override
           public boolean getUseDeveloperSupport() {
             return BuildConfig.DEBUG;
           }

           @Override
           protected List<ReactPackage> getPackages() {
             @SuppressWarnings("UnnecessaryLocalVariable")
             List<ReactPackage> packages = new PackageList(this).getPackages();
             // Packages that cannot be autolinked yet can be added manually here, for example:
             // packages.add(new MyReactNativePackage());
             return packages;
           }

           @Override
           protected String getJSMainModuleName() {
             return "index";
           }
         };

     @Override
     public ReactNativeHost getReactNativeHost() {
       return mReactNativeHost;
     }

     @Override
     public void onCreate() {
       super.onCreate();

       MarketingCloudSdk.init(this,
           MarketingCloudConfig.builder()
                   .setApplicationId("123117c2-de75-46c2-8ac7-fae8e2ab22b1")
                   .setAccessToken("802kX2SdZ3d1112gieF5wXPS")
                   .setSenderId("375425584204")
                   .setMarketingCloudServerUrl("https://mc5dpvdc4-brvv2-tc7t2z1g-758.device.marketingcloudapis.com/")
                   .setNotificationCustomizationOptions(NotificationCustomizationOptions.create(R.drawable.ic_notification))
                   .setAnalyticsEnabled(true)
                   .build(this),
           initializationStatus -> Log.e("INIT", initializationStatus.toString()));

           SoLoader.init(this, /* native exopackage */ false);
           initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
     }

     /**
      * Loads Flipper in React Native templates. Call this in the onCreate method with something like
      * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
      *
      * @param context
      * @param reactInstanceManager
      */
     private static void initializeFlipper(
         Context context, ReactInstanceManager reactInstanceManager) {
       if (BuildConfig.DEBUG) {
         try {
           /*
            We use reflection here to pick up the class that initializes Flipper,
           since Flipper library is not available in release mode
           */
           Class<?> aClass = Class.forName("br.com.paguemenos.anjodaguarda.ReactNativeFlipper");
           aClass
               .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
               .invoke(null, context, reactInstanceManager);
         } catch (ClassNotFoundException e) {
           e.printStackTrace();
         } catch (NoSuchMethodException e) {
           e.printStackTrace();
         } catch (IllegalAccessException e) {
           e.printStackTrace();
         } catch (InvocationTargetException e) {
           e.printStackTrace();
         }
       }
     }
   }
