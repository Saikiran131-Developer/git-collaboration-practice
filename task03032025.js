console.log("1) program for to print 1 to 10 numbers")
for(var number=0;number<=10;number++)
{
    console.log("=> "+number)
}
console.log('-------------------------------------')
console.log('2q)program to print sum of all numbers from 1 to 100')
var sumOfNaturalNumbers=0;
for(var num=1;num<=100;num++)
{
    sumOfNaturalNumbers=sumOfNaturalNumbers+num;
}
console.log('=>sum Of Natural Numbers are '+sumOfNaturalNumbers)
console.log('-------------------------------------')
console.log('3q) multiplication table')
for (let num = 1; num <= 10; num++) {
    console.log(`${7} * ${num} = ${7 * num}`);
}
console.log("4q)program for even numbers ")
for(var evenNumber=1;evenNumber<=20;evenNumber++){
    if(evenNumber%2==0){
        console.log(evenNumber+" is an even")
    }
}
console.log("5q)program for factorial calculation")
var factorial=1;
for(var fact=1;fact<=5;fact++){
    factorial=factorial*fact
}
console.log("factorial of 5 is "+factorial)

console.log("6q)program for power of a number")
var pow=1;
for(var num=1;num<=5;num++)
{
    pow=pow*2
}
console.log('2^5 is '+pow)

console.log("7q)program for odd numbers in reverse")
for(var num=20;num>=1;num--)
{
    if(num%2==1)
    {
        console.log(num+" is an odd number")
    }
}