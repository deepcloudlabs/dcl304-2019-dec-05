let numbers = [];
numbers.push(4);
numbers.push(42);
numbers.push(16);
numbers.push(23);
numbers.push(8);
numbers.push(15);
// numbers = [4,42,16,23,8,15]
// Loop #1
for (let i=0;i<numbers.length;++i)
    console.log(numbers[i]);
// Loop #2
for (let i in numbers)
    console.log(numbers[i]);
// Loop #3
for (let num of numbers)
    console.log(num);
// Loop #4
numbers.forEach( function(num){console.log(num)} )
numbers.forEach( (num) => {console.log(num)} )
numbers.forEach( num => console.log(num) )

