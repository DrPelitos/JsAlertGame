function makePath(){lrf = choose([1,2,3]);};

function choose(arr){recChoose = arr[Math.floor(Math.random()*arr.length)]; return recChoose};

function makeOutcome(){
    let outcomeChooser = choose([1,2,3,4,5,6,7]);
    if(outcomeChooser==1){
        alert("You walk through the path without trouble.");
    };
    if(outcomeChooser==2){
        alert("You walk through the path without trouble.");
    };
    if(outcomeChooser==3){
        if(quandaleDingle==1){alert("You walk through the path, but you trip, and fall down some stairs.\n\nFortunately that wild Quandale Dingle from earlier catches you. You are saved.")} else {alert("You walk through the path, but you trip, and fall down some stairs.\n\nYou lose 15 Health."); statVal[1] -= 15};
    };
    if(outcomeChooser==4){
        alert("You walk through the path and find a small bag with " + choose(['a Scubway Sandwich' ,'some MicDunald Fries' ,'a Wemby\'s Hamburger' ,'some Chick-fil-b Nuggets' ,'a Scarbucks Coffee' ,'a Bomino\'s Pizza']));
        if(prompt("Eat " + recChoose + "? (+15 Health)\n\n(yes/no)")=="yes"){
            statVal[1] += 15; alert("You ate "+ recChoose +" and healed by 15.");
        } else {
            alert("You discard "+ recChoose +" continue on your journey.");
        };
    };
    if(outcomeChooser==5){
        alert("You walk through the path and find a small sack of coins, earning you 15 coins.");
        statVal[0] += 15;
    };
    if(outcomeChooser==6){
        alert("You walk through the path and find a bag of fishing bait, filled with 20 bits of meat.");
        statVal[3] += 20;
    };
    if(outcomeChooser==7){
        if(prompt("You walk through the path and find a bowl with some strange soup.\n\nDrink it?. (yes/no)")=="yes"){
            if(choose(['0', '1'])==0){alert("You drink the soup. It tastes somewhat like pumpkin and milk. After drinking you feel stronger and better. You gain 50 health."); statVal[1] += 50} else {alert("You drink the soup. It tastes like rotten meat and warm butter. After drinking you feel weak before passing out. You lose 75 health."); statVal[1] -= 75};
        } else {alert("You discard the strange liquid and continue on your journey.")};
    };
};

function gameLoop(){
    while(keeprunning){
        if(statVal[1]>0){
            gameRespond(prompt("what do you do?\n\nUse list to view your options"));
        } else {
            death();
        };
    };
};

function death(){
    alert("You died and have to restart.");
    statVal[0] = 0;
    statVal[1] = 100;
    statVal[2] = 0;
    lrf = 0;
    recChoose = 0;
    statVal[3] = 0;
    statVal[4] = 0;
};

function gamble(gamblemoney){
    if(gamblemoney > statVal[0]){alert("You dont have enough coins.")} 
    else {if(choose(['give', 'take'])=="give"){alert("You won " + gamblemoney +" coins!"); statVal[0] += parseInt(gamblemoney);} else {alert("You lost " + gamblemoney + " coins!"); statVal[0] -= parseInt(gamblemoney);}};
};

function goFish(){
    if(bait>0){if(prompt("You have "+ bait +" bait.\n\nDo you want to go fishing? (yes/no)")=="yes"){
        fishLoop();
    }} else {alert("You dont have any bait.")};
};

function fishLoop(){
    alert(bait + " bait.\n" + fish + " fish.");
    if(choose(['0', '1', '2'])=='0'){bait -= 1;};
    if(choose(['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'])=='0'){fish += 1;};
    if(bait>0){fishLoop()};
}

function eatFish(num){
    if(num <= fish){
        statVal[1] += num * 10;
    fish -= num;
    alert("You gained " + num * 10 + " health!")} else {alert("You dont have that many fish.")};
}

function save(){
    localStorage.coins = statVal[0];
    localStorage.health = statVal[1];
    localStorage.lvlPassed = statVal[2];
    localStorage.bait = statVal[3];
    localStorage.fish = statVal[4];
    localStorage.playerName = playerName;
    localStorage.loaded = 'true';
};

function load(){
    if(localStorage.loaded) {
        statVal[0] = parseInt(localStorage.coins);
        statVal[1] = parseInt(localStorage.health);
        statVal[2] = parseInt(localStorage.lvlPassed);
        statVal[3] = parseInt(localStorage.bait);
        statVal[4] = parseInt(localStorage.fish);
        playerName = localStorage.playerName;
        if(statVal[1] == 0){statVal[1] = 100}
    }
};

