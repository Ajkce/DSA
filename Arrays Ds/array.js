const strings = ["a", "s", "d", "f"];
// 16 bytes of storage

//push
strings.push("g"); //0(1);

//pop
strings.pop();
strings.pop(); //(1)

strings.unshift('z') //0(n)
//The time complexity of this function is 0(n) because it had to reassign the index position of all the elements to add a new element on the front

strings.splice(2, 0, 'middle') //0(n - 2) == 0(n)





console.log(strings);
