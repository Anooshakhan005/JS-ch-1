//ch#1: variable and data type.

//hamari screen par achanak se koi message ajaye use pop up kehte hain 
//java me popup lagane k liye hum alert use karte hain 
alert(' Alert (hi Anoosha Khan)');


//console.log('anoosha') ye ek command hai 
//iska kaam hai print karna {log = print }
console.log('(console.log) Welcome Ansh');


//  Variable:-
//variable ek container hai jisme hum data save karte hain 
//is container me hum jo bhi likhte hain woh save ho jata hai lekin isko
//show karane k liye console.log()me variable ka name bager double codes k likhna hai 
// Example : console.log(variableName)
//variable k name k bad equalstwo (= )ko javaScript me {assignment_operator} kehte hain 
//assignment operator means a = 'b';   means (b) jo variable ki  value hai 
// ise save kardo (a) me means variable me 
// Note :(variable ke name ka case sensitive hai ) variable me equals ke right sight jo bhi alphabat ,number etc . woh value kehlati hai
// or jo variable me equal k left sight hai use variable name kehte hain 
//variable ka name kuch bhi rakha ja sakta dehan rahe woh coding k words me na ho 

// variable 
name = 'Variable (data seve)';
console.log(name);

//variable values { null - undefined } {boolean value : True - false }

x = 'null';
console.log(x);

y = 'undefined';
console.log(y);

a = '(boolean value )true';
console.log(a);

b = '(boolean value )false';
console.log(b);



//variable rules 
// 1st:- isme agar hum ek hi name 2times likhe to hame alphabates change karne honge

//  --- Example ---- >
alpha = '(small ) alphabate';
console.log(alpha);

Alpha = '(capital ) Alphabate';
console.log(Alpha);


// 2nd rule:- variables k name me sirf   alphabates , digits , underscore (_) , or 
// ( $ ) dollar hi likh sakte hain    variable name me space bhi nhi de sakte 
// example k liye line number 57 ko uncomment karke check karo
// variable name ='variable name me space dene ki waja se error hai';


//3rd rule:- variable ka name ka first letter (capital ya small  alphabate) hona chahiye
//ya phir koi underscore ( _ ) hona chahiye 
// ya phir dollar ($) hona chahiye 

Az = 'variable name first letter capital';
console.log(Az);


aZ = 'variable name first letter small';
console.log(a);

$x = 'variable name first letter dollar sign';
console.log($x);

_a = 'variable name first one is underScore';
console.log(_a);

//variable define :- let , const ,var


//2015 me hum var use karte the q k hamare pas 2015 me let or const nhi hote the
//2015 me hamare javaScript ka new standard aya  {(ES6) Echma Script six} jise rules or 
//features bhi keh sakte hain ise modern jvaScript bhi kehte hain
//ab hum vara kabhi use nhi karenge q k isme bohot confusion hati hai or error bhi ate hain
var age = 'var ,28';
// age='var ,22';
// age='var ,24';
console.log(age);


//let update ho sakta hai lekin redeclare nhi hosakta 
let fullName = 'let (Anoosha)';
// fullName='let (Anoosha1)';
// fullName='let (Anoosha2)';
console.log(fullName);



//constent (const) redeclare bhi nhi ho sakta or update bhi nhi ho sakta 
const $cast = 'Khan Ghouri';
// $cast='Khan Ghouri1';
// $cast='Khan Ghouri2';
console.log($cast);


//block scope kisi bhi block scope ka matlab hai curli braces{}
//ise oneblock kehte hain 
{
    let _curliBraces = 'curli braces';
    console.log(_curliBraces);
}

//primitive data type ye 7 data type hote hain 
// i : number , numerical
// ii: string 
// iii: bolean
//iv : undefine
//v : null        ye apne ap me ek object hota hai
// vi : biglint
//vii : symbol

//number , numerical data type
let _num = 17;
console.log(_num);

// string data type
let _string = 'string data type';
console.log(_string);


let _bolean = true;
console.log(_bolean);
// undefine data type
let o;
console.log(o);

// null data type
let _n = null;
console.log(_n);

//nigint data type
let bi = BigInt('123');
console.log(bi);

//symbol
let s = Symbol('Heloo ansh');
console.log(s);

//object bohot sari values ko save karne k liye hum object ka use karte hain 
//object 
const student = {
    name: 'Anoosha khan',
    father: 'nawaid khan',
    age: 18,
    ispass: true,
};
//agar mujhe student object me kuch add karna hai means me ye chahti hu k age 20 se 21 ho jaye
//to me is tarah likhungi
//example
student['age']=student.age +1;
console.log(student);

//ch#2:operators and conditional statement




