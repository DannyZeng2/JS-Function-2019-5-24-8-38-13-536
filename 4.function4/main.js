function countWords(message){ 
  var arr = message.split(/[,." "]/);    // [ 'Good', 'morning', '', 'I', 'love', 'JavaScript', '' ]
  var count = 0;
  for(var i=0;i<arr.length;i++) {
  	if(arr[i]!=""){
  		count++
  	}
  }
  console.log(count);
}

countWords('Good morning, I love JavaScript.'); // should return 5
