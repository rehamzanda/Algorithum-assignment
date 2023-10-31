//1. Print 1 - 135
//creat a for loop inside range 1-136
//print the numbers

let i;
for(i=1; i<=136; i=i+1){
  console.log(i);
}

//2. Print Odd Numbers 1 - 135
//creat a for loop inside range 1-136
//scip the even numbers by raising 2 instead of one

for(let i=1; i<=136; i=i+2){
    console.log(i);
  }


//  3. Sum of Printed Numbers
//mew var to put the sum elements
//for loop 
//print the resulte with a string sentence

let sumN=0;
for(i=0; i<=136; i=i+1){
    sumN +=i;
    const result= "Number is:"+ i + 'Sum' + sumN
    console.log(result);
}

//4-. Print the elements of an array
//defined the array
//go throught the element and print them

array1=[1,4,2,12];
array1.forEach(element => {
    console.log(element);
});

//did not work ??
//5-Find max
//creat a function and defined the var max
// give max initial value =0
//for loop in array
//if the first element value > the second in array
//make max value= the first element value
//else max= second element value
//return max value
//call the function
//do that again for the second and third
function Max(X){
let max=0;
for(let i=0 ; i<=X.length; i++){
    if(X[i]>X[i+1]){
         max = X[i];
    }
    else{
         max = X[i+1];
    } 
}
    return max;
}

const x=[2,-3,-1]; 
const maxVa= Max(x);
console.log(maxVa);
    
    

//6-Get Average
// definded the array
// loop inside the array
//sum the values
//print values
//print the average
let sum=0;
const arrAvr =[2,1,3];
for(let i=0 ; i<arrAvr.length; i++){
    sum += arrAvr[i];
    
}
const avr= sum/arrAvr.length;
console.log(avr);

//7-Remove negative numbers from array
//for loop to get inside the elements of array
//if element value <0 ==> element value=0
//print the array now

const removeNeg = [2,-1,4,-3]
for(let i=0 ; i<=arrAvr.length; i++){
if(removeNeg[i]<0){
    removeNeg[i]=0;
}
}
console.log(removeNeg);

//8-Number to String
//for loop to get inside the elements of array
//if element value < 0 ==> elemetn value = "Turing"
//print the array again

const numToStr = [1,-4,0,-1];
for(let i=0 ; i<=arrAvr.length; i++){
    if(numToStr[i]<0){
        numToStr[i]='Turing';
    }
}
console.log(numToStr);

