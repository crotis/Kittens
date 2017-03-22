var arrayToString = function(arr)
{
  var str;
  var i;

  for (i=0; i<arr.length; i++){
    str += arr[i];
  }
  // str.replace("undefined", "");
  return str;
}

export default arrayToString;
