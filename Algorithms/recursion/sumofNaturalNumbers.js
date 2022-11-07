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

console.log(sumofNaturalNumbers('2'))