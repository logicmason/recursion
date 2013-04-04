var getElementsByClassName = function(className, node, results){
  node = node || document.body;
  results = results || [];

  _.contains(node.classList, className) && results.push(node);
  _.each(node.childNodes, function(item){
    getElementsByClassName(className, item, results);
  });
  return results;
}
