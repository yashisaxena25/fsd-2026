var a= 10;
let b=20;
let d=30;
const c= 30;

let und;
let bool=true;
let nul=null;

console.log(typeof bool);
console.log(typeof null);
console.log(typeof c);
console.log(b+d);
console.log(a+b);

let age=2;
if(age>=18)
{
    console.log("adult");
}
else
    {
       console.log("minor");
    }
let day=3;
switch(day){
   case 1:
        console.log("monday");
        break;

   case 2:
        console.log("tue");
        break;
   case 3:
        console.log("wed");
        break;
   case 4:
        console.log("thurs");
        break;
   default:
        conole.log("wrong day");

}

let arr=[10,20,30,40];

console.log(arr[0]);
arr.push(50);
console.log(arr);
arr.pop();
console.log(arr);

let students=
{
   name:"vikas",
   age:27,
   rollno:50,
}

console.log(students.name);
console.log(students.rollno);

//function 
function add(p,q)
{
    return p+q;
}
console.log(add(2,5));

//arrow function

const multiply=(p,q)=>p*q;
console.log("arrow function is ", multiply(2,5));

//date

let today =new Date();
console.log(today);

//math functions
console.log(Math.sqrt(4));
console.log(Math.max(2,5));
console.log(Math.pow(2,3));
console.log(Math.random());

//string
txt="hello world";
console.log(txt.length);
console.log(txt.toUpperCase());
console.log(txt.toLowerCase());
console.log(txt.includes("hello"));

// type conversion 
let strnum="123";
let convert=Number(strnum);
console.log(convert+10);

