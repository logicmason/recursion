var parseJSON = function(input) {
  result = {};
  return result;
}

var identifyMain = function(stuff){
  type = Object.prototype.toString.call(stuff);
  switch(type) {
    case ['object Object']:
    break;

    case ['object Array']:
    break;

    case ['object String']:
    break;

    case['object Number']:
    break;

    case['object Boolean']:
    break;

    case['object Null']:
    break;

    default:
    break;
  }
}