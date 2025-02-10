# Wetherspoon_task

 This project is intended to test Wetherspoon menu page on Web and Mobile browser.

## Project Description

This project uses **WebdriverIO** in combination with **Appium** to automate mobile testing for Web browser and Android applications. It supports running tests on Android  real devices and Chrome browser on web.

## Installation

Follow the steps below to set up the project locally:

### 1. Clone the Repository

Clone the project to your local machine using Git:

git clone https://github.com/DeepthiProj/Wetherspoon_task.git

cd Wetherspoon

## Installation
npm install

npm install -g appium

appium driver install uiautomator2

npm install @wdio/allure-reporter --save-dev (if reporting is needed)

## Running Tests
npx wdio run wdio.conf.js

## Running Allure Report
allure generate allure-results ; allure open (For Windows Power shell)



