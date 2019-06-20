function alphabetSort(message){
  var arr = message.split('');
  arr.sort();
  console.log(arr.join(""));
}
alphabetSort('hello'); // should return 'ehllo'
