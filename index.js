var map = {
  command: '⌘',
  shift: '⇧',
  capslock: '⇪',
  ctrl: '⌃',
  alt: '⌥',
  left: '←',
  right: '→',
  top: '↑',
  bottom: '↓',
  'return': '↩',
  backspace: '⌫'
};

module.exports = function(key){
  return map[key] || key;
};
