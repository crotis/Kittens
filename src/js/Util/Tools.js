var arrayToString = function(arr)
{
  var str = "";
  var i;

  for (i=0; i<arr.length; i++){
    str += arr[i];
  }
  return str;
}

export default arrayToString;
