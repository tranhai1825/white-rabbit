A Capacitor Android app that receives notifications sent from Firebase Cloud Messaging project.

## Create Android app
**NOTE**: use `bun` instead of `npm`

Use ViteJS create a webapp
Add React
Add Capacitor Android
Add splash and app icon

## Install Java 21 (on local Linux laptop)
```
sudo apt update
sudo apt install openjdk-21-jdk
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
export PATH="$JAVA_HOME/bin:$PATH"
```

## Build Android APK and install it
```
emulator -avd Pixel_8
adb devices
cd <here>
npm run build && npx cap sync android
cd android 
./gradlew assembleDebug
cd ..
adb install android/app/build/outputs/apk/debug/app-debug.apk


## FCM: Firebase Cloud Messaging

Log in Firebase, create a project `yellow-rabbit`
Add an Android app, and an iOS app (app id = <what you have in capacitor config>)

Go to [FCM](https://console.firebase.google.com/project/yellow-rabbit-9c0fb/messaging)
Create a new campaign, and enter some app-notification (not in-app) message contents and Send

Wait one minute.

Hope to receive it on the emulator (even when app is closed)
