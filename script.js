
const matchesMin = 1
const matchesMax = 6

const removeMatches = (nbrOfMatches) => {

}


const askUser = () => {
    let maxMatches = 50   
     // Tant qu'il reste des allumettes dans le tas
    while (maxMatches > 0) {
        // Demande à l'utilisateur combien d'allumettes il souhaite retirer
        let askForRemove = parseInt(prompt(`Il reste ${maxMatches} allumettes. Combien d'allumettes voulez-vous retirer ? Min : 1 / Max : 6`));

         // Vérifie que l'utilisateur a entré un nombre valide
         if(askForRemove < 1){
            return `Nombre minimum ${matchesMin}`
         } else if (askForRemove > 6){
            return `Nombre maximum ${matchesMin}`
         }
    }
    console.log(index);
}


