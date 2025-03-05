//1Q)print five numbers using array
arrnum=[1,2,3,4,5]
console.log(arrnum)

//2Q)access an element
arrnumm=[1,2,3,4,5]
console.log(arrnumm[2])

//3q)change an element
arrnu=[1,2,3,4,5]
console.log('before modification value '+arrnu[1])
arrnu[1]=7
console.log('after modification value '+arrnu[1])
console.log(arrnu)

//4q)Find Length
function len(lengt){
    console.log('array of length is '+lengt.length)
}
len(arr=[1,2,3,4,5])

//5q)add an element
newelement=[1,2,3]
newelement.push(6)
console.log(newelement)

//6q)pop an element
newelement=[1,2,3]
newelement.pop(3)
console.log(newelement)

//7Q)loop through an array
arr=['kiran','kiitu','saikiran']
for(i=0;i<=arr.length-1;i++)
{
    console.log(arr[i])
}

//8q if element exists
arr=['kiran','kiitu','saikiran']
 console.log(arr.includes('kiran'))
 
                //or
 
 var exi=3
 function exist(elemen){
   for(var i=0;i<elemen.length;i++){
       if(elemen[i]==exi){
           console.log('the element is exist '+elemen[i])
       }
   }
 
 }
 arr=[1,2,3]
 exist(arr)
 
 
 
 //9Q)copy of array
 originalarray=[1,2,3,4]
 copyarray=originalarray
 console.log(copyarray)
 
 //10Q)array to string
let arraya = ['Hello', 'I am ', 'kiran', 'kittu'];
let result = arraya.join(' ');
console.log(result);






