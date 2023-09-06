function myUpperCase(phrase) {
    let phraseMAJ = '';

    // Tableau de correspondance de minuscules à majuscules
    const minuscules = 'abcdefghijklmnopqrstuvwxyz';
    const majuscules = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < phrase.length; i++) {
        let char = phrase[i];
        let isMinuscule = false;

        // Vérifiez si le caractère est une lettre minuscule
        for (let j = 0; j < minuscules.length; j++) {
            if (char === minuscules[j]) {
                isMinuscule = true;
                break;
            }
        }

        // Si c'est une lettre minuscule, ajoutez la version en majuscules
        if (isMinuscule) {
            for (let j = 0; j < minuscules.length; j++) {
                if (char === minuscules[j]) {
                    phraseMAJ += majuscules[j];
                    break;
                }
            }
        } else {
            // Sinon, ajoutez le caractère tel quel
            phraseMAJ += char;
        }
    }

    console.log(phraseMAJ);
}

myUpperCase("loLOLOLOL c'est un phrase ");
