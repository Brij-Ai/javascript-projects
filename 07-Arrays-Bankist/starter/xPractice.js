// AT method
// let arr = [22,43,12,54,23,11]
// console.log(arr[0])
// console.log(arr.at(0))

/////////////////
// console.log(arr[arr.length - 1])
// console.log(arr.at(-1))


// For each loop in array
let positives = [-1,-3,-65,34,23,32,-3]


for(const positive of posotives){
    if (positive >= 0){
        console.log(`Positive : ${positive}`)
    }else{
        console.log(`Negative : ${positive}`)
    }
}

