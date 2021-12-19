
operateur.onclick = calculer();
function calculer() {
    let nbr1 = document.getElementById("nbr1").value;
    let nbr2 = document.getElementById("nbr2").value;
    let operateur = document.getElementById("operateur").value;
    let display = document.getElementById('display');
   
    if (operateur == "+") {
        console.log("le résultat est", parseInt(nbr1) + parseInt(nbr2));
        let resultat =  parseInt(nbr1) + parseInt(nbr2);
        let result = document.createElement('h1');
        result.textContent = `Le résultat est, ${resultat}`;
        display.appendChild(result);

    }
    else if (operateur == "-") {
        console.log("le résultat est", parseInt(nbr1) - parseInt(nbr2));
        let resultat1 =  parseInt(nbr1) - parseInt(nbr2);
        let result1 = document.createElement('h1');
        result1.textContent = `Le résultat est, ${resultat1}`;
        display.appendChild(result1);
    }
    else if (operateur == "/") {
        console.log("le résultat est", parseInt(nbr1) / parseInt(nbr2));
        let resultat2 =  parseInt(nbr1) / parseInt(nbr2);
        let result2 = document.createElement('h1');
        result2.textContent = `Le résultat est, ${resultat2}`;
        display.appendChild(result2);
    }
    else if (operateur == "*") {
        console.log("le résultat est", parseInt(nbr1) * parseInt(nbr2));
        let resultat3 =  parseInt(nbr1) * parseInt(nbr2);
        let result3 = document.createElement('h1');
        result3.textContent = `Le résultat est, ${resultat3}`;
        display.appendChild(result3);
    }
    else if (operateur == "**") {
        console.log("le résultat est", parseInt(nbr1) ** parseInt(nbr2));
        let resultat4 =  parseInt(nbr1) ** parseInt(nbr2);
        let result4 = document.createElement('h1');
        result4.textContent = `Le résultat est, ${resultat4}`;
        display.appendChild(result4);
    }
    else {
        console.log("Veuillez saisir un opérateur mathématique de base (+, -, *, /, **) 'contenu de la variable operateur' n'est pas un opérateur valide.");
       // let error = document.createElement('h1');
       //error.textContent = `Veuillez saisir un opérateur mathématique de base (+, -, *, /, **) 'contenu de la variable operateur' n'est pas un opérateur valide.`;
       //display.appendChild(error);
    };
}

