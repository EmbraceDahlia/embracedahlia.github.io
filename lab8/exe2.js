const isPrime = (n) => {
    return new Promise((resolve, reject) => {
        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if (n % i === 0) reject({ prime: false });
        }
        if (n <= 1)
            reject({ prime: false });
        else
            resolve({ prime: true });
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
    try {
        const result = await isPrime(11);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
testPrime();
console.log('end');