Create AS Project
=================

1. Download and install Android Studio
2. Create a new project in the Android Studio, include the sample Login activity
3. Update the build.graddle of the app, include archivesBaseName = "loginapp" in the "Android" section to have reasonable name for the application package
4. Build the android studio project - create the .apk package


Setup node.js and the environment
=================================
1. Download and install node.js
2. Set JAVA_HOME environment variable, so it points to <ANDROID_STUDIO_DIRECTORY>/JRE
3. Set ANRDOID_HOME environment variable, so it points to %USER%\AppData\Local\Android
4. Create directory for testing project
5. Initialize the directory with npm init -y
6. Install appium using npm, can be global
7. Install webdriverio using npm, locally
8. Install appium-doctor using npm, globally
9. Run appium-doctor to see if everything is all right
10. In Android studio, run the AS project in an emulator
11. Run appium server with the following command: start /b appium

Create the test
===============
1. Update package.json with "type":"module" to make the test a module
2. Code the test (e.g. test01.js)
3. Run node test01.js to execute the test
