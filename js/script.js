
 let tempsTravail = 40 ;
 let tempsPause = 5 ;
 let secondes= "00";
 let boutonStart = document.getElementById("start");
 let boutonReset = document.getElementById("reset");
 let boutonTravail=document.getElementById("travail");
 let boutonPause=document.getElementById("pause");

 boutonStart.addEventListener('click',()=>{
    demarage();
 });

 //affichage

 window.onload= ()=>{
    document.getElementById("minutes").textContent=tempsTravail;
    document.getElementById("secondes").textContent=secondes;
    boutonTravail.classList.add('active');
 }

 //fonction start 

 function demarage(){
    secondes=59;

    let tempsMinutes=tempsTravail-1;
    let pauseMinutes=tempsPause-1;

    comptepause=0;

    let timerFunction=()=>{
        document.getElementById("minutes").textContent=tempsMinutes;
        document.getElementById("secondes").textContent=secondes;

        secondes=secondes-1;

        if(secondes==0){
            tempsMinutes= tempsMinutes-1;
            if(tempsMinutes==-1){
                if(comptepause%2==0){
                    tempsMinutes=pauseMinutes;
                    comptepause=comptepause+1;
                    boutonTravail.classList.remove('active');
                    boutonPause.classList.add('active');
                }
                else{
                    tempsMinutes=tempsTravail;
                    comptepause=comptepause+1;
                }
            }
            secondes=59;
        }
    }

    //Répétition de la fonction pour le décompte
    setInterval(timerFunction, 1000);

 }



 

