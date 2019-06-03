//const declared only once ,however using let const can be modified

const  pi= 3.14159265;
console.log(pi);

console.log(x); //accessing variable without declaring and defining gives undefined 



//var avaiable everywhere in the code
var x;
x=1;
if(true){
    x = 2;
    console.log(x);
    x = 2;
    console.log(x);
}
console.log(x);

//let variable only exists between the curly brackets {}
let y = 100;
if(true){
    let y = 200;
    console.log(y);
}
console.log(y);

//logical operator AND OR NOT
let hungry = true;
let thirsty = false;
console.log(hungry && thirsty); // false
console.log(hungry || thirsty); // true
console.log(!thirsty) ; // true 

//control structure

for(var i = 1 ; i <=10 ; i++){
    console.log(i);
}

//switch 

let day = 'Monday';
switch(day) {
    case 'Monday' :
    console.log("Today is" + " " + day  );
    break;
    case 'Tuesday' :
    console.log("Today is second day" );
    break;
    case 'Sunday' :
    console.log("Today is" + " " + Holiday  );
    break;
} 
