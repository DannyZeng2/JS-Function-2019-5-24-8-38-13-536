function reverseString(message){
  var str = "";
  for(var i = message.length-1;i>=0;i--) {
  	str+=message[i];
  }
  return str;
}

function palindrome(message){
  if(message == reverseString(message)) {
  	return true;
  }
  else{
  	return false;
  }
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true
