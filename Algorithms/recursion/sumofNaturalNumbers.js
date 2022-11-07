function sumofNaturalNumbers(number){
    console.log(typeof(number))
    if(!number){
        return
    }
    if(typeof(number) != 'number'){
        return number

    }
    if(number <= 1){
        return number
    }
    return number + sumofNaturalNumbers(number - 1)
}

function sumLoop(num){
    let sum = 0
    for(let i = 1; i <= num; i++){
        sum = sum + i
    }
    return sum
}
console.log(sumLoop(10))
console.log(sumofNaturalNumbers('2'))