function gameRespond(input){
    if(input==null){
        save();
        alert("Auto saving...\nGame closing...");
        keeprunning = false;
    };
    if(input=="close"){
        alert("Closing without save....");
        keeprunning = false;
    };
    if(input=="list"){
        alert("list.\nstats.\nobserve/o.\nleft/l.\nright/r.\nforward/f.\ngamble.\nfish.\neat fish.\nsave.\nload.");
    };
    if(input=="stats"){
        alert(statNames[0]+": "+statVal[0]+"\n"+statNames[1]+": "+statVal[1]+"\n"+statNames[2]+": "+statVal[2]+"\n"+statNames[3]+": "+statVal[3]+"\n"+statNames[4]+": "+statVal[4]);
    };
    if(input=="observe"||input=="o"){
        if(lrf==1){
            alert("| |\n| |\n| |");
        };
        if(lrf==2){
            alert("\\ \\| |\n  \\  |\n   | |");
        };
        if(lrf==3){
            alert("| |/ /\n|  /\n| |");
        };
    };
    if(input==atob("Njk=")){
        alert("o.O")
    };
    if(input==atob("ZG9n")){
        alert("bark.");
    };
    if(input==atob("Y2F0")){
        alert("meow.");
    };
    if(input==atob("Y2FjYQ==")){
        if(prompt("You take a dump on the floor, and a wild Quandale Dingle appears to eat it.\n\nfight the quandale dingle? (yes/no)")=="yes"){
            alert("You fight the Quandale Dingle but its too strong for you.\n\nyou lose 50 health."); statVal[1] -= 50; quandaleDingle = 0} else {alert("You leave the Quandale Dingle alone and it appreciates your mercy.\n\nmaybe you\'ll meet him again later.");quandaleDingle = 1};
    };
    if(input=="left"||input=="l"){
        if(lrf==2){
            makePath();
            makeOutcome();
            statVal[2] += 1;
            if(lrf==1){
                alert("| |\n| |\n| |");
            };
            if(lrf==2){
                alert("\\ \\| |\n  \\  |\n   | |");
            };
            if(lrf==3){
                alert("| |/ /\n|  /\n| |");
            };
        } else {
            alert("Sorry, you cant do that at the moment.");
        };
    };
    if(input=="forward"||input=="f"){
        makePath();
        if(lrf==1){
            alert("| |\n| |\n| |");
        };
        if(lrf==2){
            alert("\\ \\| |\n  \\  |\n   | |");
        };
        if(lrf==3){
            alert("| |/ /\n|  /\n| |");
        };
        statVal[2] += 1;
    };
    if(input=="right"||input=="r"){
        if(lrf==3){
            makePath();
            makeOutcome();
            statVal[2] += 1;
            if(lrf==1){
                alert("| |\n| |\n| |");
            };
            if(lrf==2){
                alert("\\ \\| |\n  \\  |\n   | |");
            };
            if(lrf==3){
                alert("| |/ /\n|  /\n| |");
            };
        } else {
            alert("Sorry, you cant do that at the moment.");
        };
    };
    if(input=="gamble"){
        if(statVal[0] > 0){
            gamble(prompt("Welcome to the gamble machine!\nHow many coins would you like to bet on?"));
        } else {
            alert("You dont have any money to gamble.");
        };
    };
    if(input=="fish"){
        goFish();
    };
    if(input=="eat fish"){
        if(fish>0){
            eatFish(prompt("How many fish would you like to eat?"));
        } else {alert("You dont any fish to eat.")};
    };
    if(input=="save"){
        save()
    };
    if(input=="load"){
        load()
    };
    if(input=="name"){
        playerName = prompt("Your name is " + playerName + ".\n\nWhat would you like to change your name to?")
        if(playerName==null){playerName="magicarp"};
    };
    if(input=="wipe"){
        if (prompt("Are you sure you want to delete your progress? (yes/no)")=="yes") {localStorage.clear()}
    };
    if(input==atob('bXRmYnd5')){
        dev = true;
        alert("ACCESS GRANTED")
    };
    if(input=="js"){
        if(dev==true){eval(prompt("run:"))}
    };
};

const statNames = [
    "coins",
    "health",
    "lvlPassed",
    "bait",
    "fish"
];

var statVal = [
    0,
    0,
    100,
    0,
    0,
    0,
];

let playerName = "unknown";
let keeprunning = true;
let dev = false;
let lrf = 1;
let quandaleDingle = 0;

alert("Starting...");
alert("This game was made by Julian Lehmann Melgar (copyright)");
if(localStorage.playerName) {playerName = localStorage.playerName} else {
    playerName = prompt("What is your name?");
    if(playerName==null){playerName="magicarp"};
};
alert("Hello " + playerName + "!");
if(localStorage.loaded){load()}
gameLoop();