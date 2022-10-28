// Google Question
//Given an array return the first repeated character
//Given an array = [2, 5, 1, 3, 2, 6, 7, 1, 3]
//It should retutn 2

//Given an arrray = [2, 1, 1, 2, 3, 4, 1, 2]
//it should return 1

//Given an array = [2, 3, 4, 5]
//It should return undefined

function recurringChar(input){
    //assume the input validation is done
    for(let i = 0; i < input.length; i++){
        for(let j = i + 1; i < input.length; j++){
            console.log(input[i])
            console.log(input[j])
        if(input[i] === input[j]){
            return input[i]
        }
        }
    }
    return undefined
} 

recurringChar([3, 5, 5, 3, 2, 6, 7, 1, 3])  // This gives the time complexity of 0(n^2)


function recurringChar2 (input){
    let map = {}

    for(let i = 0; i< input.length; i++){
      
        if(map[input[i]] !== undefined){
            return input[i]
        }else{
            map[input[i]] = i
        }
    }
   console.log(map)
return undefined
}

recurringChar([3, 5, 5, 3, 2, 6, 7, 1, 3])  //this has the time complexity of 0(n)
//but this has the space complexity of 0(n)