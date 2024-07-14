//----------- "use strict";-----------------
//------------ "use strict"; // => it doesn't mean that now its strict type langues---------------
x = 3.14;
console.log(x);

function abc() {
  "use strict";
  y = 678;
  console.log(y);
}
try {
  abc();
} catch (e) {
  console.log(e.message);
}
z = 67;
console.log(z);
