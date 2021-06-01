var PLAYERSCORE = 0;
var COMPUTERSCORE = 0;
var Gamerecord = 0;
var Gamenorecord = 0;
var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var wincombo = 
     [[0, 1, 2]
    , [3, 4, 5]
    , [6, 7, 8]
    , [0, 3, 6]
    , [1, 4, 7]
    , [2, 5, 8]
    , [0, 4, 8]
    , [2, 4, 6]];

var player1 = [];
var player2 = [];

var name1 = "";
var name2 = "Computer";
function game() {
    document.getElementById("wc").style.display = "None";
    document.getElementById("nm").style.display = "None";
    document.getElementById("btn").style.display = "None";
    var container = document.getElementById("con");
    var field = document.getElementById("field");
    var maze = document.getElementById("maze");
    field.appendChild(maze);
    container.style.flexDirection = "row";
    maze.style.display = "flex";
    var playerscore = document.getElementById("PlayerScore");
    var computerscore = document.getElementById("ComputerScore");
    playerscore.style.display = "flex";
    computerscore.style.display = "flex";
    name1 = document.getElementById("pname1").value;
    if (name1 == "") {
        name1 = "Player1";
    }
    var playerscorenamefield = document.getElementById("NP");
    var compscorenamefield = document.getElementById("NC");
    playerscorenamefield.innerHTML = name1;
    compscorenamefield.innerHTML = "Computer";
    container.style.justifyContent = "space-around";
    var scoreP = document.getElementById("SP");
    var scoreC = document.getElementById("SC");
    scoreC.innerHTML = COMPUTERSCORE;
    scoreP.innerHTML = PLAYERSCORE;
    maze.style.zIndex = 1;
    document.getElementById("restart").style.display = "flex";
    if ( Gamerecord % 2 == 0)
    {
        drawcomp(arr);
    }
    var x = window.matchMedia("(max-width:1300px")
    if (x.matches)
    {
        document.getElementById("con").style.flexDirection="column";
        document.getElementById("turn").style.display="none";
        document.getElementById("ComputerScore").style.height="100px";
        document.getElementById("ComputerScore").style.margin="10px";
        document.getElementById("PlayerScore").style.height="100px";
        document.getElementById("PlayerScore").style.margin="10px";
        document.getElementById("PlayerScore").style.zIndex="10";
        document.getElementById("ComputerScore").style.transform="rotate(180deg)";
        document.getElementById("PlayerScore").style.fontSize="40px";
        document.getElementById("ComputerScore").style.fontSize="40px";
        

    }

}

function gamestarter(ele,sap) 
{
    ele.innerHTML = "X";
    ele.disabled="true";
    player1.push(sap);
    arr[sap] = 1;
    if ( player1.length + player2.length == arr.length)
    {
        temporary("equality");
        console.log(player1,player2,"Game starter 1");
        return;
    }
    if (wincheckd(player1, name1))
    {
        PLAYERSCORE = PLAYERSCORE + 1;
        document.getElementById("SP").innerHTML=PLAYERSCORE;
        console.log(player1,player2,"Game starter 2");
        return;
    }
    if(wincheckd(player2, name2))
    {
        COMPUTERSCORE = COMPUTERSCORE + 1;
         document.getElementById("SC").innerHTML=COMPUTERSCORE;
        console.log(player1,player2,"Game starter 3");
        return;
    } 
    drawcomp(arr);
    if (wincheckd(player1, name1))
    {
        console.log(player1,player2,"Game starter 4");
        PLAYERSCORE = PLAYERSCORE + 1;
        document.getElementById("SP").innerHTML=PLAYERSCORE;
        return;
    }
    if(wincheckd(player2, name2))
    {
        console.log(player1,player2,"Game starter 5");
        COMPUTERSCORE = COMPUTERSCORE + 1;
        document.getElementById("SC").innerHTML=COMPUTERSCORE;
        return;
    }  
    if ( player1.length + player2.length == arr.length)
    {
        temporary("equality");
        console.log(player1,player2,"Game starter 1");
        return;
    }  
}


