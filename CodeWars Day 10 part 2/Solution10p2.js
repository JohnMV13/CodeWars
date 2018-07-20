function filter_list(l) {
  return l.filter(function(item) {
  return typeof(item) === 'number';
  });
}