function manipulateArray(numbers) { return numbers.map(n => n%2 == 0 ? n*2: n);}

//test
console.log(manipulateArray([1,2,3,4]));
console.log(manipulateArray([5,6,9,10]));
