function login() {
    player_1name=document.getElementById("text_input1").value;
    player_2name=document.getElementById("text_input2").value;
    localStorage.setItem("player1_name", player_1name);
    localStorage.setItem("player2_name", player_2name);

    window.location="game_page.html";
}