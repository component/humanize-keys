
var map = {
  command: '⌘',
  shift: '⇧',
  ctrl: '⌃',
  alt: '⌥',
  left: '←',
  right: '→'
};

module.exports = function(key){
  return map[key] || key;
};