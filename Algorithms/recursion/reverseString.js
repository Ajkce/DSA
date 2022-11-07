function reverseString(string) {
    debugger;
    console.log(string)
  if ((string == "")) {
    return "";
  }
  return reverseString(string.substring(1)) + string.charAt(0);
}

console.log(reverseString("Hello"));
