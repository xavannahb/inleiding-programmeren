document.getElementById('werpdobbelstenen').addEventListener('click', werpDobbelstenen);

// functie bestuurt knop 
function werpDobbelstenen() {

    // Getal tussen van 1 t/m 6 gegenereerd en opgeslagen als dobbelSteen. 
    let dobbelSteen1 = Math.ceil(Math.random() * 6);
    let dobbelSteen2 = Math.ceil(Math.random() * 6);
        
    // Kijken eerst op console om te checken of het werk
    console.log('Eerste dobbelsteen: ' + dobbelSteen1);
    console.log('Tweede dobbelsteen: ' + dobbelSteen2);

    // De Array haalt plaatjes op 
    let plaatjesArray = ['one.png','two.png','three.png','four.png','five.png','six.png'];

    // dobbelstenen worden aan de plaatjes gekoppeld
    let dobbelsteenAfbeelding1 = plaatjesArray[dobbelSteen1 - 1];
    let dobbelsteenAfbeelding2 = plaatjesArray[dobbelSteen2 - 1];

    // Haalt de afbeeldingen op
    document.querySelectorAll("img")[0].src = 'images/' + dobbelsteenAfbeelding1;
    document.querySelectorAll("img")[1].src = 'images/' + dobbelsteenAfbeelding2;
 
    if (dobbelSteen1 == 1 && dobbelSteen2 ==2 || dobbelSteen1 == 2 && dobbelSteen2 == 1){
        console.log("mex")
        document.querySelector('h1').textContent = "Gefeliciteerd! Je hebt mex gegooid :)" //Als er mex is gegooid
    }
    else if (dobbelSteen1 > dobbelSteen2) { //Als de 1e groter is dan de 2e
        console.log(dobbelSteen1 + " " + dobbelSteen2) //De spatie om te zorgen dat ze niet bij elkaar optellen maar naast elkaar komen (Erik)
        document.querySelector('h1').textContent = "Je hebt " + dobbelSteen1 + dobbelSteen2 + " gegooid."
    }
    else if (dobbelSteen1 < dobbelSteen2){ //Als de 2e groter is dan de 1e wil je ze omdraaien
        console.log(dobbelSteen2 + " " + dobbelSteen1)
        document.querySelector('h1').textContent = "Je hebt " + dobbelSteen2 + dobbelSteen1 + " gegooid."
    }
    else if (dobbelSteen1 == dobbelSteen2) { //Als je gelijk gooit is de score *100 dus 1 van de 2 dobbelstenen *100
        console.log(dobbelSteen1 * 100)
        document.querySelector('h1').textContent = "Je hebt dubbel gegooid!"
    }

}

// Aanroepen van de functie
werpDobbelstenen();
