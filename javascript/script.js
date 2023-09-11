const choix=["pierre", "feuille", "ciseaux"];

function play(playerChoice){
    document.getElementById("joueur").textContent = "Joueur :"+ choix[playerChoice];
    
    var computerChoice = Math.floor(Math.random()*choix.length);
    document.getElementById("ordi").textContent = "Ordinateur :"+ choix[computerChoice];
    if (playerChoice == computerChoice){
        document.getElementById("resultat").textContent = "Egalité";
    }
    else if (playerChoice == 0 && computerChoice == 2 || playerChoice == 1 && computerChoice == 0 || playerChoice == 2 && computerChoice == 1){
        document.getElementById("resultat").textContent = "Gagné";
    }
    else{
        document.getElementById("resultat").textContent = "Perdu";
    }
    
}
document.getElementById("pierre").onclick = function(){ play(0)};

document.getElementById("feuille").onclick = function(){ play(1)};

document.getElementById("ciseaux").onclick = function(){ play(2)};

// Path: index.html
