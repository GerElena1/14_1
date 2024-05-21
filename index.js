let n = Number(23);
let m = Number(1);

const yacMath = require("yac-math");


for (q = m; q <= n; q++) {
    if (yacMath.isPrime(q) == true) {
        console.log(q);
    };
};