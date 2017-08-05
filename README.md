# Calabash Installation

1. To avoid using `sudo` when installing any gems, you need to install a second version of ruby (and most likely `rvm` too in order to manage the versions).
    Once you do that, you need to run `rvm use new.ruby.version`. To make sure you're using the version you want, run `ruby -v`. (If for any reason you
    need to revert to the system version of ruby you can type `rvm use system` in the console)
1. Run `gem install bundler` and `bundle install` to ensure you get all dependencies installed
1. Run `curl -sSL https://raw.githubusercontent.com/calabash/install/master/install-osx.sh | bash` to install the iOS and Android Calabash gems OR
    1. `gem install calabash-android` for android setup, and
    1. `gem install calabash-cucumber` for iOS setup
1. Make sure two new folders were created: `calabash-test-ios`, and `calabash-test-android`. For more info see [this link](https://github.com/calabash/calabash-ios/wiki/Getting-Started)
1. Link xCode for the iOS project - follow [these steps](https://github.com/calabash/calabash-ios/wiki/Tutorial%3A-Link-Calabash-in-Debug-config)
1. To run the actual test suite you need to:
    1. Navigate to the iOS folder (`cd calabash-test-ios`) and type `cucumber` for iOS, OR
    1. `calabash-android run android/app/build/outputs/apk/app-debug.apk` for Android

The file setup is already done; additional information can be found at
[bitbar](https://bitbar.com/how-to-setup-and-get-started-with-calabash/) or [calabash](http://calaba.sh).
