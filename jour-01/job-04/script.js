const numb = [20, 34, 2, 59, 16, 57, 140];

function myArraySum(numb){
    let sumNumb = 0;

    
    for (let i = 0; i < numb.length; i++){
        sumNumb = sumNumb + numb[i];
    }
    return sumNumb;

}


const totalNumb = myArraySum(numb);
console.log(totalNumb);