function drawcomp(arr) 
{
    let bestscore = -Infinity;
    let move;
    for (var i = 0; i < arr.length; i++) 
    {
        if (arr[i] == 0) 
        {
            arr[i]=1;
            player2.push(i);
            score = minimax(arr, 0, false);
            if (score > bestscore) 
            {
                bestscore = score;
                move = i ;
            }
            arr[i]=0;
            player2.pop();
        }
    }
    document.getElementById("button" + move).innerHTML = "O";
    document.getElementById("button" + move).disabled="True"; 
    arr[move]=1;
    player2.push(move);
}

function minimax(array, depth, ismax) {
    
   if (wincheck(player1)) {
        return -100;
    }
    if (wincheck(player2)) {
        return 100;
    }
    if ((player1.length + player2.length == arr.length) && (wincheck(player1) == false) && wincheck(player2)== false) {
        return 0;
    }
    else 
    {
        if (ismax == true) 
        {
            var bestscore = -Infinity;
            for (var i = 0; i < arr.length; i++) 
            {
                if (array[i] == 0) 
                {
                    array[i]=1;
                    player2.push(i);
                    let score = minimax(array,depth+1,false);
                    player2.pop();
                    array[i]=0;
                    bestscore = Math.max(bestscore,score);
                    
                }
            }
            return bestscore;
        }
        else 
        {
            var bestscore = Infinity;
            for (var i = 0; i < arr.length; i++) 
            {
                if (array[i] == 0)
                {
                    
                    array[i]=1;
                    player1.push(i);
                    let  score = minimax(array,depth+1,true);
                    player1.pop();
                    array[i]=0;
                    bestscore = Math.min(bestscore,score);
                    
                }
            }
            return bestscore;
        }
    }
}

function reset() {
    document.getElementById("button0").innerHTML = "";
    document.getElementById("button1").innerHTML = "";
    document.getElementById("button2").innerHTML = "";
    document.getElementById("button3").innerHTML = "";
    document.getElementById("button4").innerHTML = "";
    document.getElementById("button5").innerHTML = "";
    document.getElementById("button6").innerHTML = "";
    document.getElementById("button7").innerHTML = "";
    document.getElementById("button8").innerHTML = "";
    document.getElementById("button0").disabled = false;
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = false;
    document.getElementById("button3").disabled = false;
    document.getElementById("button4").disabled = false;
    document.getElementById("button5").disabled = false;
    document.getElementById("button6").disabled = false;
    document.getElementById("button7").disabled = false;
    document.getElementById("button8").disabled = false;
    while (player1.length > 0) {
        player1.pop()
    }
    while (player2.length > 0) {
        player2.pop();
    }

    var m = document.getElementById("status");
    m.style.display = "none";
    document.getElementById("reset").style.display = "none";
        document.getElementById("turn").innerHTML = "Turn Of " + name1;
    
    for (var i = 0; i < arr.length; i++) 
    {
        arr[i] = 0;
    }
    if ( Gamerecord % 2 == 1)
    {
        drawcomp(arr);
    }
    Gamerecord = Gamerecord + 1;
}





function wincheckd(player, name) 
{
    for (var i = 0; i < wincombo.length; i++) 
    {
        if (compare(wincombo[i], player)) 
        {
            temporary(name);
            return true;

        }
    }
    return false;
}


function wincheck( player) 
{
    for (var i = 0; i < wincombo.length; i++) 
    {
        if (compare(wincombo[i], player)) 
        {
            return true;

        }
    }
    return false;
}

function temporary(name)
{
    var m = document.getElementById("status");
    m.style.display = "flex";
    m.innerHTML = name + " wins";
    document.getElementById("turn").innerHTML = "";
    document.getElementById("reset").style.display = "flex";
}


function compare(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            return false;
        }
    }
    return true;
}
function restart() {
    reset();
    PLAYERSCORE = 0;
    COMPUTERSCORE = 0;
    var scoreP = document.getElementById("SP");
    var scoreC = document.getElementById("SC");
    scoreC.innerHTML = COMPUTERSCORE;
    scoreP.innerHTML = PLAYERSCORE;
}