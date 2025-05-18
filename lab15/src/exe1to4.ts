function describePerson(person: { name: string; age: number; isStudent: boolean }): string {
    return `Name: ${person.name}, Age: ${person.age} years old, Student: ${person.isStudent ? "Yes" : "No"}`;
}

function secondLargest(numbers: number[]): number | undefined {
    let max = -Infinity;
    let secondMax = -Infinity;

    for (const num of numbers) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num !== max) {
            secondMax = num;
        }
    }

    return secondMax === -Infinity ? undefined : secondMax;
}

function sumAll(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}

function concatenate2NumberArrays(arr1: number[], arr2: number[]): number[] {
    return [...arr1, ...arr2];
}