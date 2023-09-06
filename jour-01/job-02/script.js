

function myCountChar(lettre, phrase){
    let count = 0
    for (let i = 0; i < phrase.length; i++){
        if(lettre === phrase[i]){
            count ++;
        }
    }
    return count;
}


const lettre = "o"
const phrase = "Bonjour"
const count = myCountChar(lettre, phrase);

console.log(`Le caractère "${lettre}" est présent "${count}" fois dans : "${phrase}".`);

