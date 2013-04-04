var stringifyJSON = function(obj){
  var results = "";
  type = Object.prototype.toString.call(obj);

  switch(type) {
    case '[object Array]':
      var objs = _.reduce(obj, stringifyElement, []);
      results += '[' + objs.join(',') + ']';
      break;

    case '[object Object]':
      var objs = [];
      for (key in obj) { stringifyObject(key, obj, objs); }
      results += '{' + objs.join(',') + '}';
      break;

    default: results += stringifySingle(obj);
  }
  return results;
}

var stringifySingle = function(basic){
  if(typeof basic === 'string'){
    basic = '"' + basic.replace(/(\\|\")/g, "\\$&") + '"';
  }
  return basic;
};

var stringifyElement = function (a, b){
  a.push(stringifyJSON(b));
  return a;
};

var stringifyObject = function (key, obj, objs){
  if ((obj[key] !== undefined) && (typeof obj[key] !== 'function')) {
    objs.push(stringifySingle(key)+':'+stringifyJSON(obj[key]));
  }
}