const ftoc = function(suhu) {
  convSuhu = (5/9) * (suhu - 32);
  return Math.round(convSuhu * 10) / 10
};

const ctof = function(suhu) {
  convSuhu = (9/5)*suhu + 32;
  return Math.round(convSuhu * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
