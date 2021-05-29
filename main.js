var first="Ahana";
var second="Mukherjee";
var full= first.concat(second);
console.log(full);
document.getElementById("ex1").innerHTML=full;

var fruit=["Mango","Strawberry","Orange"];
fruit.reverse();
fruit.push("Apple");
console.log(fruit);
document.getElementById("ex2").innerHTML=fruit;

var first=fruit[0];
console.log(first);
document.getElementById("ex3").innerHTML=first;

var numbers=["1","7","3","5","9"];
var maximum= Math.max.apply(Math,numbers);
numbers.pop();
console.log(maximum);
document.getElementById("ex4").innerHTML=maximum;
console.log(numbers);
document.getElementById("ex5").innerHTML=numbers;


