//Create a function that can reverse a string

function reverse(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Hmm that is not good!";
  }
  const backArray = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backArray.push(str[i]);
  }
 
  return backArray.join(''); 
}

function reverse2(str){
    return str.split('')
}

console.log(reverse2("Ajaya"))

console.log(reverse("Ajaya"));
