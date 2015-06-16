/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="objects/button.ts" />


// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;

var assets: createjs.LoadQueue;
var manifest = [
    { id: "plusButton", src: "assets/images/roll.png" },
    { id: "one", src: "assets/images/11.JPG" },
    { id: "two", src: "assets/images/22.JPG" },
    { id: "three", src: "assets/images/33.JPG" },
    { id: "four", src: "assets/images/44.JPG" },
    { id: "five", src: "assets/images/55.JPG" },
    { id: "six", src: "assets/images/66.JPG" },
 
    { id: "clicked", src: "assets/audio/clicked.wav" }
];


// Game Variables
var helloLabel: createjs.Text;
var hello2: createjs.Text;
 // create a reference
var plusButton: objects.Button;

//variables for dice sides
var one: objects.Button;
var two: objects.Button;
var three: objects.Button;
var four: objects.Button;
var five: objects.Button;
var six: objects.Button;


// Preloader Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listener triggers when assets are completely loaded
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
    //Setup statistics object
    setupStats();
}

// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop); 

    // calling main game function
    main();
}

// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps

    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '330px';
    stats.domElement.style.top = '10px';

    document.body.appendChild(stats.domElement);
}


// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring

    stage.update();

    stats.end(); // end measuring
}

// Callback function that allows me to respond to button click events
function pinkButtonClicked(event: createjs.MouseEvent) {
    createjs.Sound.play("clicked");


    //logic to display the sides of dice
    var a = Math.floor(Math.random() * 6 + 1);
    var b = Math.floor(Math.random() * 6 + 1);
    console.log(a);
    console.log(b);
    if (a == 1) {
        one = new objects.Button(assets.getResult("one"), 80, 190);
        stage.addChild(one);
        stage.removeChild(helloLabel);
        helloLabel = new createjs.Text(a.toString(), "20px Consolas", "#000000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
   helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    helloLabel.x = 80;
    helloLabel.y = 270;
    stage.addChild(helloLabel);

    } if (a == 2) {
        two = new objects.Button(assets.getResult("two"), 80, 190);
        stage.addChild(two);
        stage.removeChild(helloLabel);
        helloLabel = new createjs.Text(a.toString(), "20px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = 80;
        helloLabel.y = 270;
        stage.addChild(helloLabel);

    } if (a == 3) {
        three = new objects.Button(assets.getResult("three"), 80, 190);
        stage.addChild(three);
        stage.removeChild(helloLabel);
        helloLabel = new createjs.Text(a.toString(), "20px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = 80;
        helloLabel.y = 270;
        stage.addChild(helloLabel);

    } if (a == 4) {
        four = new objects.Button(assets.getResult("four"), 80, 190);
        stage.addChild(four);
        stage.removeChild(helloLabel);
        helloLabel = new createjs.Text(a.toString(), "20px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = 80;
        helloLabel.y = 270;
        stage.addChild(helloLabel);

    }
    if (a == 5) {
        five = new objects.Button(assets.getResult("five"), 80, 190);
        stage.addChild(five);
        stage.removeChild(helloLabel);
        helloLabel = new createjs.Text(a.toString(), "20px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = 80;
        helloLabel.y = 270;
        stage.addChild(helloLabel);

    }if (a == 6) {
        six = new objects.Button(assets.getResult("six"), 80, 190);
        stage.addChild(six);
        stage.removeChild(helloLabel);
        helloLabel = new createjs.Text(a.toString(), "20px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = 80;
        helloLabel.y = 270;
        stage.addChild(helloLabel);
    }

    if (b == 1) {
        one = new objects.Button(assets.getResult("one"), 180, 190);
        stage.addChild(one);
        stage.removeChild(hello2);
        hello2 = new createjs.Text(b.toString(), "20px Consolas", "#000000");
        hello2.regX = helloLabel.getMeasuredWidth() * 0.5;
        hello2.regY = helloLabel.getMeasuredHeight() * 0.5;
        hello2.x = 180;
        hello2.y = 270;
        stage.addChild(hello2);

    } if (b == 2) {
        two = new objects.Button(assets.getResult("two"), 180, 190);
        stage.addChild(two);
        stage.removeChild(hello2);
        hello2 = new createjs.Text(b.toString(), "20px Consolas", "#000000");
        hello2.regX = helloLabel.getMeasuredWidth() * 0.5;
        hello2.regY = helloLabel.getMeasuredHeight() * 0.5;
        hello2.x = 180;
        hello2.y = 270;
        stage.addChild(hello2);

    } if (b == 3) {
        three = new objects.Button(assets.getResult("three"), 180, 190);
        stage.addChild(three);
        stage.removeChild(hello2);
        hello2 = new createjs.Text(b.toString(), "20px Consolas", "#000000");
        hello2.regX = helloLabel.getMeasuredWidth() * 0.5;
        hello2.regY = helloLabel.getMeasuredHeight() * 0.5;
        hello2.x = 180;
        hello2.y = 270;
        stage.addChild(hello2);

    } if (b == 4) {
        four = new objects.Button(assets.getResult("four"), 180, 190);
        stage.addChild(four);
        stage.removeChild(hello2);
        hello2 = new createjs.Text(b.toString(), "20px Consolas", "#000000");
        hello2.regX = helloLabel.getMeasuredWidth() * 0.5;
        hello2.regY = helloLabel.getMeasuredHeight() * 0.5;
        hello2.x = 180;
        hello2.y = 270;
        stage.addChild(hello2);

    }
    if (b == 5) {
        five = new objects.Button(assets.getResult("five"), 180, 190);
        stage.addChild(five);
        stage.removeChild(hello2);
        hello2 = new createjs.Text(b.toString(), "20px Consolas", "#000000");
        hello2.regX = helloLabel.getMeasuredWidth() * 0.5;
        hello2.regY = helloLabel.getMeasuredHeight() * 0.5;
        hello2.x = 180;
        hello2.y = 270;
        stage.addChild(hello2);

    } if (b == 6) {
        six = new objects.Button(assets.getResult("six"), 180, 190);
        stage.addChild(six);
        stage.removeChild(hello2);
        hello2 = new createjs.Text(b.toString(), "20px Consolas", "#000000");
        hello2.regX = helloLabel.getMeasuredWidth() * 0.5;
        hello2.regY = helloLabel.getMeasuredHeight() * 0.5;
        hello2.x = 180;
        hello2.y = 270;
        stage.addChild(hello2);
    }
    

    
}

// Callback functions that change the alpha transparency of the button


// Our Main Game Function
function main() {
    console.log("Game is Running");
   // helloLabel = new createjs.Text("Hello World!", "40px Consolas", "#000000");
    //helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
   // helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
   // helloLabel.x = 160;
    //helloLabel.y = 190;
   // stage.addChild(helloLabel);

    plusButton = new objects.Button(assets.getResult("plusButton"), 140, 370);
    stage.addChild(plusButton);
    plusButton.on("click", pinkButtonClicked);


    //sides of dice to display when game starts
    one = new objects.Button(assets.getResult("one"), 80, 190);
    stage.addChild(one);
    stage.removeChild(helloLabel);
    helloLabel = new createjs.Text("1", "20px Consolas", "#000000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    helloLabel.x = 80;
    helloLabel.y = 270;
    stage.addChild(helloLabel);
    

    two = new objects.Button(assets.getResult("two"), 180, 190);
    stage.addChild(two);
    
    stage.removeChild(hello2);
    hello2 = new createjs.Text("2", "20px Consolas", "#000000");
    hello2.regX = helloLabel.getMeasuredWidth() * 0.5;
    hello2.regY = helloLabel.getMeasuredHeight() * 0.5;
    hello2.x = 180;
    hello2.y = 270;
    stage.addChild(hello2);

}