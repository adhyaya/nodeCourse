var rect = require('./rectangle')

function solveRect(l, b) {
  console.log("solving for l=", l, "b=", b);

  if (l <= 0 || b <= 0) {
    console.log("rectangle dimensions should be greater than 0 ");
  } else {
    console.log("perimeter:", rect.perimeter(l, b));
    console.log("area", rect.area(l, b));
  }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-9, 8);