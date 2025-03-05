console.log('Jsuis là');

const matchesMin = 1
const matchesMax = 6


const removeMatches = (nbrOfMatchesToRemove) => {
    if(nbrOfMatchesToRemove > 0) {
        askUser()
    } else {
        return 'Le jeu est terminé'
    }
}


const askUser = () => {
    let maxMatches = 50   
     // Tant qu'il reste des allumettes dans le tas
    while (maxMatches > 0) {
        // je demande à l'utilisateur combien d'allumettes il souhaite retirer
        let askForRemove = parseInt(prompt(`Il reste ${maxMatches} allumettes. Combien d'allumettes voulez-vous retirer ? (Min : 1 / Max : 6)`));

         // je vérifie que l'utilisateur a entré un nombre valide [e] 1 et 6
         if(askForRemove < matchesMin){
            return `Nombre minimum : ${matchesMin}`
         } else if (askForRemove > matchesMax){
            return `Nombre maximum : ${matchesMin}`
         }
    }
}



