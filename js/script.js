 let valeurTravail=document.getElementById("valeurtravail");
 let valeurPause=document.getElementById("valeurpause");
 let tempsTravail=valeurTravail.value;
 let tempsPause = valeurPause.value;
 let secondes= "00";
 let boutonStart = document.getElementById("start");
 let boutonReset = document.getElementById("reset");
 let boutonTravail=document.getElementById("travail");
 let boutonPause=document.getElementById("pause");



 valeurTravail.addEventListener('click',()=>{
    location.reload();
 })



 valeurPause.addEventListener('click',()=>{
    location.reload();
 })


 boutonStart.addEventListener('click',()=>{
    demarage();
 });

 boutonReset.addEventListener('click',()=>{
    location.reload();
 })


 //fonction ajoute les zéro devant 

 function affichagePropre(temps){
    let tempsString=temps.toString();
    tempsString = tempsString.length < 2 ? '0' + tempsString : tempsString;
    return tempsString;
 }
 //affichage

 window.onload= ()=>{
    document.getElementById("minutes").textContent= affichagePropre(tempsTravail);
    document.getElementById("secondes").textContent=affichagePropre(secondes);
    boutonTravail.classList.add('active');
 }

 //fonction start 

 function demarage(){
    boutonStart.style.display="none";
    boutonReset.style.display="block";

    secondes=59;

    let tempsMinutes=tempsTravail-1;
    let pauseMinutes=tempsPause-1;

    comptepause=0;

    let timerFunction=()=>{
        document.getElementById("minutes").textContent=affichagePropre(tempsMinutes);
        document.getElementById("secondes").textContent=affichagePropre(secondes);

        secondes=secondes-1;

        if(secondes==0){
            tempsMinutes= tempsMinutes-1;
            if(tempsMinutes==-1){
                if(comptepause%2==0){
                    tempsMinutes=pauseMinutes;
                    comptepause=comptepause+1;
                    boutonTravail.classList.remove('active');
                    boutonPause.classList.add('active');
                    document.body.style.backgroundColor= "rgb(50,205,50)";
                }
                else{
                    tempsMinutes=tempsTravail-1;
                    comptepause=comptepause+1;
                    boutonTravail.classList.add('active');
                    boutonPause.classList.remove('active');
                    document.body.style.backgroundColor= "#DC143C";
                }
            }
            secondes=59;
        }
    }

    //Répétition de la fonction pour le décompte
    setInterval(timerFunction, 100);

 }



 

