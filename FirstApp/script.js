




// recherche du champ de saisie pour s'abonner à l'évènment onchange
var inputNumber = document.getElementById('userInput');
// Définition d'une valeur aléatoire
var randomNumber = getRandom(1,100);
var nbTry = 1;

// Abonnement à l'évènement onchange du formulaire
inputNumber.addEventListener('change',function(ev){
    //console.log(ev.target.value);
    check(ev.target.value);
});

/**
 * Retourne un nombre aléatoire compris entre 2 valeurs
 * @param   {number} min Valeur minimale
 * @param   {[[Type]]} max Valeur maximale
 * @returns {[[Type]]} Un nombre aléatoire
 */
function getRandom(min, max){
    return Math.floor(Math.random() * max) + min;
}

/**
 * Démarre le jeu Akinumberator
 * @param {number} userInput valeur saisie par l'utilisateur
 */
function check(userInput)
{
    //var userInput = -1;
    
    var ulElement = document.getElementById("result");
    
    //do {
        //userInput = parseInt(prompt("Veuillez saisir votre valeur, réponse = " + randomNumber));
        
        var resultItem = document.createElement("li");
        
        if(userInput > randomNumber){
            resultItem.innerHTML = "la valeur cherchée " + randomNumber + " est inférieur à " + userInput;
        }
        else if(userInput < randomNumber)
        {
            resultItem.innerHTML = "la valeur cherchée" + randomNumber + " est supérieur à " + userInput;
        }
        else
        {
            resultItem.innerHTML = 'Bravo, tu as trouvé en ' + nbTry + ' essai' + (nbTry > 1 ? 's' : '');
        }
        
        nbTry+= 1;
        ulElement.appendChild(resultItem);
        
    //}while(randomNumber !== userInput);
    
    
    
}













