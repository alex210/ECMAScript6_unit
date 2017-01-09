var pow = function(a, b) {
    var c = a;
    if(a == 0 && b == 0) c = 1;
    if(a == 0 && b < 0) {
      console.log('ERROR');
      return 'ERROR';
    }
    if(b == 0) {
      c = 1;
    } else {
      if(b > 0) {
      for(var i = 1; i < b; i++) {
        c = c * a;
      }
    } else {
      for(var i = 1; i < -b; i++) {
        c = c * a;
    }
    c = 1 / c;
  }
  }
  console.log(c);
  return c;
}

module.exports.pow = pow;
