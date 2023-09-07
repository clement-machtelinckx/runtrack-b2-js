let array1 = [20, 5, 8, 98, 47, 14]
let array2 = [37, 63, 38, 19, 38]

function mySquareArray(array){
    let arraysub = [];
    let val = 0;
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
        val = (array[i] * 2);
        arraysub.push(val)
        
    }
    array = arraysub
    console.log(array);
}


mySquareArray(array1)

