const five = require("johnny-five");        //johnny five library declared
const Wait = require('wait-for-stuff');         // wait for stuff library declared
const board = new five.Board({ port: "COM5" });    //board declared
const Oled = require("oled-js");                   //oled libarary declared                   

//arduino is turned on and ready to run code.
board.on("ready", function () {

    /* variables declared for each sensor and/or input device as well as
    output device */
    const joystick = new five.Joystick({
        pins: ["A4", "A5"]
    });

    const pot = five.Sensor("A1");  // sensor declared.

    const matrix = new five.Led.Matrix({        //matrix variable declared for coding.
        pins: {
            data: 6,
            clock: 4,
            cs: 5
        },
        devices: 4
    });

    const button = new five.Button({        //button is created.
        pin: 2,
        isPullup: true
    });


    //array created to iterate through functions.
    const options = ["pushIt", "twistIt", "flickIt", "goodbye"];
    var action = false;

    
    hey();              //functions are called to run the program.
    countdown();
    pushIt();


    //first introductory function. 
    function hey() {
        matrix.draw(3, "H");
        matrix.draw(2, "E");
        matrix.draw(1, "Y");
        matrix.draw(0, "!");
        Wait.for.time(2);
        matrix.draw(3, "J");
        matrix.draw(2, "O");
        matrix.draw(1, "H");
        matrix.draw(0, "N");
        matrix.clear();
    }

    function pushIt() {             //function corresponding to the button.
        matrix.draw(3, "P");
        matrix.draw(2, "U");
        matrix.draw(1, "S");
        matrix.draw(0, "H");
        matrix.clear(0);
        matrix.clear(1);
        matrix.draw(3, "I");
        matrix.draw(2, "T");
    }
    //event created to listen for press to continue the game.
    button.on("press", function () {
        nice();
        flickIt();
    });

    function twistIt() {            
        matrix.draw(3, "T");
        matrix.draw(2, "U");
        matrix.draw(1, "R");
        matrix.draw(0, "N");
        matrix.clear(0);
        matrix.clear(1);
        matrix.draw(3, "I");
        matrix.draw(2, "T");
    }
    pot.on("change", function () {      //event listening for the sensor to be turned.
        const { value, raw } = pot;
        if (value > 250) {          //when the value of the sensor reaches this point next function is called.
            nice();
            goodbye();
        };
    });

    function flickIt() {
        matrix.draw(3, "F");
        matrix.draw(2, "L");
        matrix.draw(1, "I");
        matrix.draw(0, "K");
        matrix.clear(0);
        matrix.clear(1);
        matrix.draw(3, "I");
        matrix.draw(2, "T");
    }

    joystick.on("change", function () {     //event listening for joystick to be "flicked".
       const x = this.x;
        const y = this.y;
        if (x > 0.5 || x < -0.5 || y > 0.5 || y < -0.5) {       // if the x,y values go beyond a certain threshold the next function is called.
            nice();
            twistIt();
        };
    });


    function goodbye() {
        matrix.draw(3, "B");
        matrix.draw(2, "Y");
        matrix.draw(1, "E");
        matrix.draw(0, "!");
        Wait.for.time(2);
        matrix.draw(3, "J");
        matrix.draw(2, "O");
        matrix.draw(1, "H");
        matrix.draw(0, "N");
        matrix.clear();
        return action = true;
    }

    function countdown() {          // cooldown between the plays.
        for (let i = 5; i > -1; --i) {
            matrix.draw(1, i);
        };
    }

    function nice() {           //positive comment complimenting the player.
        matrix.draw(3, "N");
        matrix.draw(2, "I");
        matrix.draw(1, "C");
        matrix.draw(0, "E");
    }

});