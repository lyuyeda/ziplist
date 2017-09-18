function zipList(list1, list2) {
  let ret = [];
  while(list1.length > 0 || list2.length > 0) {
    if(list1.length > 0) {
      ret.push(list1.pop);
    }
    if(list2.length > 0) {
      ret.push(list2.pop);
    }
  }
  return ret;
}
function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipList(['a','b', 'c'], [1, 2, 3]));
console.log(zipListTheSimpleWay(['a','b', 'c'], [1, 2, 3]));