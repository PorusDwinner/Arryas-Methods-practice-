// Sum of Two Arrays using for loop

/*let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
function Sum(arr){
	accum = 0;
      for(let i=0;i<arr.length;i++){
        accum+=arr[i];
      }
      return accum;
    }
 console.log("Final_Sum: "+(Sum(arr_1) + Sum(arr_2)));    */

 //sum of two arrays using reduce() function
  
/*let arr1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
let arr2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];

let sum1 = arr1.reduce((accum , currval , index)=>{
        return accum + currval ;
})
let sum2 = arr2.reduce((accum , currval , index)=>{
    return accum + currval ;
})
console.log("The Sum of two arrays is ", sum1 + sum2)     */

//1. Write a JavaScript program that accept two integers and display the larger.
/*const n = 1;
const m = 2;
if(n>m){
  console.log("Greter is " + n )
}else {console.log("Greater is " + m)}  */

//3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
/*let a = 0;
let b = -1;
let c = 4;
if(a>b && a>c && b>c){
  console.log("order is "+ a,b,c)
}    
if(a>b && a>c && c>b){
  console.log("order is "+ a,c,b)
} 
if(b>a && b>c && a>c){
  console.log("order is "+ b,a,c)
}   
if(b>a && b>c && c>a){
  console.log("order is "+ b,c,a)
}
if(c>a && c>b && a>b){
  console.log("order is "+ c,a,b)
}                                 
if(c>a && c>b && b>a){
  console.log("order is "+ a,b,c)
}       */

//4. find the largest of five numbers. Display an alert box to show the result.
/*const nm =[-5, -2, -6, 0, -1];
if(nm[0]>nm[1] && nm[0]>nm[2] && nm[0]>nm[3] && nm[0]>nm[4]){
  console.log(nm[o])
}
if(nm[1]>nm[0] && nm[1]>nm[2] && nm[1]>nm[3] && nm[1]>nm[4]){
  console.log(nm[1])
}
if(nm[2]>nm[0] && nm[2]>nm[1] && nm[2]>nm[3] && nm[0]>nm[4]){
  console.log(nm[2])
}
if(nm[3]>nm[1] && nm[3]>nm[2] && nm[3]>nm[0] && nm[3]>nm[4]){
  console.log(nm[3])
}
if(nm[4]>nm[1] && nm[4]>nm[2] && nm[4]>nm[3] && nm[4]>nm[0]){
  console.log(nm[4])
}   */  

//5. For each iteration, it will check if the current number is odd or even
/*let i = 0;
for(i ; i<16 ; i++){
  if(i==0){
    console.log(i + "  is even")
  }
  else if(i%2==0){
    console.log(i + "  is even")
  }
  else {console.log(i + "  is odd")}

  }     */

  //6. Write a JavaScript program which compute, the average marks of the 
  //students Then, this average is used to determine the corresponding grade.
/*const student = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
acc =0;
for(var itr=0 ; itr< student.length ; itr++){
  acc += student[itr][1];
  var average = acc/student.length;
}
console.log(average);
if(average<60){console.log("Gradde : F")}
else if(average<70){console.log("Gradde : D")}
else if(average<80){console.log("Gradde : C")}
else if(average<90){console.log("Gradde : B")}
else if(average<100){console.log("Gradde : A")}*/

//7. Write a JavaScript program which iterates the integers from 1 to 100. 
//But for multiples of 3, print "Fizz" instead of the number and for the multiples of 5, print "Buzz". 
//For numbers which are multiples of both three and five print "FizzBuzz"

/*for (var i=1; i<101 ; i++){
  if (i%3==0 && i%15!=0){
    console.log(i + " Fizz")
  } 
  else if(i%5==0 && i%15!=0){
    console.log(i + " Buzz")
  }
  else if(i%15==0){console.log(i + " FizzBuzz")}
}*/

//8.Finding armstrong no.

/*function checkArmstrong(){
  for(i=0 ; i<10 ; i++){
    for(j=1 ; j<10 ; j++){
      for(k=0 ; k<10 ; k++){
        var cube=(Math.pow(i,3)) + (Math.pow(j,3)) + (Math.pow(k,3) );
        var sum = (i*100) + (j*10) + k;
        if(cube == sum){
          console.log("the armstrong no. is " + sum);
        }
      }
    }
  }
}
checkArmstrong();     */

/*9. Write a JavaScript program to construct the following pattern, using a nested for loop. 
*  
* *  
* * *  
* * * *  
* * * * *                                     

var i,j,star;
function pattern(){
  for(i =1 ; i <=6 ; i++){
    for(j =1 ; j<i ; j++){
      star= star + ("*");
  }
  console.log(star);
  star =' ';
}
}
pattern();                      */

//10.Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers. 
/*var a = 24,b = 36, gcd;
while(a!=b){
  if(a>b){
    a = a -b;           //a=a-b means 24 = 24-36 because we have intialized it already
  }else{
    b = b - a;
  }
  gcd = a;
}
console.log(a)  */

/*//11. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
var mlt3, mlt5,storeMlt=0,i=1;
for(i ; i<1000 ; i++){
  storeMlt = storeMlt + (3 * i) + (5 * i);

}
console.log(storeMlt)
console.log("The output above is wrong and below is correct")
  


var sum=0;
for(x=1 ; x<1000 ; x++){
  if(x%3===0 || x%5==0){
    sum+=x;
  }
}
console.log(sum)                      */

