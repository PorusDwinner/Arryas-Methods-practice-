//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//concatinations of two arrays
/*const a1 = ["Amit"];
const a2 = " Saini";
console.log(a1.concat(a2));

//concatination of more than two arrays
const a3 = " Suryavashi";
console.log(a1.concat(a2, a3));

//indexOf() function to find the index of the element in the array
const index = a1.indexOf("Amit");
console.log(index);                 */

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//filter() it creates a new array

/*const ages = [23, 25, 26, 34, 25, 9, 1, 5, 67];
const philter = ages.filter(checkVoter);      //in the brackets of filter function we have passes a paramerter checkVoter
function checkVoter(voter) {            //checkVoter is a functin defined in this line according to which ages will be filtered out
    //filter() function doesnt know what to filter so always we have to define a function to tell what to filter        
    return voter >= 18;
}
console.log(philter);   */

//Example 2 of filter() function

/*const numb = [12, 36, 2, 5, 2, 9, 5, 8, 47];          //here we are invoking the function first and defining it in the next line
const checknumb = numb.filter(ifEven);        //defining the function to check whihc are the even no. in the array
function ifEven(division) {
    return division % 2 == 0;               // use % sign to check or get the reminder
}
console.log(checknumb);             */

//Example 3 of filter() function

/*var oddy = [12, 3, 62, 5, 144, 6, 7, 8, 95, 45];     //In this example we have created the function first and then invoked it in filter function parameter unlike above two examples
function ifodd(numby) {
    return numby % 2 != 0;                   //checking odd no. with not equals to !==
}
oddy = oddy.filter(ifodd);                  // this is we are overriding the orignal array but this overriding will not work with const array declearation
console.log(oddy);              */

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//find() function : it returns the first value form the array which passes the test/condition unlike filter() which returns every element which passes the condition/test

/*var numbers = [12, 45, 69, 87, 1, 2, 3, 5];
function smaller(numbers) {              //function defined to find the number in the array smaller than 10
    return numbers < 10;
}
numbers = numbers.find(smaller);          // find() functin will return only one vaule
console.log(numbers);   */                   // it will return the first value which passes the condition/test

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//findIndex() this give the index of the element which passes the condition

/*var number = [10, 45, 69, 87, 1, 2, 3, 5];
function greater(check) {                //function defined to find the number greater than 10
    return check > 10;
}
number = number.findIndex(greater);       //findIndex() function will retrun only one value
console.log(number);    */                    //it will retrun the index of the first element which passes the test

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//forEach() syntax : arr.forEach(callback(currentvalue,index,array),[, thisAarg])

//iteration with forEach()
/*const nam = ["amit", "saini", "suryavanshi"];
const nam1 = nam.forEach(function (currval, index) {
    console.log(index + " -- " + currval);
})          */

//example 2

/*const ank = [10, 20, 30, 40, 50];
const ank1 = ank.forEach(function (currval, index, arr) {     //use of callback function, all parameter of callback() are not neccessary
    console.log(arr[index] + 100);                        //adding 10 and then printing to each element of the array
})  */

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// includes() function

/*var samplearr = ["Jai", "Shree", "Ram"];                       //include() for string will also work same way
console.log(samplearr.includes("Ram"));     */


//example 2
/*const array1 = [1, 2, 3];                                  //includes() for numbers
console.log(array1.includes(2));    */

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// map() function
/*const samplearr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(samplearr2.map(x => x * 2));    */                       //each element is mapped with the reule x=x*2

//example 2
/*const samplearr3 = ["Shree Ram", "Shree Krishna", "Mahakal"];       // concating wiht each element of array using map()
console.log(samplearr3.map(x => "Jai " + x));   */

//example 3
/*const heros = [{ name: 'Spider-Man' }, { name: 'Thor' }, { name: 'Black Panther' },
{ name: 'Captain Marvel' }, { name: 'Silver Surfer' }];

const arraynew = heros.map((herosEle, index) => {        //'herosEle' is the one element of the array for each iteration
    return { id: index, hero: herosEle.name };         //we are returning an object here, id and hero are new key defined then index and herosEle.name are the values respectively
})
console.log(arraynew);          */
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*const abc = [87, 965, 51, 5, 1, 5659, 66];                          //sorting numbers in ascending order
console.log(abc.sort());

const cba = ["sljfoijf", "oljsfjso", "ljf0wjfpw"];
console.log(cba.sort());    */

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*const io = [1, 2, 3, 4];
console.log(io.push(5));        //adding element in the end and return the array itself
console.log(io.unshift(0));     //adding element in the end and return the lenght only not the array
console.log(io);                //printing the array to check push() and unshift()
console.log(io.pop());           //deleting the last element of the array and return the deleted element only of the aray
console.log(io);
console.log(io.shift());         //deleting the first element of the array and returnthe deleted element only of the array
console.log(io);
console.log(io.slice(1, 3));      //returns only the sliced element only

const iop = [7, 8, 4, 5, 6, 9, 1, 23, 6, 5,];
console.log(iop.splice(2, 1, "hello"));   //this will only return the deleted element, splice() can be used to add element to specific index and deleting element of specific indexes
console.log(iop);   */                       //this will show the array the added element of the array

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Ques. converting all array element into one string and their concatination
/*let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());                                // arr.toString() to convert array element into one single string
console.log(myColor.join("+")); */                                 // join() function to concatinate all the sring element, further '+' is used as a paratmerter(seprator)

//Ques. convertig each element of the array in upper case
/*let strngs = ["avengers", "captain america", "ironman", "black panther"];
let n = strngs.map((ele, index) => {
    return ele.toUpperCase();
})
console.log(n); */

//----------------------------------------------------------------------------------------------------------------------------------------------
//reduce() function
/*const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = arr.reduce((accum, currval) => {
    return accum + currval;             //sum of all the elements of the array
})
console.log(sum);
const product = arr.reduce((accum, currval) => {
    return accum * currval;               // product of all the elements of the array
})
console.log(product);   */

//finding avg using reduce function
/*const avg = arr.reduce((accum, currval, index, array) => {
    let total = accum += currval;            //storing the sum of all elements in the variable 'total'     
    if (index === arr.length - 1) {        //This condition  is neccessary otherwise on each iteration the sum will be get diveded by the length of the array
        return total / arr.length;         //once the if condition is satisfied then sum of elements('total') can be divide with the array length 
    }
    return total;
})
console.log(avg);   */

//-------------------------------------------------------------------------------------------------------------





