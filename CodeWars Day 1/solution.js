function abbrevName(name) {
  var initials = name.split(' ');
  return (initials[0].charAt(0)+'.'+initials[1].charAt(0)).toUpperCase();
}