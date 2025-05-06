class Meditation {
    constructor(timeTaken) {
        this.timeTaken = timeTaken;
    }

    start() {
        let count = this.timeTaken;
        const itvId = setInterval(
            () => {
                if (count > 0) console.log(count--);
                else {
                    console.log('Jay Guru Dev');
                    clearInterval(itvId);
                }
            }
            , 1000
        );
    }
}
const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log(`Start meditation`);
// Start meditation
// 5
// 4
// 3
// 2
// 1
// Jay Guru Dev
