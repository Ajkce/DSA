//Task: Given the input string check weather the string is same going from backwards as well as forwards

function pallendrome(string){
    if(string.length <= 1){
        return true
    }
    if(string.charAt(0) == string.charAt(string.length - 1)){
        return pallendrome(string.substring(1, string.length - 1))
    }


    return false


}

console.log(pallendrome('racfgfcar'))