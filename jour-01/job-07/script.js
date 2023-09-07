let array1 = [13, 39, -29, 19, 4, -2]

function myNearZero(array){
    let closest = array[0]
    let absClosest = Math.abs(closest)
    for (let i = 0 ; i < array.length ; i++){
        let num = array[i]
        let absNumb = Math.abs(num)
        if (absNumb < absClosest){
            closest = num
        }
        else if (absNumb === absClosest){
            if (num < closest){
                closest = num
            }

        }
    }
    return closest
}

let NZ = myNearZero(array1)

console.log(NZ)