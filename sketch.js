var canvas
var gameState = 1;
var input, text, button1, button2, greeting, reset;
var q1, q2, q3 ,q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15;
var radio1, radio2, radio3, radio4, radio5, radio6, radio7, radio8, radio9, radio10, radio11, radio12;
var inputq13, inputq14, inputq15;
var cp = 0

function setup() {
        canvas = createCanvas(displayWidth, displayHeight);
        title = createElement('h1');
        input = createInput("");
        text = createElement('h2', "Please enter your name in the given box:");
        button1 = createButton('Submit');
        button2 = createButton('Calculate my footprint');
        greeting = createElement('h2');
        q1 = createElement('h3', "1) How many kilometres do you drive your car on a weekday?");
        radio1 = createRadio();
        radio1.option('Less than 30 kilometres');
        radio1.option('More than 30 kilometres');
        radio1.option('More than 60 kilometres');
        q2 = createElement('h3', "2) How many kilometres do you drive your car on a weekend?");
        radio2 = createRadio();
        radio2.option('Less than 40 kilometres');
        radio2.option('More than 40 kilometres');
        radio2.option('More than 80 kilometres');
        q3 = createElement('h3', "3) How many vehicles does your family own?");
        radio3 = createRadio();
        radio3.option('0');
        radio3.option('1-3');
        radio3.option('More than 3');
        q4 = createElement('h3', "4) What kind of fuel do your vehicles run on?");
        radio4 = createRadio();
        radio4.option('Petrol');
        radio4.option('Diesel');
        radio4.option('CNG');
        radio4.option('Biodiesel');
        radio4.option('Electricity');
        radio4.option('Other');
        q5 = createElement('h3', "5) Do you carpool often?");
        radio5 = createRadio();
        radio5.option('Yes');
        radio5.option('No');
        q6 = createElement('h3', "6) Does your house have a coal furnace? If yes, how often do you use it?");
        radio6 = createRadio();
        radio6.option('No');
        radio6.option('Yes Use is less than an hour');
        radio6.option('Yes Use is more than an hour');
        q7 = createElement('h3', "7) Do you use your vehicle to travel to destinations that are less than 3 kilometres away?");
        radio7 = createRadio();
        radio7.option('Yes');
        radio7.option('No');
        q8 = createElement('h3', "8) Do you burn your waste?");
        radio8 = createRadio();
        radio8.option('Yes');
        radio8.option('No');
        q9 = createElement('h3', "9) Do you recycle waste?");
        radio9 = createRadio();
        radio9.option('Yes');
        radio9.option('No');
        q10 = createElement('h3', "10) Do you donate funds to environment protection organisations?");
        radio10 = createRadio();
        radio10.option('Yes');
        radio10.option('No');
        q11 = createElement('h3', "11) Approximately how many trees do you plant every year?");
        radio11 = createRadio();
        radio11.option('Less than 10');
        radio11.option('More than 10');
        q12 = createElement('h3', "12) Approxiamtely how much is your monthly cooking gas bill?");
        radio12 = createRadio();
        radio12.option('Less than $50');
        radio12.option('More than $50');
        q13 = createElement('h3', "13) What efforts do you take to save energy?");
        inputq13 = createInput("");
        q14 = createElement('h3', "14) Would you term yourself as environment friendly? Why?");
        inputq14 = createInput("");
        q15 = createElement('h3', "15) What would you do to reduce global warming and excess carbon release?");
        inputq15 = createInput("");
        reset = createButton('Reset')
   }

function draw(){
        title.html("CARBON FOOTPRINT CALCULATOR - Know your contribution");
        title.position(displayWidth - 1400, displayHeight - 1000);
     
        if(gameState === 1){
            start();

        }

        if(gameState === 2){
            q1.position(displayWidth - 1180, displayHeight - 900);
            radio1.position(displayWidth - 1205, displayHeight - 850);
            q2.position(displayWidth - 1180, displayHeight - 800);
            radio2.position(displayWidth - 1205, displayHeight - 750);
            q3.position(displayWidth - 1110, displayHeight - 700);
            radio3.position(displayWidth - 1035, displayHeight - 650);
            q4.position(displayWidth - 1100, displayHeight - 600);
            radio4.position(displayWidth - 1135, displayHeight - 550);
            q5.position(displayWidth - 1037, displayHeight - 500);
            radio5.position(displayWidth - 990, displayHeight - 450);
            q6.position(displayWidth - 1220, displayHeight - 400);
            radio6.position(displayWidth - 1155, displayHeight - 350);
            q7.position(displayWidth - 1285, displayHeight - 300);
            radio7.position(displayWidth - 990, displayHeight - 250); 
            q8.position(displayWidth - 1050, displayHeight - 200);
            radio8.position(displayWidth - 990, displayHeight - 150);
            q9.position(displayWidth - 1040, displayHeight - 100);
            radio9.position(displayWidth - 990, displayHeight - 50);
            q10.position(displayWidth - 1210, displayHeight);
            radio10.position(displayWidth - 990, displayHeight + 50);
            q11.position(displayWidth - 1190, displayHeight + 100);
            radio11.position(displayWidth - 1060, displayHeight + 150);
            q12.position(displayWidth - 1200, displayHeight + 200);
            radio12.position(displayWidth - 1065, displayHeight + 250);
            q13.position(displayWidth - 1130, displayHeight + 300);
            inputq13.position(displayWidth - 1040, displayHeight + 350);
            q14.position(displayWidth - 1195, displayHeight + 400);
            inputq14.position(displayWidth - 1040, displayHeight + 450);
            q15.position(displayWidth - 1255, displayHeight + 500);
            inputq15.position(displayWidth - 1040, displayHeight + 550);
            button2.position(displayWidth - 1025, displayHeight + 650);
            reset.position(displayWidth - 980, displayHeight + 700)
        }

        if(gameState === 2){
            button2.mousePressed(()=>{
                var abc = radio4.value();
                if(abc === 'Petrol'){
                    cp = cp+100
                    text("The carbon footprint is " + cp, 1000, 1000);
                }
            })
        }
}

function start(){
    text.position(displayWidth - 1130, displayHeight - 920);
    input.position(displayWidth - 1030, displayHeight - 840);
    button1.position(displayWidth - 975, displayHeight - 780);
   
    /*q1.hide();
    q2.hide();
    q3.hide();
    q4.hide();
    q5.hide();
    q6.hide();
    q7.hide();
    q8.hide();
    q9.hide();
    q10.hide();
    q11.hide();
    q12.hide();
    q13.hide();
    q14.hide();
    q15.hide();

    radio1.hide();
    radio2.hide();
    radio3.hide();
    radio4.hide();
    radio5.hide();
    radio6.hide();
    radio7.hide();
    radio8.hide();
    radio9.hide();
    radio10.hide();
    radio11.hide();
    radio12.hide();

    inputq13.hide();
    inputq14.hide();
    inputq15.hide();

    button2.hide();
    reset.hide(); */

    button1.mousePressed(()=>{
        input.hide();
        button1.hide();
        text.hide();
        gameState = 2;
   })
}


    