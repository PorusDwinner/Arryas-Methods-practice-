//1. Write a Javascript program that increments the count after every 2 seconds by 2 and stops incrementing when the count reaches 10.

let count = 0
let timer = setInterval(function(){
    if(count == 10){
        clearInterval(timer)
    }else{
        count = count + 2
        console.log(count)
    }
},2000)
