let array = [17, 25, 21, 10, 59, 2]


function myArraySort(array, sorting){
    if (sorting == "DESC"){
        let arraysub = []
        for (let i = 0 ; i < array.length ; i++){
            let first = array[i]
            let compare = array[i+1]
            if (first < compare){
                arraysub.push(compare)
                arraysub.push(first)
            }
        }
        console.log(arraysub)
    }
}

myArraySort(array, "DESC")
console.log(array)