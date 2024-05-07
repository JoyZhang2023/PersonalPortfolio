# Assignment: Building Your Personal Portfolio App
 AD340 Assignment

## Expo Project
### Start the development server
To start the development server, run the following command:

`npx expo start`

When you run the above command, the Expo CLI starts Metro Bundler. This bundler is an HTTP server that compiles the JavaScript code of your app using Babel and serves it to the Expo app. See how Expo Development Server works for more information about this process.

### Open the app on your device
To open the app on your device that has Expo Go already installed:

On your Android device, press Scan QR Code on the Home tab of the Expo Go app and scan the QR code you see in the terminal.
On your iPhone or iPad, open the default Apple Camera app and scan the QR code you see in the terminal.
You can open the project on multiple devices simultaneously. Go ahead and try it on both phones at the same time if you have them handy.3

## Assignment
### Object
Create a personal portfolio app using React Native and Expo Router. This app will showcase your personal projects, skills, and contact information across multiple pages, implementing various navigation techniques.

### Task Overview:
#### Implement Basic Navigation
- Set up a Link component on the Home Page to navigate to all other pages.
- Ensure that each page has a link back to the Home Page, demonstrating stack navigation.
  
#### Dynamic Routing in UserProfilePage.js
- Handle dynamic ID from the URL.
- Display the project name on the page.

#### Styling and Personalization
- Add images, text, and other media to showcase your work and skills.

## Report of Design Choice
For the link navigate back to Home page, replace method was used instead of push to avoid page stack due to constantly navigation between pages when project number grows.

## Video demonstration
https://github.com/JoyZhang2023/PersonalPortfolio/assets/137982978/e204575d-9e94-4736-8128-3e14b1553ef8

