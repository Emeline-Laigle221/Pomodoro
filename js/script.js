 // Récupération des éléments HTML par leurs IDs
 
 let valeurTravail=document.getElementById("valeurtravail");
 let valeurPause=document.getElementById("valeurpause");
 let secondes= "00";
 let boutonStart = document.getElementById("start");
 let boutonReset = document.getElementById("reset");
 let boutonTravail=document.getElementById("travail");
 let boutonPause=document.getElementById("pause");
 let envoyer=document.getElementById("envoyer");


if(localStorage.getItem("valeurTravail")=="" || localStorage.getItem("valeurTravail")==null ){
   localStorage.setItem("valeurTravail", 25);
}
if(localStorage.getItem("valeurPause")==""|| localStorage.getItem("valeurPause")==null){
   localStorage.setItem("valeurPause", 5);
}

valeurTravail.value=localStorage.getItem("valeurTravail");
valeurPause.value=localStorage.getItem("valeurPause");


// Rechargement de la page lorsque les champs de saisie sont cliqués


 envoyer.addEventListener('click',()=>{
   localStorage.setItem("valeurTravail",parseInt(valeurTravail.value));
   localStorage.setItem("valeurPause",parseInt(valeurPause.value));
   valeurTravail.value=localStorage.getItem("valeurTravail");
   valeurPause.value=localStorage.getItem("valeurPause");
   location.reload;
 })


 // Gestion du clic sur le bouton "Start"

 boutonStart.addEventListener('click',()=>{
    demarage();
 });

 // Gestion du clic sur le bouton "Reset" (rechargement de la page)

 boutonReset.addEventListener('click',()=>{
    location.reload();
 })


 // Fonction qui ajoute un zéro devant les nombres < 10

 function affichagePropre(temps){
    let tempsString=temps.toString();
    tempsString = tempsString.length < 2 ? '0' + tempsString : tempsString;
    return tempsString;
 }
// Action lors du chargement de la page

 window.onload= ()=>{
    document.getElementById("minutes").textContent= affichagePropre(localStorage.getItem("valeurTravail"));
    document.getElementById("secondes").textContent=affichagePropre(secondes);
    boutonTravail.classList.add('active');
 }

// Fonction de démarrage du minuteur

 function demarage(){
    boutonStart.style.display="none"; // Masque le bouton "Start"
    boutonReset.style.display="block";// Affiche le bouton "Reset"

    secondes=59; // Initialisation des secondes à 59

    let tempsMinutes=localStorage.getItem("valeurTravail")-1;
    let pauseMinutes=localStorage.getItem("valeurPause")-1;

    comptepause=0; 

    let timerFunction=()=>{
        document.getElementById("minutes").textContent=affichagePropre(tempsMinutes);
        document.getElementById("secondes").textContent=affichagePropre(secondes);

        secondes=secondes-1;

        if(secondes==-1){
            tempsMinutes= tempsMinutes-1;
            if(tempsMinutes==-1){
                if(comptepause%2==0){
                    tempsMinutes=localStorage.getItem("valeurPause")-1;
                    comptepause=comptepause+1;
                    boutonTravail.classList.remove('active'); // Désactive le bouton "Travail"
                    boutonPause.classList.add('active'); // Active le bouton "Pause"
                    document.body.style.backgroundColor= "rgb(50,205,50)"; // Change la couleur de fond
                }
                else{
                    tempsMinutes=localStorage.getItem("valeurTravail")-1;
                    comptepause=comptepause+1;
                    boutonTravail.classList.add('active'); // Active le bouton "Travail"
                    boutonPause.classList.remove('active'); // Désactive le bouton "Pause"
                    document.body.style.backgroundColor= "#DC143C"; // Change la couleur de fond
                }
            }
            secondes=59;
        }
    }

    // Répétition de la fonction pour le décompte toutes les 1000 ms (1 seconde)
    setInterval(timerFunction, 10);

 }



 

