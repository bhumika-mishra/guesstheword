function add_user(){
var player1name=document.getElementById("player1_input").value;
var player2name=document.getElementById("player2_input").value;
localStorage.setItem("player1name",player1name);
localStorage.setItem("player2name",player2name);
window.location="game_page.html";
}