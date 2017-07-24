package com.infinitescroll;

import com.facebook.react.ReactActivity;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;

public class MainActivity extends ReactActivity {

  /**
    * Returns the name of the main component registered from JavaScript.
    * This is used to schedule rendering of the component.
    */
  @Override
  protected String getMainComponentName() {
    return "InfiniteScroll";
  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {

      return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new ReactNativePushNotificationPackage()
      );
    }
  };
}
