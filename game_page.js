player1_name=localStorage.getItem("player1name");
player2_name=localStorage.getItem("player2name");
player1score=0;
player2score=0;
document.getElementById("player1name").innerHTML=player1_name+":";
document.getElementById("player2name").innerHTML=player2_name+":";
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("player_question").innerHTML="question turn-"+player1_name+":";
document.getElementById("player_answer").innerHTML="answer turn-"+player2_name+":";


function send(){
    getword=document.getElementById("word").ariaValueMax;
    word=getword.toLowerCase();
    console.log("word in lower case"+word);

    charAt1=word.charAt1(1);
    console.log(charAt1);

    lengthTo=Math.floor(word.length/2);
    charAt2=word.charAt(lengthTo);
    console.log(charAt2);

    lengthmminus=word.length-1;
    charAt3=word.charAt3(lengthmminus);
    console.log(charAt3);

    removecharAt1=word.replace(charAt1,"_");
    removecharAt2=removecharAt1.replace(charAt2,"_");
    removecharAt3=removecharAt2.replace(charAt3,"_");
    console.log(charAt3);

    questionword="<h4 id='word_display'> Q."+removecharAt3+"</h4>";
    inputbox="<br>answer:<input type='text' id='inputcheckbox'>";
    checkbutton="<br><br><button class='btn btn-primary' onclick='check()'>check</button>";
    row=questionword+inputbox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

questionturn="player1";
answerturn="player2";

function check()
{
    getanswer=document.getElementById("inputcheckbox").value;
    answer=getanswer.toLowerCase();
    console.log("answer in lower case"+ answer);
    if(answer==word)
    {
        if(answerturn=="player1")
        {
            player1score=player1score+1;
            document.getElementById("player1score").innerHTML=player1score;
        }
        else
        {
            player2score=player2score+1;
            document.getElementById("player2score").innerHTML=player2score;
        }
    }
    if(questionturn=="player1")
    {
        questionturn="player2";
        document.getElementById("player_question").innerHTML="qustionturn-"+player2_name;
    
    }
    else
    {
        questionturn="player1";
        document.getElementById("player_question").innerHTML="qustionturn-"+player1_name;
    }


    if(answerturn=="player1")
    {
        answerturn="player2";
        document.getElementById("player_answer").innerHTML="answerturn-"+player2_name;
    
    }
    else
    {
        answerturn="player1";
        document.getElementById("player_answer").innerHTML="answerturn-"+player1_name;
    }
    document.getElementById("output").innerHTML="";
}
