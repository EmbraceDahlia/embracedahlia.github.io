const isPrime = (n) => {
    return new Promise((resolve, reject) => {
        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if (n % i === 0) return reject({ prime: false });
        }
        return n > 1 ? resolve({ prime: true }) : reject({ prime: false });
    });
};

// console.log('start');
// isPrime(7)
//     .then(console.log)
//     .catch(console.error);
// console.log('end');

// console.log('start');

console.log('start');
async function testPrime() {
    const result = await isPrime(7);
    console.log(result);
}
testPrime();
console.log('end');