# Traffic-lights-on-arduino-using-jhonny-five
This project is a fun and interactive game built using the Johnny-Five library, which allows for easy control of Arduino boards using JavaScript. The game integrates multiple input devices (joystick, potentiometer, and button) and an LED matrix for visual feedback. The game cycles through different actions such as "Push It," "Twist It," and "Flick It" and provides instructions and feedback through the LED matrix.

# Table of Contents
1. Overview
2. Hardware Requirements
3. Software Requiremnts
4. Installation
5. Usage
6. Code Explanation

# Overview
The game starts with a greeting on the LED matrix and proceeds through a series of actions that the player must perform using various input devices connected to the Arduino board. The sequence of actions includes:

1. Push It - Press the button.
2. Twist It - Turn the potentiometer.
3. Flick It - Move the joystick.

Each action is displayed on the LED matrix, and the game waits for the corresponding input before moving to the next action. The game ends with a goodbye message.

# Hardware Requirements
To run this project, you need the following hardware components:

1. Arduino board (compatible with Johnny-Five, e.g., Arduino Uno)
2. USB cable to connect the Arduino to your computer
3. Joystick module
4. Potentiometer
5. Push button
6. LED Matrix (4 devices connected in series)
7. Breadboard and connecting wires

# Software Requirements
Ensure you have the following software installed:

1. Node.js and npm (Node Package Manager)
2. Johnny-Five library
3. wait-for-stuff library
4. oled-js library

# Installation
1. Install Node.js and npm: Download and install Node.js from the official website. npm is included with Node.js.

2. Set up the project directory: Create a new directory for your project and navigate into it:
   ```
   mkdir arduino-game
   cd arduino-game
   ```
3. Initialize npm: Initialize a new npm project:
    ```
    npm init -y
    ```
4. Install required libraries:
   ```
   npm install johnny-five wait-for-stuff oled-js
   ```
5. Create your JavaScript file: Create a new file named "LEDMatrix5.js" and copy the provided code into this file.

# Usage

1. Connect your hardware: Connect the joystick, potentiometer, push button, and LED matrix to the Arduino board as per the pin configuration specified in the code.

2. Upload a blank sketch to the Arduino: Open the Arduino IDE, select your board and port, and upload a blank sketch (an empty setup and loop) to the Arduino. This ensures the Arduino is ready for Johnny-Five.

Run the game: Execute the game script:
```
node game.js
```
3. Follow the instructions on the LED matrix: The game will start with a greeting and then prompt you to perform various actions. Respond using the connected input devices.

# Code Explanation

The LEDMatrix5.js file sets up and runs the game:

1. Library Imports: The code starts by importing the required libraries: johnny-five for controlling the Arduino, wait-for-stuff for synchronous waiting, and oled-js for controlling the LED matrix.

2. Board Initialization: The Arduino board is initialized with a specified port.

3. Device Setup: The joystick, potentiometer, button, and LED matrix are configured with their respective pins.

4. Game Functions: Several functions are defined to handle different parts of the game:

  * hey(): Displays the greeting message.
  * pushIt(), twistIt(), flickIt(): Displays instructions for each action.
  * goodbye(): Displays the goodbye message.
  * countdown(): Displays a countdown before the game starts.
  * nice(): Displays a positive message when an action is successfully completed.

 5. Event Listeners: Event listeners are set up to trigger actions based on the input from the joystick, potentiometer, and button.
